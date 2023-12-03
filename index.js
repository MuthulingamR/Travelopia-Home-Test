let description = document.getElementById('description');
let button = document.getElementById('show-more');

var isContentOne = true; // Initial state

function changeOfDescription() {
    // Toggle between two content values
    if (isContentOne) {
        description.innerHTML = `
            Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, 
            embracing Christianity in the fourth century. This rich cultural and natural environment makes it an 
            exciting destination for a wide range of adventure, activity, and walking holidays.
            <br>
            <br>
            There are many pagan sites to visit as well as UNESCO World Heritage-listed churches, which are – almost without exception – built in stunning locations. 
            Surrounded by forests, perched on the top of dramatic gorges or silhouetted before snow-capped mountains, 
            they draw us to magnificent open spaces filled with a huge variety of trees and wildflowers. On Armenia tours we see 
            wonderful mountains, lakes, and waterfalls in the countryside – and relish cooling breezes – while the cafés and restaurants of the country’s capital, 
            Yerevan, are proof of an emerging economy. Mount Ararat towers majestically over the city, and beautiful scenery is plentiful.
        `;
        button.textContent = 'Show Less \u2191';
    } else {
        description.textContent = 'Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environment makes it an exciting destination for a wide range of adventure, activity, and walking holidays...';
        button.textContent = 'Show More \u2193';
    }
    // Toggle the state for the next click
    isContentOne = !isContentOne;
}

button.addEventListener('click', changeOfDescription);