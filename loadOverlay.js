async function createElementsFromJson(data) {
    const container = document.getElementById('layersGeneratorsContainer');

    for (const item of data) {
        const optionMain = document.createElement('div');
        optionMain.classList.add('OptionMain');

        const imgOption = document.createElement('div');
        imgOption.classList.add('imgOption');

        const img = document.createElement('img');
        img.classList.add('layersGeneratorOption');
        img.src = item.imageUrl;

        imgOption.appendChild(img);

        const descriptionGenera = document.createElement('div');
        descriptionGenera.classList.add('descriptionGenera');

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = item.description;

        descriptionGenera.appendChild(descriptionSpan);

        optionMain.appendChild(imgOption);
        optionMain.appendChild(descriptionGenera);

        container.appendChild(optionMain);
    }
}

async function fetchDataAndCreateElements() {
    try {
        const response = await fetch('https://tacotribe.github.io/tacotribeoverlay.github.io/exportOverlay.json');
        const jsonData = await response.json();
        await createElementsFromJson(jsonData);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

// Call the function to fetch data and create elements
fetchDataAndCreateElements();
