// === DATA PENTING: Ganti konten di sini ===
const characterImage = 'images/karakter.png'; // Ganti dengan path gambar karakter Anda

const messages = [
    { 
        title: "Untuk Gadis Tercantik", 
        text: "Kotak musik ini kakak buat hanya untuk adek, sebagai pengingat betapa berharganya diri adek untuk kakak.", 
        imageSrc: "images/foto-dia.jpg"
    },
    { 
        title: "Tentang Senyum adek", 
        text: "Setiap kali adek tersenyum, dunia kakak ikut menjadi lebih cerah dan indah. Teruslah tersenyum ya dek untuk kakak dan dunia.",
        imageSrc: "images/foto-senyum.jpg"
    },
    { 
        title: "Momen Favorit kakak", 
        text: "Di antara semua waktu, saat bersama adek adalah yang paling kakak suka. Sederhana tapi sangat berarti. Kakak selalu menantikan hari kita bertemu.",
        imageSrc: "images/foto-bersama.jpg"
    },
    { 
        title: "Harapan kakak", 
        text: "Semoga kita bisa terus membuat kenangan-kenangan baru yang lebih indah dari ini. Mewujudkan segala impian kita, dn Kakak Menikahi Adek💕.",
        imageSrc: "images/foto-harapan.jpg"
    },
    { 
        title: "Satu Kalimat Untuk adek", 
        text: "Kakak sayang adek, selalu.",
        imageSrc: "images/foto-cinta.jpg"
    }
];

// === Logika Aplikasi (Tidak perlu diubah) ===
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startOverlay = document.getElementById('start-overlay');
    const music = document.getElementById('background-music');
    const lid = document.getElementById('lid');
    const character = document.getElementById('character');
    const messageDisplay = document.getElementById('message-display');
    const musicBoxContainer = document.getElementById('music-box-container');
    const dedicationScreen = document.getElementById('dedication-screen');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Masukkan gambar karakter
    character.innerHTML = `<img src="${characterImage}" alt="Karakter Lucu">`;

    let currentMessageIndex = 0;

    function showMessage(index) {
        const msg = messages[index];
        document.getElementById('message-image').src = msg.imageSrc;
        document.getElementById('message-title').innerText = msg.title;
        document.getElementById('message-text').innerText = msg.text;
    }

    startButton.addEventListener('click', () => {
        startOverlay.style.opacity = '0';
        music.play().catch(e => console.error("Autoplay ditolak:", e));
        
        setInterval(createSparkle, 500);

        setTimeout(() => {
            startOverlay.style.display = 'none';
            musicBoxContainer.classList.add('visible');
        }, 1000);
        
        setTimeout(() => {
            lid.classList.add('open');
            character.classList.add('playing');
            messageDisplay.classList.add('visible');
            showMessage(currentMessageIndex);
        }, 3000);
    });

    nextBtn.addEventListener('click', () => {
        if (currentMessageIndex < messages.length - 1) {
            currentMessageIndex++;
            showMessage(currentMessageIndex);
        } else {
            messageDisplay.style.opacity = '0';
            musicBoxContainer.style.opacity = '0';
            setTimeout(() => {
                dedicationScreen.classList.add('visible');
            }, 500);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentMessageIndex > 0) {
            currentMessageIndex--;
            showMessage(currentMessageIndex);
        }
    });

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const size = Math.random() * 5 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        sparkle.style.opacity = Math.random();
        document.getElementById('sparkle-canvas').appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 10000);
    }
});
