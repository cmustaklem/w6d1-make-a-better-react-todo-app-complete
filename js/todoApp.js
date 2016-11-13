//this is the global file that pulls in the components of our main page
import React from 'react'
import ReactDOM from 'react-dom'
import TodoItemsComponent from '../components/TodoItemsComponent'

function renderView() { //this function renders the react components and references todoApp within the query selector
  ReactDOM.render(
    <TodoItemsComponent />,
    document.querySelector('#todoApp')
  )
}

renderView()
