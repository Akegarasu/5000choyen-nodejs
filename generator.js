const fs = require("fs");
const { createCanvas } = require('canvas');

class Generator{
    constructor(ctx) {
        this.ctx = ctx;
    }

    save(width, height) {
        const data = this.ctx.getImageData(0, 0, width, height);
        const canvas = createCanvas(1500, 280);
        canvas.width = data.width;
        canvas.height = data.height - 10;
    
        const ctx = canvas.getContext('2d');
        ctx.putImageData(data, 0, 0);
    
        let b64data = canvas.toDataURL("image/png");

        let path = "./generate.png";
        let base64 = b64data.replace(/^data:image\/\w+;base64,/, "");
        let dataBuffer = Buffer.from(base64, 'base64');
        fs.writeFile(path,dataBuffer,function(err){
            if(err){
                console.log(err);
            }
        })
    }

    getB64(width, height) {
        const data = this.ctx.getImageData(0, 0, width, height);
        const canvas = createCanvas(1500, 280);
        canvas.width = data.width;
        canvas.height = data.height - 10;

        const ctx = canvas.getContext('2d');
        ctx.putImageData(data, 0, 0);

        return canvas.toDataURL("image/png");
    }
}


module.exports = Generator;