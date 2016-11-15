import React, { Component } from 'react'


const TodoItem = (props) => {
    return <li className={props.item.done?'list-group-item disabled':'list-group-item'} onClick={props.markDone}>
    <input className="checkboxMargin" type="checkbox" checked={props.item.done} />
    <span className={props.item.done?'text-done':''}>{props.item.text}</span>
</li>
}


export default TodoItem
