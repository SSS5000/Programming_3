class Hunter {
    constructor(i, j, index) {
        this.i = i;
        this.j = j;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        var j = 1;
        while(j < matrix[0].length)
        {
            this.directions.push([this.i, j]);
            j++
        }

    }
    chooseCell(num, num2) {
        this.getNewCoordinates();
        var found = [];
        for (var k in this.directions) {
            var i = this.directions[k][0];
            var j = this.directions[k][1];
            if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) {
                continue;
            } else if (matrix[i][j] == num) {
                found.push([i, j]);
            } else if (matrix[i][j].index == num || matrix[i][j].index == num2) {
                found.push([i, j]);
            }
        }
        return found;
    }
    shoot() {
        var newCell = random(this.chooseCell(3, 4));

        if(newCell)
        {
        console.log("aa");
            var I = newCell[0];
            var J = newCell[1];
            matrix[I][J] = 0;
        }
    }
}
