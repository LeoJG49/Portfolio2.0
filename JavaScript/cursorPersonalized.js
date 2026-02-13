(function() {
    const link = document.querySelectorAll('.hover-this, .logo, .technologies-item, .project-links, .footer-title, .social-media a')
    const cursor = document.querySelector('.cursor')

    link.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(4)';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    const animateit = function(e) {
        const span = this.querySelector('span')
        const {offsetX: x, offsetY: y} = e,
        {offsetWidth: width, offsetHeight: height} = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y /height * (move * 2) - move;
    }

    const editCursor = e => {
        const {clientX: x, clientY: y} = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    }

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
})()