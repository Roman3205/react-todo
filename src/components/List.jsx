import React from 'react'
import ListItem from './ListItem'

const List = ({ tasks, onImportant, onDone, onDelete }) => {

  const items = tasks.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onDelete={(id) => onDelete(id)}
      onDone={(id) => onDone(id)}
      onImportant={(id) => onImportant(id)}
    />
  ))

  return (
    <ul className="list-group todo-list">
      {items}
    </ul>
  )
}

export default List