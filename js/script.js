function showThankYouAlert() {
    alert('Mksxih byk omg.....');
}

function moveButton() {
    const btn = document.getElementById('ga');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
}
