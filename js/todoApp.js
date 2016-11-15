import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'


function renderView() {
   ReactDOM.render(
       <Todos />,
       document.getElementById('todoApp')
   )
}

renderView()
