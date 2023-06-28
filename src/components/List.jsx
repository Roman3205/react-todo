import React, { useState } from 'react'
import ListItem from './ListItem'

const List = () => {
  const initialData = [
    { id: 1, title: 'To drink coffee', done: true, important: true },
    { id: 2, title: 'To wash car', done: true, important: false },
    { id: 3, title: 'To do app', done: true, important: false },
  ]

  let [tasks, setTasks] = useState(initialData);

  const importantHandler = (id) => {
    const ind = tasks.findIndex(item => {
      return item.id == id;
    })

    let newTasks = [...tasks];
    newTasks[ind].important = !newTasks[ind].important;
    setTasks(newTasks);
  }

  const doneHandler = (id) => {
    const ind = tasks.findIndex(item => {
      return item.id == id;
    });

    let newTasks = [...tasks];
    newTasks[ind].done = !newTasks[ind].done;
    setTasks(newTasks);
  }

  const deleteItemHandler = (id) => {
    const ind = tasks.findIndex(item => {
      return item.id == id;
    });

    let newTasks = [...tasks];
    newTasks.splice(ind, 1);
    setTasks(newTasks);
  }

  const items = tasks.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onDeleteItem={(id) => deleteItemHandler(id)}
      onDone={(id) => doneHandler(id)}
      onImportant={(id) => importantHandler(id)}
    />
  ))

  return (
    <ul className="list-group todo-list">
      {items}
    </ul>
  )
}

export default List