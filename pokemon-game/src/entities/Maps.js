import Transform from "../components/Transform.js";
import Sprite from "../components/Sprite.js";

function createMap({ image, x = 0, y = 0, offset = { x: 0, y: 0 }, size = { width: 0, height: 0 } }) {
    return {
        id: crypto.randomUUID(),
        components: {
            oid: null,
            transform: new Transform(x, y),
            sprite: new Sprite({
                image,
                offset,
                size
            })
        }
    };
}

export default createMap;