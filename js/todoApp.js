import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'
//we are using ReactDOM because the values within this global js file will be consistently updated and placed onto the HTML file. It is rendering the Todos component. It is rendering within the #todoApp div.  

function renderView() {
   ReactDOM.render(
       <Todos />,
       document.getElementById('todoApp')
   )
}

renderView()
