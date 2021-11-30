////Chess Board


let currentFill = 255;
function setup() {
    createCanvas(600, 600);
}
function draw() {

    chessBoard();
}

function chessBoard() {
    for (x = 0; x < 525; x += 75) {
        for (y = 0; y < 525; y += 75) {
            square(x, y, 75);
            if (currentFill === 255) {
                fill(255);
                currentFill = 0;
            }
            else {
                fill(0);
                currentFill = 255;
            }
        }
    }
    ffg
}