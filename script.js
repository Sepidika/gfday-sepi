// === DATA PENTING: Ganti konten di sini ===
const characterImage = 'images/karakter.png'; // Ganti dengan path gambar karakter Anda

const messages = [
    { 
        title: "Untuk Gadis Tercantik", 
        text: "Lihat cantiknya calon istri kakak, matanya yg indah, rambut yg sangat wangi, segalanya adek miliki sangat kakak sukai💕", 
        imageSrc: "images/foto-dia.jpg" 
    },
    { 
        title: "Tentang Senyummu", 
        text: "Senyum adek adalah salah satu sumber hidup dan semangat kakak Tanpa senyumnya adek sudah pasti kakak bakal jatuh terus.", 
        imageSrc: "images/foto-senyum.jpg" 
    },
    { 
        title: "Momen Favoritku", 
        text: "Selalu jadi hari terbaik saat bersamamu. Semua momen bersama bahkan terbaik bagi kakak, kakak ga pernah mau kehilangan semua momen kita♥️.", 
        imageSrc: "images/foto-bersama.jpg" 
    },
    { 
        title: "Harapanku", 
        text: "Tetaplah bersama kakak, jangan kecewakan hubungan ini, jaga kepercayaan yang tlah kita berikan. Kakak ingin Menikah dan menua bersama adek.", 
        imageSrc: "images/foto-harapan.jpg" 
    },
    { 
        title: "Satu Kalimat", 
        text: "Dika Sayang Sepi.", 
        imageSrc: "images/foto-cinta.jpg" 
    }
];

// === Logika Aplikasi (dengan Sistem Login dan Perbaikan Finale) ===
document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen dari HTML
    const loginScreen = document.getElementById('login-screen');
    const nameInput = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');
    
    const startOverlay = document.getElementById('start-overlay');
    const startButton = document.getElementById('start-button');
    const music = document.getElementById('background-music');
    const lid = document.getElementById('lid');
    const character = document.getElementById('character');
    const messageDisplay = document.getElementById('message-display');
    const musicBoxContainer = document.getElementById('music-box-container');
    const dedicationScreen = document.getElementById('dedication-screen');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    character.innerHTML = `<img src="${characterImage}" alt="Karakter Lucu">`;
    
    let currentMessageIndex = 0;
    
    // Fungsi untuk menampilkan pesan polaroid
    function showMessage(index) {
        const msg = messages[index];
        document.getElementById('message-image').src = msg.imageSrc;
        document.getElementById('message-title').innerText = msg.title;
        document.getElementById('message-text').innerText = msg.text;
    }
    
    // Fungsi utama yang menjalankan semua animasi setelah login
    function startExperience() {
        startOverlay.style.opacity = '0';
        music.play();
        setInterval(createSparkle, 500);
        
        setTimeout(() => {
            startOverlay.style.display = 'none';
            musicBoxContainer.classList.add('visible');
        }, 1000);
        
        setTimeout(() => {
            lid.classList.add('open');
            character.classList.add('playing');
            setTimeout(() => {
                musicBoxContainer.classList.add('shrunk');
                setTimeout(() => {
                    messageDisplay.classList.add('visible');
                    showMessage(currentMessageIndex);
                }, 500);
            }, 2000);
        }, 3000);
    }
    
    // Logika Login
    loginButton.addEventListener('click', () => {
        const inputName = nameInput.value.trim();
        const inputPassword = passwordInput.value;
        
        if (inputName.toLowerCase() === 'sherly' && inputPassword === 'Sherly1005') {
            errorMessage.innerText = '';
            loginScreen.style.opacity = '0';
            setTimeout(() => {
                loginScreen.style.display = 'none';
                startOverlay.style.display = 'flex';
            }, 1000);
        } else {
            errorMessage.innerText = 'Nama atau password salah, coba lagi ya.';
            setTimeout(() => {
                errorMessage.innerText = '';
            }, 3000);
        }
    });
    
    // Tombol "Buka" di layar kedua
    startButton.addEventListener('click', startExperience);
    
    // --- PERBAIKAN UTAMA ADA DI SINI ---
    // Tombol navigasi polaroid
    nextBtn.addEventListener('click', () => {
        // Cek apakah ini pesan terakhir atau bukan
        if (currentMessageIndex < messages.length - 1) {
            // Jika BUKAN pesan terakhir, lanjutkan ke pesan berikutnya
            currentMessageIndex++;
            switchMessage();
        } else {
            // Jika INI ADALAH pesan terakhir, tampilkan surat penutup
            messageDisplay.classList.remove('visible');
            musicBoxContainer.style.opacity = '0'; // Sembunyikan kotak musik
            setTimeout(() => {
                dedicationScreen.classList.add('visible');
            }, 1000); // Tunggu animasi selesai
        }
    });
    
    prevBtn.addEventListener('click', () => {
        // Tombol kembali hanya berfungsi jika bukan pesan pertama
        if (currentMessageIndex > 0) {
            currentMessageIndex--;
            switchMessage();
        }
    });
    
    function switchMessage() {
        messageDisplay.classList.remove('visible');
        setTimeout(() => {
            showMessage(currentMessageIndex);
            messageDisplay.classList.add('visible');
        }, 600);
    }
    
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
        setTimeout(() => { sparkle.remove(); }, 10000);
    }
});