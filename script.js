// CAMPUS LOCATION DATABASE

const locations = [

    {
        name: "Academic Block A",
        category: "Classroom",
        building: "Block A",
        floor: "Ground and First Floor",
        description: "Classrooms and lecture halls."
    },

    {
        name: "Science Laboratory",
        category: "Laboratory",
        building: "Block B",
        floor: "First Floor",
        description: "Science practical laboratory."
    },

    {
        name: "Central Library",
        category: "Facilities",
        building: "Library Building",
        floor: "Ground Floor",
        description: "Books, reading and study facilities."
    },

    {
        name: "Administration Office",
        category: "Office",
        building: "Administrative Block",
        floor: "Ground Floor",
        description: "Student enquiries and administrative services."
    },

    {
        name: "Main Auditorium",
        category: "Facilities",
        building: "Auditorium Building",
        floor: "Ground Floor",
        description: "Seminars and college events."
    },

    {
        name: "Computer Laboratory",
        category: "Laboratory",
        building: "Block A",
        floor: "Second Floor",
        description: "Computer practical sessions."
    },

    {
        name: "Main Gate",
        category: "Facilities",
        building: "Campus Entrance",
        floor: "Entrance",
        description: "Main campus entrance."
    }

];

let selectedLocation = null;


// SEARCH LOCATION

function searchLocation() {

    let searchValue = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if (searchValue === "") {

        alert("Please enter a location name.");

        return;

    }

    let result = locations.find(function(location) {

        return location.name.toLowerCase() === searchValue;

    });

    if (!result) {

        result = locations.find(function(location) {

            return location.name.toLowerCase().includes(searchValue);

        });

    }

    if (result) {

        displayLocation(result);

    } else {

        alert("Location not found. Please try another name.");

    }

}


// DISPLAY LOCATION DETAILS

function displayLocation(location) {

    selectedLocation = location;

    document.getElementById("details").innerHTML = `

        <h3>📍 ${location.name}</h3>

        <p><b>Category:</b> ${location.category}</p>

        <p><b>Building:</b> ${location.building}</p>

        <p><b>Floor:</b> ${location.floor}</p>

        <p><b>Description:</b> ${location.description}</p>

        <p style="color:green;">
            Location successfully found!
        </p>

    `;

    document.getElementById("directions").innerHTML = "";

}


// MAP LOCATION

function showLocation(name) {

    let location = locations.find(function(item) {

        return item.name === name;

    });

    if (location) {

        document.getElementById("searchInput").value = name;

        displayLocation(location);

        document.getElementById("explore").scrollIntoView({
            behavior: "smooth"
        });

    }

}


// FILTER LOCATIONS

function filterLocation(category) {

    let result = locations.find(function(location) {

        return location.category === category;

    });

    if (result) {

        document.getElementById("searchInput").value = result.name;

        displayLocation(result);

        document.getElementById("details").scrollIntoView({
            behavior: "smooth"
        });

    } else {

        alert("No locations found in this category.");

    }

}


// NAVIGATION DIRECTIONS

function showDirections() {

    if (selectedLocation === null) {

        alert("Please search and select a destination first.");

        return;

    }

    let startingPoint = document
        .getElementById("startPoint")
        .value;

    document.getElementById("directions").innerHTML = `

        <h3>🧭 Your Directions</h3>

        <p>Starting Point: ${startingPoint}</p>

        <p>Destination: ${selectedLocation.name}</p>

        <p>Building: ${selectedLocation.building}</p>

        <p>Floor: ${selectedLocation.floor}</p>

        <h3>✓ Destination Selected Successfully!</h3>

        <p>
            Follow the campus pathways towards
            ${selectedLocation.name}.
        </p>

        <small>
            This is a prototype route demonstration.
            Actual walking directions require a verified campus map.
        </small>

    `;

}
