class Grass {
    constructor(i, j, index) {
        this.i = i;
        this.j = j;
        this.index = index;
        this.multiply = 0;
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
        var found = [];
        for (var k in this.directions) {
            var i = this.directions[k][0];
            var j = this.directions[k][1];
            if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) {
                continue;
            } else if (matrix[i][j] == num) {
                found.push([i, j]);
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));


        if (newCell && this.multiply >= 8) {
            var newJ = newCell[0];
            var newI = newCell[1];

            matrix[newJ][newI] = new Grass(newJ, newI, 1);
            this.multiply = 0;

        }
    }

}
