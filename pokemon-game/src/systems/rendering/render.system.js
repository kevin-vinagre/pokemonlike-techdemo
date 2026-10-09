class RenderEngine {

    constructor() {
        this.idbase = 0
        this.renderObjects = []

    }

    async addObject({ components }) {
        const imagem = new Image()
        imagem.src = components.sprite.image
        await imagem.decode()
        components.sprite.size.width = imagem.width
        components.sprite.size.height = imagem.height
        const sprite = {
            image: imagem,
            offset: {
                x: components.sprite.offset?.x ?? 0,
                y: components.sprite.offset?.y ?? 0
            },
            size: {
                width: components.sprite.size.width ?? imagem.width,
                height: components.sprite.size.height ?? imagem.height
            },

        }

        if (components.sprite?.crop) {
            const crop = {
                x: components.sprite.crop.x ?? 0,
                y: components.sprite.crop.y ?? 0,
                width: imagem.width / 4,
                height: imagem.height
            };
            sprite.crop = crop;
        }

        this.renderObjects.push({
            oid: this.idbase += 1,
            sprite,
            transform: {
                x: components.transform.x + (components.sprite.offset.x ?? 0),
                y: components.transform.y + (components.sprite.offset.y ?? 0)
            }
        });
        return this.idbase
    }

    updateObject({ components }) {
        this.renderObjects.forEach(Renderobjects => {
            if (Renderobjects.oid === components.oid) {
                Renderobjects.transform.x = components.transform.x + (components.sprite.offset.x ?? 0)
                Renderobjects.transform.y = components.transform.y + (components.sprite.offset.y ?? 0)
            }
        })
    }

    removeObject({ oid }) {
        this.renderObjects = this.renderObjects.filter(components => components.oid !== oid);
    }

    clearRender() {
        if (this.idbase > 0) this.idbase = 0
        this.renderObjects.length = 0
    }

    render(context) {
        this.renderObjects.forEach(components => {
            if (components.sprite?.crop) {
                context.drawImage(components.sprite.image,
                    components.sprite.crop.x,
                    components.sprite.crop.y,
                    components.sprite.crop.width,
                    components.sprite.crop.height,
                    components.transform.x,
                    components.transform.y,
                    components.sprite.crop.width,
                    components.sprite.crop.height)
            } else {
                context.drawImage(components.sprite.image,
                    components.transform.x,
                    components.transform.y)
            }
        })
    }

}
const renderEngine = new RenderEngine()

export default renderEngine;