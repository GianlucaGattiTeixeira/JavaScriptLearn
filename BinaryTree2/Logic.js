const nodEntity = require('./Nod.js')
const Nod = nodEntity.Nod;

function Del(node, valueToDelete)
{
    if (valueToDelete == this.value)
    {
        if (this.value.left == null && this.value.right == null)
        {
            node = null;
            return;
        }
        return;
    }
    else if (ValueToDelete < this.value)
    {
        return;
    }
    return;
}

function Add(node, newNode)
{
    if(newNode.value < node.value)
        {
            !node.left ? node.left = newNode : Add(node.left, newNode);
        }
    else if(newNode.value  > node.value)
        {
            !node.right ? node.right = newNode : Add(node.right, newNode);
        }
}




function Min(node)
{
    if (node.left == null)
    {
        return node.value;
    }
    else
    {
        node.left.Min(node.left);
    }
}




module.exports = 
{
    Add : Add,
    Min : Min
}