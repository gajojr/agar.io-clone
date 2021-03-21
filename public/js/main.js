const socket = io('http://localhost:3000');

const $joinBtn = document.getElementById('join');

const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
ctx.textAlign = 'center';
ctx.font = 'sans-serif 18px';
ctx.fillStyle = 'black';
ctx.fillText('George13', 95, 50);
ctx.font = 'sans-serif 12px';
ctx.fillText('8692', 95, 65);


ctx.beginPath();
ctx.arc(195, 80, 30, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.strokeStyle = '#000';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(175, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.strokeStyle = '#000';
ctx.fill();
ctx.stroke();

$joinBtn.addEventListener('click', () => {
    socket.emit('player-joined', 'ide gas na max');
    const $startDiv = document.querySelector('.start');
    $startDiv.style.display = 'none';
})

document.addEventListener('mousemove', e => {
    // console.log(e.pageX, e.pageY);
});