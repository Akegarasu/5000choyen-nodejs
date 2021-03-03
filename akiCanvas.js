const {createCanvas} = require('canvas');
const Drawer = require("./drawer");

class settings{
    static getBackgroundOrder(){
        return 'white';
    }
}

class akiCanvas {
    constructor(w, h) {
        this.canvas = createCanvas(w, h);
        this.ctx = this.canvas.getContext('2d');

        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.offset = {
            top: {
                x: 0,
                y: 0
            },
            bottom: {
                x: 250,
                y: 130
            }
        };

        this.dragging = false;
        this.dragPosition = {
            x0: 0,
            y0: 0
        };
        this.drawer = new Drawer(this.ctx);

    }


    redrawTop(text) {
        const x = 70;
        const y = 100;
        const order = settings.getBackgroundOrder();
        this.drawer.redrawTop(text, x, y, order);
    }

    redrawBottom(offsetX, text) {
        const x = (offsetX || this.offset.bottom.x) + 70;
        const y = this.offset.bottom.y + 100;
        const order = settings.getBackgroundOrder();
        this.drawer.redrawBottom(text, x, y, order);
    }

    save() {
        this.drawer.save();
    }

    getB64() {
        return this.drawer.getB64();
    }

}

module.exports = akiCanvas;