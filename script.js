// Initialize the map
const map = L.map("map").setView([39.8283, -98.5795], 4);

// Add tile layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Load visited parks from localStorage
let visitedParks = JSON.parse(localStorage.getItem("visitedParks")) || {};

// Create a marker cluster group
const markers = L.markerClusterGroup();

// Color scheme for states
const stateColors = {};
const colors = [
  "#e41a1c",
  "#377eb8",
  "#4daf4a",
  "#984ea3",
  "#ff7f00",
  "#ffff33",
  "#a65628",
  "#f781bf",
  "#999999",
  "#66c2a5",
  "#fc8d62",
  "#8da0cb",
];

// Assign colors to states
const uniqueStates = [...new Set(parksData.map((park) => park.state))].sort();
uniqueStates.forEach((state, index) => {
  stateColors[state] = colors[index % colors.length];
});

// Current filter state
let currentFilter = "all";
let searchQuery = "";

// Create custom icon for each state
function createCustomIcon(state, visited) {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
            background-color: ${visited ? "#28a745" : stateColors[state]};
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 4px rgba(0,0,0,0.4);
        "></div>`,
    iconSize: [16, 16],
  });
}

// Function to create popup content
function createPopupContent(park) {
  return `
        <div class="park-popup">
            <h3>${park.name}</h3>
            <p>${park.state}</p>
            <p class="park-description">${park.description}</p>
            <button class="visit-toggle ${
              visitedParks[park.id] ? "visited" : ""
            }"
                    onclick="toggleVisited('${park.id}')">
                ${visitedParks[park.id] ? "Visited ✓" : "Mark as Visited"}
            </button>
        </div>
    `;
}

// Function to check if a park matches current filters
function parkMatchesFilters(park) {
  // Check visit filter
  if (currentFilter === "visited" && !visitedParks[park.id]) return false;
  if (currentFilter === "not-visited" && visitedParks[park.id]) return false;

  // Check search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    return (
      park.name.toLowerCase().includes(query) ||
      park.state.toLowerCase().includes(query) ||
      park.description.toLowerCase().includes(query)
    );
  }

  return true;
}

// Add markers for each park
parksData.forEach((park) => {
  const marker = L.marker(park.coordinates, {
    icon: createCustomIcon(park.state, visitedParks[park.id]),
  });

  marker.bindPopup(createPopupContent(park));
  markers.addLayer(marker);
});

// Add the marker cluster group to the map
map.addLayer(markers);

// Create sidebar content
function updateSidebar() {
  const parksList = document.getElementById("parks-list");
  parksList.innerHTML = "";

  // Group parks by state
  const parksByState = {};
  parksData.forEach((park) => {
    if (!parksByState[park.state]) {
      parksByState[park.state] = [];
    }
    parksByState[park.state].push(park);
  });

  // Calculate total stats
  const totalParks = parksData.length;
  const totalVisitedCount = Object.values(visitedParks).filter(Boolean).length;
  const percentage = ((totalVisitedCount / totalParks) * 100).toFixed(1);

  // Update header stats
  document.getElementById("visited-count").textContent = totalVisitedCount;
  document.getElementById("visited-percentage").textContent = percentage;

  // Create sections for each state
  Object.keys(parksByState)
    .sort()
    .forEach((state) => {
      const stateParks = parksByState[state];
      const visibleParks = stateParks.filter(parkMatchesFilters);

      // Skip empty states when filtered
      if (visibleParks.length === 0) return;
      const stateSection = document.createElement("div");
      stateSection.className = "state-section";

      // Calculate state stats
      const stateVisited = stateParks.filter(
        (park) => visitedParks[park.id]
      ).length;

      const stateHeader = document.createElement("h2");
      stateHeader.innerHTML = `
        ${state}
        <span class="state-stats">${stateVisited}/${stateParks.length}</span>
      `;
      stateHeader.style.color = stateColors[state];
      stateSection.appendChild(stateHeader);

      // Add parks for this state
      stateParks.forEach((park) => {
        if (!parkMatchesFilters(park)) return;

        const parkItem = document.createElement("div");
        parkItem.className = `park-item ${
          visitedParks[park.id] ? "visited" : ""
        }`;
        parkItem.innerHTML = `
                <div class="visit-indicator"></div>
                ${park.name}
            `;

        // Click handler to fly to park
        parkItem.addEventListener("click", () => {
          map.flyTo(park.coordinates, 10);
          const popup = L.popup()
            .setLatLng(park.coordinates)
            .setContent(createPopupContent(park))
            .openOn(map);
        });

        stateSection.appendChild(parkItem);
      });

      parksList.appendChild(stateSection);
    });
}

// Function to toggle visited state
function toggleVisited(parkId) {
  visitedParks[parkId] = !visitedParks[parkId];
  localStorage.setItem("visitedParks", JSON.stringify(visitedParks));

  // Update marker color
  markers.eachLayer((marker) => {
    const park = parksData.find((p) => p.id === parkId);
    if (
      park &&
      marker.getLatLng().lat === park.coordinates[0] &&
      marker.getLatLng().lng === park.coordinates[1]
    ) {
      marker.setIcon(createCustomIcon(park.state, visitedParks[parkId]));
    }
  });

  // Update popup if it's open
  const popup = document.querySelector(".park-popup");
  if (popup) {
    const button = popup.querySelector(".visit-toggle");
    button.classList.toggle("visited");
    button.textContent = visitedParks[parkId] ? "Visited ✓" : "Mark as Visited";
  }

  // Update sidebar
  updateSidebar();
}

// Set up search functionality
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  updateSidebar();
});

// Set up filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active state
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Update filter and refresh
    currentFilter = btn.dataset.filter;
    updateSidebar();
  });
});

// Initial sidebar update
updateSidebar();
