const pressed = {}

window.addEventListener('keydown', (event) => {
    pressed[event.key.toLowerCase()] = true;
})

window.addEventListener('keyup', (event) => {
    pressed[event.key.toLowerCase()] = false;
})

function getInputState() {
    return pressed;
}

export { getInputState }