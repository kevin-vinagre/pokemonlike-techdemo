class Sprite {
    constructor({ image,
        offset = null,
        size = null,
        crop = null }) {
        this.image = image
        this.offset = offset ? { ...offset } : null
        this.size = size ? { ...size } : null
        this.crop = crop ? { ...crop } : null
    }
}

export default Sprite