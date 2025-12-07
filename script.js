function toggleNavbar() {
    const navbar = document.getElementById('navbar');

    // Jika navbar belum punya display (kosong), maka cek computed style
    const currentDisplay = window.getComputedStyle(navbar).display;

    if (currentDisplay === 'none') {
        navbar.style.display = 'flex';   // tampilkan
    } else {
        navbar.style.display = 'none';   // sembunyikan
    }
}