const nodEntity = require('./Nod.js')
const Nod = nodEntity.Nod;
const logic = require('./Logic.js')

class Tree
{
    constructor(value)
    {
        this.nodeZero = new Nod(value)
    }

    Add(value)
    {
        var newNode = new Nod(value);
        logic.Add(this.nodeZero, newNode);
    }

    Min()
    {
        var minimo = logic.Min(this.nodeZero);
        return minimo;
    }

    Delete(valueToDelete)
    {
        this.nodeZero = logic.Delete(this.nodeZero, valueToDelete);
    }

    CountNodes()
    {
        return logic.CountNodes(this.nodeZero);
    }


}

module.exports = {
    Tree : Tree
}   