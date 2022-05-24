function toggleSlideMenu() {
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('openBtn').classList.toggle('open');
    document.getElementById('closeBtn').classList.toggle('open');
}

const menu = document.getElementById('menu');

menu.localScroll({duration: 800});