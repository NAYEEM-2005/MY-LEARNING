// Initialize the map and set its view
const map = L.map('map-container').setView([-26.0, 136.0], 4); // Focus on Australia

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define player data with their hometown coordinates
const playersData = [
    // Indian Players
    { name: "Rohit Sharma", hometown: "Mumbai", coordinates: [19.0760, 72.8777] },
    { name: "Virat Kohli", hometown: "Delhi", coordinates: [28.6139, 77.2090] },
    { name: "MS Dhoni", hometown: "Ranchi", coordinates: [23.3441, 85.3096] },

    // Australian Players
    { name: "David Warner", hometown: "Eastern Sydney", coordinates: [-33.9508, 151.2102] },
    { name: "Marcus Stoinis", hometown: "Melbourne, Australia", coordinates: [-37.8136, 144.9631] },
    { name: "Pat Cummins", hometown: "Weston, New South Wales", coordinates: [-33.2185, 151.2624] },

    // West Indies Players
    { name: "Chris Gayle", hometown: "Kingston", coordinates: [17.9714, -76.7859] },
    { name: "Kieron Pollard", hometown: "T&T", coordinates: [10.6918, -61.2225] },
    { name: "Jason Holder", hometown: "Barbados", coordinates: [13.1939, -59.5432] },

    // New Zealand Players
    { name: "Colin de Grandhomme", hometown: "Auckland", coordinates: [-36.8485, 174.7633] },
    { name: "Henry Nicholls", hometown: "Dunedin", coordinates: [-45.8742, 170.5036] },
    { name: "Tom Latham", hometown: "Christchurch", coordinates: [-43.5321, 172.6362] },

    // South Africa Players
    { name: "Quinton de Kock", hometown: "Durban", coordinates: [-29.8587, 31.0218] },
    { name: "Faf du Plessis", hometown: "Pretoria", coordinates: [-25.7461, 28.1881] },
    { name: "AB de Villiers", hometown: "Paarl", coordinates: [-33.7609, 18.9690] },
];

// Add markers for each player's hometown or country
playersData.forEach(player => {
    const marker = L.marker(player.coordinates).addTo(map);
    marker.bindPopup(`
        <b>${player.name}</b><br>
        <i>${player.hometown}</i><br>
    `);
});

