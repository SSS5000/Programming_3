class GrassEater {
    constructor(i, j, index) {
        this.i = i;
        this.j = j;
        this.energy = 8;
        this.index = index;
        this.directions = [];
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.i - 1, this.j - 1],
            [this.i, this.j - 1],
            [this.i + 1, this.j - 1],
            [this.i - 1, this.j],
            [this.i + 1, this.j],
            [this.i - 1, this.j + 1],
            [this.i, this.j + 1],
            [this.i + 1, this.j + 1]
        ];
    }

    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var k in this.directions) {
            var i = this.directions[k][0];
            var j = this.directions[k][1];
            if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) {
                continue;
            } else if (matrix[i][j] == num) {
                found.push([i, j]);
            } else if (matrix[i][j].index == num) {
                found.push([i, j]);
            }
        }
        return found;
    }

    mul() {
        var newCell = random(this.chooseCell(0));


        if (newCell) {
            var newJ = newCell[0];
            var newI = newCell[1];

            matrix[newJ][newI] = new GrassEater(newJ, newI, 2);
            this.energy = 8;
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newI = newCell[0];
            var newJ = newCell[1];
            matrix[newI][newJ] = matrix[this.i][this.j];
            matrix[this.i][this.j] = 0;
            this.j = newJ;
            this.i = newI;

            this.energy--;
        }
    }
    eat() {
        var newCell = random(this.chooseCell(1));
        this.acted = true;
        if (this.energy == 0) {
            matrix[this.i][this.j] = 0;
        }
        if (newCell) {
            var newI = newCell[0];
            var newJ = newCell[1];
            matrix[newI][newJ] = matrix[this.i][this.j];
            matrix[this.i][this.j] = 0;
            this.j = newJ;
            this.i = newI;

            this.energy++;
        } else {
            this.move();
        }
    }
}
