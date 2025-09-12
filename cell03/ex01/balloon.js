const balloon = document.getElementById('balloon');
let balloonSize = 200; 
let colorIndex = 0; 
const colors = ['red', 'green', 'blue']; 


function changeColor(forward = true) {
    if (forward) {
        colorIndex = (colorIndex + 1) % colors.length;
    } else {
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', () => {
    if (balloonSize < 420) {
        balloonSize += 10;
        balloon.style.width = balloonSize + 'px';
        balloon.style.height = balloonSize + 'px';
        changeColor(true); 
    } else {
        balloonSize = 200;
        balloon.style.width = balloonSize + 'px';
        balloon.style.height = balloonSize + 'px';
        balloon.style.backgroundColor = 'red'; 
        colorIndex = 0; 
    }
});

balloon.addEventListener('mouseleave', () => {
    if (balloonSize > 200) {
        balloonSize -= 5;
        balloon.style.width = balloonSize + 'px';
        balloon.style.height = balloonSize + 'px';
        changeColor(false); 
    }
});
