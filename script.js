document.addEventListener('DOMContentLoaded', (event) => {
    const img = document.getElementById('bouncingImage');
    let containerWidth = window.innerWidth;
    let containerHeight = window.innerHeight;
    let imgWidth = img.clientWidth;
    let imgHeight = img.clientHeight;

    let posX = Math.random() * (containerWidth - imgWidth);
    let posY = Math.random() * (containerHeight - imgHeight);
    let velX = 2;
    let velY = 2;

    function updatePosition() {
        posX += velX;
        posY += velY;
        var ouch = document.getElementById("ouch");
        if (posX + imgWidth >= containerWidth || posX <= 0) {
            velX *= -1;
            ouch.play();
        }
        if (posY + imgHeight >= containerHeight || posY <= 0) {
            velY *= -1;
            ouch.play();
        }

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
    }

    function animate() {
        updatePosition();
        requestAnimationFrame(animate);
    }

    animate();

    // Update container dimensions on window resize
    window.addEventListener('resize', () => {
        containerWidth = window.innerWidth;
        containerHeight = window.innerHeight;
    });
});
document.getElementById('bouncingImage').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio').play();
  });