const imageCache = {};
let baseURL; // Menyimpan baseURL yang diambil dari server

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

async function fetchBaseURL() {
    try {
        const response = await fetch('https://api-base-url.vercel.app/api/baseURL.php');
        const data = await response.json();
        baseURL = data.baseURL;
        return data.baseURL;
    } catch (error) {
        console.error('Error fetching baseURL:', error);
        return null;
    }
}

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

async function gambarUtamaURL() {
    const inputGambarUtamaURL = document.getElementById('gambarUtamaURL');
    const loading = document.getElementById('loading');
    
    const maxNumber = await fetchMaxNumber();
    
    if (!maxNumber) {
        alert('Failed to fetch max minted NFT. Please try again later.');
        return;
    }

    let nomor = parseInt(inputGambarUtamaURL.value.trim());

    if (isNaN(nomor) || nomor < 1 || nomor > maxNumber) {
        alert(`That NFT hasn't been minted yet. Please come back later.`);
        return;
    }

    const formattedNomor = nomor.toString();
    const namaFile = `${formattedNomor}.png`;

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

    const formData = new FormData();
    formData.append('gambarUtama', blobGambarUtama);
    formData.append('layer', blobLayer);

    try {
        const response = await fetch('https://api-base-url.vercel.app/api/minted.php', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const responseData = await response.json();
            const imageUrl = responseData.imageUrl;

            // Gunakan URL gambar salinan
            const downloadLink = document.createElement('a');
            downloadLink.href = imageUrl;
            downloadLink.download = 'sticker.png';
            downloadLink.click();
        } else {
            alert('Failed to create minted image.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while processing the image.');
    }
}

// Pastikan untuk memanggil fetchBaseURL saat halaman dimuat
window.addEventListener('load', function () {
    fetchBaseURL();
    
    // ... (Bagian lain dari kode JavaScript Anda)

    var links = document.querySelectorAll('a.downloadSticker');
    links.forEach(function (link) {
        link.setAttribute('onclick', 'gabungkanGambar()');
    });
});
