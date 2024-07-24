document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav ul li a');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // To keep the button active on page load based on the section in view
    window.addEventListener('hashchange', () => {
        buttons.forEach(button => {
            if (button.getAttribute('href') === window.location.hash) {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            }
        });
    });

    // To set the active class on page load based on the current hash
    if (window.location.hash) {
        document.querySelector(`nav ul li a[href="${window.location.hash}"]`).classList.add('active');
    } else {
        document.getElementById('inicio-btn').classList.add('active');
    }
});

// fin del header//

//inicio carrucel//

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});


//fin del carrucel//