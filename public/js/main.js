const socket = io('http://localhost:3000');

const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

document.addEventListener('DOMContentLoaded', () => {
    socket.emit('player-joined', 'ide gas na max');
})

document.addEventListener('mousemove', e => {
    // console.log(e.pageX, e.pageY);
});