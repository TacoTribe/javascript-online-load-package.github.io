<script>
    // Fungsi-fungsi sebelumnya

    function previewGambarFromURL(targetId) {
        // Fungsi untuk menampilkan gambar dari URL
        // ...
    }

    async function loadImageFromURL(url) {
        // Fungsi untuk memuat gambar dari URL
        // ...
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

    function gambarUtamaURL() {
        const inputGambarUtamaURL = document.getElementById('gambarUtamaURL');
        let namaFile = inputGambarUtamaURL.value.trim(); // Mengambil nilai input dan menghilangkan spasi di awal dan akhir

        if (!namaFile) {
            alert('You need to input Jlema ID');
            return;
        }

        // Menambahkan ekstensi .png jika tidak sudah ada
        if (!namaFile.toLowerCase().endsWith('.png')) {
            namaFile += '.png';
        }

        // URL base untuk memeriksa gambar
        const baseURL = 'https://cdn-mdxtacotribe.42web.io/nft/';
        const url = `${baseURL}${namaFile}`;

        // Buat objek gambar baru untuk memeriksa keberadaan gambar
        const img = new Image();
        img.onload = function () {
            // Jika gambar tersedia, tampilkan pada elemen 'gambarUtama'
            const gambarUtama = document.getElementById('gambarUtama');
            gambarUtama.src = url;
        };
        img.onerror = function () {
            alert('Not found. Try another character.');
        };
        img.src = url;
    }

    // Fungsi gabungkanGambar() yang diperbarui
    async function downloadImage(url) {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    }

    async function gabungkanGambar() {
        const gambarUtama = document.getElementById('gambarUtama');
        const layer = document.getElementById('layer');

        if (gambarUtama.src === '#' || layer.src === '#') {
            alert('Silakan pilih gambar utama dan layer terlebih dahulu.');
            return;
        }

        const blobGambarUtama = await downloadImage(gambarUtama.src);
        const blobLayer = await downloadImage(layer.src);

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

        // Menggambar layer di atas gambar utama
        context.drawImage(imageLayer, 0, 0, canvas.width, canvas.height);

        const downloadLink = document.createElement('a');
        canvas.toBlob(function (blob) {
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = 'jlema_sticker.png';
            downloadLink.click();
        });
    }
</script>

<script>
window.addEventListener('load', function() {
    // Temukan semua elemen dengan kelas tertentu
    var links = document.querySelectorAll('a.downloadSticker');

    // Loop melalui setiap elemen dan tambahkan atribut onclick
    links.forEach(function(link) {
        link.setAttribute('onclick', 'gabungkanGambar()');
    });
});
</script>
