class Grass extends LivingCreature {

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
