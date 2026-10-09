import renderEngine from "../systems/rendering/render.system.js";
import createPlayer from "../entities/Player.js";
import { movement } from "../systems/movement/movement.system.js";
import createMap from "../entities/Maps.js";

class IslandHouse {
    player = null
    map = null
    async start({ canvas }) {

        const playerSpawPoint = {
            x: canvas.width / 2 - 25,
            y: canvas.height / 2
        }
        this.player = createPlayer({
            image: new URL("../assets/img/character/playerDown.png", import.meta.url).href,
            x: playerSpawPoint.x,
            y: playerSpawPoint.y
        })
        this.map = createMap({
            image: new URL("../assets/img/maps/IslandHouse_zoomed.png", import.meta.url).href,
            x: 0,
            y: 0,
            offset: {
                x: -17,
                y: -710
            },
            size: {
                width: canvas.width,
                height: canvas.height
            }
        })

        this.map.components.oid = await renderEngine.addObject(this.map)
        this.player.components.oid = await renderEngine.addObject(this.player)
    }

    update() {
        movement({ map: this.map });
    }
}

export default IslandHouse