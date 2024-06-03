import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                {id: 2, name: "orange", calories: 45},
                {id: 3, name: "banana", calories: 105},
                {id: 4, name: "coconut", calories: 159},
                {id: 5, name: "pear", calories: 38}];

  const vegetables = [{id: 6, name: "celery", calories: 15}, 
                    {id: 7, name: "carrots", calories: 25},
                    {id: 8, name: "squash", calories: 60},
                    {id: 9, name: "broccoli", calories: 50},
                    {id: 10, name: "pepper", calories: 40}];

  return (
    <>
        {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
        {vegetables.legnth > 0 ? <List items={vegetables} category="Vegetables"/> : null}
        
        
    </>
  );
}

export default App
