const socket = io('http://localhost:3000');

const $joinBtn = document.getElementById('join');

let gameState = 'not-started';

$joinBtn.addEventListener('click', () => {
    gameState = 'playing';
    socket.emit('player-joined', 'ide gas na max');
    const $startDiv = document.querySelector('.start');
    $startDiv.style.display = 'none';
    document.body.style.overflow = 'unset';
    $gameDiv = document.querySelector('.game');
    $gameDiv.style.width = '3000px';
    $gameDiv.style.height = '3000px';
})

document.addEventListener('mousemove', e => {
    if (gameState === 'playing') {
        const $playerCircle = document.querySelector('.circle');
        $playerCircle.style.left = e.pageX + 'px';
        $playerCircle.style.top = e.pageY + 'px';
        // window.scroll({
        //     top: e.clientX - e.pageX,
        //     left: e.clientY - e.pageY,
        //     behavior: 'smooth'
        // });
    }
});