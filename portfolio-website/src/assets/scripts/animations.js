function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

function fadeOut(element) {
    element.style.opacity = 1;

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity > 0) {
            requestAnimationFrame(tick);
        } else {
            element.style.display = 'none';
        }
    };

    requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('welcome-section');
    fadeIn(introSection);

    // Example of triggering fadeOut on a button click
    const hideButton = document.getElementById('hide-intro');
    if (hideButton) {
        hideButton.addEventListener('click', () => {
            fadeOut(introSection);
        });
    }
});