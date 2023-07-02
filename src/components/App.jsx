import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Search from './Search';
import List from './List';
import AddItem from './AddItem';

const App = () => {
    const initialData = [
      { id: 1, title: 'To drink coffee', done: true, important: true },
      { id: 2, title: 'To wash car', done: false, important: false },
      { id: 3, title: 'To do app', done: true, important: false },
    ]
  
    let [tasks, setTasks] = useState(initialData);

  let findId = (tasks, id) => {
    return tasks.findIndex(item => {
      return item.id == id;
    })
  }

  const importantHandler = (id) => {
    const ind = findId(tasks, id)

    let newTasks = [...tasks];
    newTasks[ind].important = !newTasks[ind].important;
    setTasks(newTasks);
  }

  const doneHandler = (id) => {
    const ind = findId(tasks, id)

    let newTasks = [...tasks];
    newTasks[ind].done = !newTasks[ind].done;
    setTasks(newTasks);
  }

  const deleteItemHandler = (id) => {
    const ind = findId(tasks, id)

    let newTasks = [...tasks];
    newTasks.splice(ind, 1);
    setTasks(newTasks);
  }

  const CreateTask = (title) => {
    alert(title)
  }

    const done = tasks.reduce((count, item) => {
      if (item.done) {
        return count + 1
      } else {
        return count
      }
    }, 0)

    const todo = tasks.length - done

  return (
    <div className="todo-app">
      <Header todo={todo} done={done} />
      <Search />
      <List tasks={tasks} onImportant={(id) => importantHandler(id)} onDeleteItem={(id) => deleteItemHandler(id)} onDone={(id) => doneHandler(id)} />
      <AddItem createTask={(title) => CreateTask(title)} />
    </div>
  );
}

export default App;