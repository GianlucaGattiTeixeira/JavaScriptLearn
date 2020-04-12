const logic = require('./Logic.js')


class Nod
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    Insert(node)
    {
        let newNode = new Nod(node);
        logic.Add(this, newNode); 
    }

    Delete(valueToDelete)
    {
        logic.Delete(this, valueToDelete);
    }
}

module.exports = {
    Nod : Nod
}   