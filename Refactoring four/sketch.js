//Chess Board
// Refactor four.
// Srushti Vyas


let currentFill = 0; // Made a fill varibale, to allow us to change colors of the squares 

function setup() {
    createCanvas(600, 600);
    noLoop();  // No loop function so it won;t blink again and again
}
function draw() {

    chessBoard();
}

function chessBoard() {
    // draws the pattern of the suare from the provided numbers
    // using two for loops for for width squares and the heigth squares......(horizontal squares row and vertical squares row)
    for (x = 0; x < 525; x += 75) {
        for (y = 0; y < 525; y += 75) {
            
            if (currentFill === 255) {
                fill(255);                    // if this is true then it will make the black squares
                currentFill = 0;
            }
            else {
                fill(0);
                currentFill = 255;           // or else it will make the white ones.
            }
            square(x, y, 75); 
        }
    }

}