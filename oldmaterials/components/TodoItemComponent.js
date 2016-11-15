import React, { Component } from 'react' //
//this is the stateless component that sets the parameters of the one item thatt gets created within the list
const TodoItemComponent = (props) => {
  //{props.item.done?'list-group-item disabled':'list-group-item'} gives the two different statuses of the li element.
  return <li className={props.item.done?'list-group-item disabled':'list-group-item'} onClick={props.markDone}>
    <input type="checkbox" checked={props.item.done} />
    <span className={props.item.done?'text-done':''}>{props.item.text}</span>
  </li> //this is the code that renders the li element that gets rendered after the user places in their todo text and presses enter.
}

export default TodoItemComponent
