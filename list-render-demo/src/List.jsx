
function List() {

    const fruits = [{name: "apple", calories: 95}, 
    {id: 1, name: "orange", calories: 45},
    {id: 2, name: "banana", calories: 105},
    {id: 3, name: "coconut", calories: 159},
    {id: 4, name: "pear", calories: 38}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); REVERSE-ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories);  // NUMERIC order
    
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    


    const listItems = fruits.map(fruit => <li k={fruit.id}>
                                                        {fruit.name}: &nbsp;
                                                        <b>{fruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);
}

export default List