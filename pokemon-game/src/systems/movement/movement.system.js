import { getInputState } from "../input/input.system.js";
import renderEngine from "../rendering/render.system.js";

const keys = getInputState();

function movement({ map }) {
    if (keys.ArrowRight) map.components.transform.x -= 2;
    if (keys.ArrowLeft) map.components.transform.x += 2;
    if (keys.ArrowUp) map.components.transform.y += 2;
    if (keys.ArrowDown) map.components.transform.y -= 2;
    renderEngine.updateObject(map)
}

export { movement }
