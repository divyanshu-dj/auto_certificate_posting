import { createCanvas, loadImage } from "canvas";
import fs from "fs";

function wrapText(text, x, y, maxWidth, ctx) {
    const lineHeight = 50;
    let words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + " ";
        let lineSize = ctx.measureText(testLine);

        if (lineSize.width > maxWidth && i > 0) {
            ctx.fillText(line, x, y);
            line = words[i] + " ";
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

export default async function generateCertificate(
    name,
    title,
    outCertifictePath
) {
    try {
        const template = await loadImage("./image/template.png");
        const width = template.width;
        const height = template.height;
    
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext("2d");
    
        ctx.drawImage(template, 0, 0);
    
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        const maxWidth = width - 300;
        ctx.font = "bold 40px Georgia";
        wrapText(
            `Congratulations ${name}!`,
            width / 2,
            height / 2 - 20,
            maxWidth,
            ctx
        );
        ctx.font = "40px Georgia";
        wrapText(
            `For merging the PR: ${title}`,
            width / 2,
            height / 2 + 60,
            maxWidth,
            ctx
        );
    
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(outCertifictePath, buffer);
        console.log("Certificate generated.");
    } catch (error) {
        console.log(error);
    }
}
