// Function to generate SVG content
function logoGenerator(shape, color, text) {
    let shapeSVG;

    switch (shape) {
        case 'circle':
            shapeSVG = `<circle cx="50" cy="50" r="40" fill="${color}" />`;
            break;
        case 'square':
            shapeSVG = `<rect x="10" y="10" width="80" height="80" fill="${color}" />`;
            break;
        case 'triangle':
            shapeSVG = `<polygon points="50,10 90,90 10,90" fill="${color}" />`;
            break;
        default:
            throw new Error('Invalid shape');
    }

    return `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="50%" y="50%" font-size="12" text-anchor="middle" fill="black" dy=".3em">${text}</text>
    </svg>`;
}

module.exports = {
    logoGenerator
};
