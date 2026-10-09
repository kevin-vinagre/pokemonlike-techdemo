import Transform from "../components/Transform.js";
import Sprite from "../components/Sprite.js";

function createPlayer({ image, x, y }) {
    return {
        id: crypto.randomUUID(),
        components: {
            oid: null,
            transform: new Transform(x, y),
            sprite: new Sprite({
                image,
                offset: {
                    x: 0,
                    y: 0,
                },
                size: {
                    width: 48,
                    height: 48
                },
                crop: {
                    x: 0,
                    y: 0,
                    width: 22,
                    height: 12,
                }
            })
        }
    }
}

export default createPlayer