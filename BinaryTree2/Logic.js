const nodEntity = require('./Nod.js')
const Nod = nodEntity.Nod;



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


function Delete(node, valueToDelete)
{
    if (valueToDelete < node.value)
    {
        console.log('entro al if')
        Delete(node.left, valueToDelete);
    }
    else if (valueToDelete > node.value)
    {
        Delete(node.right, valueToDelete);
    }
    else if (valueToDelete == node.value)
    {
        if (node.left === null && node.right === null)
        {
            node.value = null; 
            node = null;
            return node;
        }
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
    Min : Min,
    Delete : Delete
}