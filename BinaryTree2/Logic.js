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

function Min(node)
{
    if (!node.left)
    {
        return node;
    }
    else
    {
        return Min(node.left);
    }
}


function MinValue(node)
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



function Delete(node, valueToDelete)
{
    if (valueToDelete < node.value)
    {
        node.left = this.Delete(node.left, valueToDelete);
        return node;
    }
    else if (valueToDelete > node.value)
    {
        node.right = this.Delete(node.right, valueToDelete);
        return node;
    }
    else if (valueToDelete == node.value)
    {
        if (node.left === null && node.right === null)
        {
            return null;
        }
        else if(node.left != null && node.right == null)
        {
            node = node.left;
            return node
        }
        else if(node.left == null && node.right != null)
        {
            node = node.right;
            return node
        }
        else 
        {
            leftBranch = node.left;
            node = node.right;
            min = Min(node);
            min.left = leftBranch;
            return node;
        }
    }

}




module.exports = 
{
    Add : Add,
    Min : Min,
    Delete : Delete
}