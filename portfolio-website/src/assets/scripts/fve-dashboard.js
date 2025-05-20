// This file will handle the logic for fetching and displaying data from the home solar power system's API on the FVE page.

async function fetchFveData() {
    try {
        const response = await fetch('https://api.your-solar-system.com/data'); // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayFveData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayFveData(data) {
    const fveContainer = document.getElementById('fve-data-container'); // Ensure this element exists in your fve.html
    fveContainer.innerHTML = ''; // Clear previous data

    // Example of displaying data
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'fve-item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>Production: ${item.production} kWh</p>
            <p>Consumption: ${item.consumption} kWh</p>
        `;
        fveContainer.appendChild(itemElement);
    });
}

// Call the fetch function when the page loads
document.addEventListener('DOMContentLoaded', fetchFveData);