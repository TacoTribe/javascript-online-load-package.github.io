  function createElementsFromJson(data) {
    const container = document.getElementById('layersGeneratorsContainer');

    data.forEach(item => {
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
    });
  }

  fetch('https://tacotribe.github.io/tacotribeoverlay.github.io/exportOverlay.json')
    .then(response => response.json())
    .then(jsonData => createElementsFromJson(jsonData))
    .catch(error => console.error('Error fetching JSON:', error));
