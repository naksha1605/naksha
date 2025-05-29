import './App.css'


import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

function App() {
  const [todoItems, setTodoItems] = useState(
    [{
      todoTitle: "Task1",
    todoDescription:"Wakeup Morning",
    complete: false
  },
    {
      todoTitle: "Task2",
    todoDescription:"Going to gym",
    complete: false
  }
    ])
    //create todo is create a new todoItems and complete is defalut to false 
    const createTodoItem = (todoTitle,todoDescription) => {
      const newTodoItems = [...todoItems, { todoTitle,todoDescription, complete: false }];
      setTodoItems(newTodoItems);
      };
      //delete todo is delete a splice method from that index values
      const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItems]
        newTodoItems.splice(index, 1)
        setTodoItems(newTodoItems)
        }
        //complete todo is complete that todo cand change to true and true values is text-decorection to "line-through"
      const completeTodoItem = (index) => {
          const newTodoItems = [...todoItems];
          newTodoItems[index].complete === false
          ? (newTodoItems[index].complete = true)
          : (newTodoItems[index].complete = false);
          setTodoItems(newTodoItems)
          };
          //update todo from to directly prompt format and returns that todo items
          const updateTodoItem = (index) => {
            const newTodoItems = [...todoItems];
            const items = newTodoItems[index];
            let newTitle = prompt(`Update ${items.todoTitle}? `, items.todoTitle);
            let newDesc = prompt(`Upadate ${items.todoDescription}?`, items.todoDescription)
            let todoObj = { todoTitle: newTitle, todoDescription: newDesc, complete: false };
            newTodoItems.splice(index, 1, todoObj);
            if (newTitle === null || newTitle === "" && newDesc === null || newDesc === "") {
            return;
            } else {
            items.todoTitle = newTitle;
            items.todoDescription= newDesc
            }
            setTodoItems(newTodoItems);
            };

return(

 <div className="app">
  {/*  App componenet is a parent Componenet and send the props to child componenets */}
  <TodoInput createTodoItem={createTodoItem} />
  {todoItems.map((items, index) => (
<TodoItem 
    key={index} 
    index={index} 
    items={items} 
    deleteTodoItem={deleteTodoItem}
    completeTodoItem={completeTodoItem}
    updateTodoItem={updateTodoItem}
/>
))}

</div>
);
}
export default App;
