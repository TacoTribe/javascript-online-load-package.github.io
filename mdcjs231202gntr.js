 const imageCache = {};

  async function downloadImage(url) {
      if (imageCache[url]) {
          return imageCache[url];
      }

      const response = await fetch(url);
      const blob = await response.blob();
      imageCache[url] = blob;
      return blob;
  }

  async function loadImage(url) {
      return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
      });
  }

  function previewGambarFromURL(targetId) {

  }

  async function loadImageFromURL(url) {

  }

  function pilihLayer(event) {
      const semuaOpsi = document.querySelectorAll('.layersGeneratorOption');
      semuaOpsi.forEach((opsi) => {
          opsi.classList.remove('active');
      });
      event.target.classList.add('active');

      const urlLayer = event.target.src;
      const layer = document.getElementById('layer');
      layer.src = urlLayer;
  }

  const layerOptions = document.querySelectorAll('.layersGeneratorOption');
  layerOptions.forEach((option) => {
      option.addEventListener('click', pilihLayer);
  });

async function fetchMaxNumber() {
    try {
        const response = await fetch('https://tacotribe.github.io/javascript-online-load-package.github.io/max.json');
        const data = await response.json();
        return data.maxNumber;
    } catch (error) {
        console.error('Error fetching max number:', error);
        return null;
    }
}

async function gambarUtamaURL() {
    const inputGambarUtamaURL = document.getElementById('gambarUtamaURL');
    const loading = document.getElementById('loading');
    
    const maxNumber = await fetchMaxNumber();
    
    if (!maxNumber) {
        alert('Failed to fetch max number. Please try again later.');
        return;
    }

    let nomor = parseInt(inputGambarUtamaURL.value.trim());

    if (isNaN(nomor) || nomor < 1 || nomor > maxNumber) {
        alert(`Please input a valid number between 1 and ${maxNumber}`);
        return;
    }

    const formattedNomor = nomor.toString().padStart(4, '0');
    const namaFile = `file_${formattedNomor}.png`;

    const baseURL = 'https://bafybeicngxlex3olbwwof2xtfsjareztc7gnkt6z56eqvdqujuuodp2kji.ipfs.nftstorage.link/';
    const url = `${baseURL}${namaFile}`;

    loading.style.display = 'block';

    const img = new Image();
    img.onload = function () {
        const gambarUtama = document.getElementById('gambarUtama');
        gambarUtama.src = url;
        loading.style.display = 'none';
    };
    img.onerror = function () {
        loading.style.display = 'none';
        alert('Not found. Try another character.');
    };
    img.src = url;
}

  async function gabungkanGambar() {
      const gambarUtama = document.getElementById('gambarUtama');
      const layer = document.getElementById('layer');

      if (gambarUtama.src === '#' || layer.src === '#') {
          alert('Please select the layers');
          return;
      }

      const [blobGambarUtama, blobLayer] = await Promise.all([
          downloadImage(gambarUtama.src),
          downloadImage(layer.src),
      ]);

      const urlGambarUtama = URL.createObjectURL(blobGambarUtama);
      const urlLayer = URL.createObjectURL(blobLayer);

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = 1500;
      canvas.height = 1500;

      const imageGambarUtama = new Image();
      imageGambarUtama.src = urlGambarUtama;
      await new Promise((resolve) => {
          imageGambarUtama.onload = resolve;
      });
      context.drawImage(imageGambarUtama, 0, 0, canvas.width, canvas.height);

      const imageLayer = new Image();
      imageLayer.src = urlLayer;
      await new Promise((resolve) => {
          imageLayer.onload = resolve;
      });

      context.drawImage(imageLayer, 0, 0, canvas.width, canvas.height);

      const downloadLink = document.createElement('a');
      canvas.toBlob(function (blob) {
          const url = URL.createObjectURL(blob);
          downloadLink.href = url;
          downloadLink.download = 'sticker.png';
          downloadLink.click();
      });
  }

  window.addEventListener('load', function () {
      var links = document.querySelectorAll('a.downloadSticker');
      links.forEach(function (link) {
          link.setAttribute('onclick', 'gabungkanGambar()');
      });
  });
