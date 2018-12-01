

var matrix = [];
var side = 10;
// matrix = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 4, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
// ];

function setup() {

    var n = 80;
    var lion = 0;
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < n; j++) {
            if (lion != 0) {
                matrix[i][j] = random([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3]);
            } else {
                matrix[i][j] = random([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4]);
                if (matrix[i][j] == 4) {
                    lion++;
                }
            }

        }
    }

    matrix[Math.round(random(matrix.length))][0] = 5

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                matrix[i][j] = new Grass(i, j, 1);
            } else if (matrix[i][j] == 2) {
                matrix[i][j] = new GrassEater(i, j, 2);
            } else if (matrix[i][j] == 3) {
                matrix[i][j] = new Predator(i, j, 3);
            } else if (matrix[i][j] == 4) {
                matrix[i][j] = new Lion(i, j, 4);
            } else if (matrix[i][j] == 5) {
                matrix[i][j] = new Hunter(i, j, 5);
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');


}

console.log(matrix);









function draw() {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].index == 1) {
                matrix[i][j].mul();
            } else if (matrix[i][j].index == 5) {
                matrix[i][j].shoot();
            } else  if (matrix[i][j].index == 2) {
                if (matrix[i][j].energy == 18) {
                    matrix[i][j].mul();
                }
                if (matrix[i][j].acted == true) {
                    matrix[i][j].acted = false;
                    continue;
                } else {
                    matrix[i][j].eat();
                }
            } else if (matrix[i][j].index == 4) {
                console.log(matrix[i][j].hunt);
                if (matrix[i][j].acted == true) {
                    matrix[i][j].acted = false;
                    continue;
                } else {
                    if (matrix[i][j].hunt == 5) {
                        matrix[i][j].eat();
                        matrix[i][j].hunt = 0;
                    } else {
                        matrix[i][j].waalk();
                    }
                }
            } else if (matrix[i][j].index == 3) {
                if (matrix[i][j].energy == 21) {
                    matrix[i][j].mul();
                }
                if (matrix[i][j].acted == true) {
                    matrix[i][j].acted = false;
                    continue;
                } else {
                    matrix[i][j].eat();
                }
            }
        }
    }  // Grass

    
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].index == 1) {
                fill("lightgreen");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill(255, 255, 255);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 4) {
                fill(0, 0, 0);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 5) {
                fill("darkgreen");
                rect(j * side, i * side, side, side);
            }
        }
    }


}
