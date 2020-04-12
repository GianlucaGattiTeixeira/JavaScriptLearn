class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    Add(newValue)
    {
        if(newValue < value)
        {
            !this.left ? this.left = new Node(newValue) : this.left.Add(newValue);
        }
        else if(newValue > value)
        {
            !this.left ? this.right = new Node(newValue) : this.right.Add(newValue);
        }
    }

    Min()
    {
        if (this.left == null)
        {
            return this.value;
        }
        else
        {
            this.left.Min();
        }
    }

    Delete(valueToDelete)
    {
        if (valueToDelete == this.value)
        {
            if (this.value.left == null && this.value.right == null)
            {
                return null;
            }
        }
        else if (ValueToDelete < this.value)
        {
            return;
        }
    }
}

n1 = new Node(5);
n1.Delete(5);
console.log(n1);