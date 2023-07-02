import React from 'react'
import ListItem from './ListItem'

const List = ({tasks, onDeleteItem, onDone, onImportant}) => {

  const items = tasks.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onDeleteItem={onDeleteItem}
      onDone={onDone}
      onImportant={onImportant}
    />
  ))

  return (
    <ul className="list-group todo-list">
      {items}
    </ul>
  )
}

export default List