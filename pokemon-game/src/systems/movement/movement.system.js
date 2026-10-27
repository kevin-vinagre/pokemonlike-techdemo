import { getInputState } from "../input/input.system.js";
import renderEngine from "../rendering/render.system.js";

function movement({ entity }) {
    const keys = getInputState();

    if (keys.d) entity.components.transform.x += 2;
    if (keys.a) entity.components.transform.x -= 2;
    if (keys.w) entity.components.transform.y -= 2;
    if (keys.s) entity.components.transform.y += 2;
    renderEngine.updateObject(entity)
}

export { movement }
