const pressed = {}

window.addEventListener('keydown', (event) => {
    pressed[event.key] = true;
})

window.addEventListener('keyup', (event) => {
    pressed[event.key] = false;
})

function getInputState() {
    return pressed;
}

export { getInputState }