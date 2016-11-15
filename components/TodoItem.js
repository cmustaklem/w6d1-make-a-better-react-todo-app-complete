import React, { Component } from 'react'

//this component is rendered within the Todos Component. The props that are being referenced within this component are being set within the Todos file.

const TodoItem = (props) => {
    return <li className={props.item.done?'list-group-item disabled':'list-group-item'}  onClick={props.markDone}>
    <input className="checkboxMargin" type="checkbox" checked={props.item.done} />
    <span className={props.item.done?'text-done':''}>{props.item.text}</span>
</li>
}
//I rearranged list-group-item disabled':'list-group-item and saw that the todo list would be grayed out without clicking the checkbox. The onClick passes the value that is set with markDone within the Todos component. I added in the checkboxMargin class so the text would not butt up against the checkbox.'text-done' is a class I added to the css file and it slashes the text within that box. 

export default TodoItem
