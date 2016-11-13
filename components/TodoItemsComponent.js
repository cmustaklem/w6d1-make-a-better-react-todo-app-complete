import React, { Component } from 'react'
import TodoItemComponent from './TodoItemComponent'
//the imports are pulling in react and the TodoItemComponent because it renders the data for the li element that shows the todo items.
class TodoItemsComponent extends Component {
  constructor(props) {
    super(props)
    this.typing = this.typing.bind(this)
    this.enter = this.enter.bind(this)
    this.markDone = this.markDone.bind(this)
    this.updatedTodos = this.updatedTodos.bind(this) //these methods are being used within the component

    this.state = { //this states that the values of newTodo and todos can be changed. this.state is what allows the change by placing no value within it
      newTodo: '',
      todos: []
    }
  }

  componentDidMount() { //this is initiated after a component has been mounted.
    var localTodos = JSON.parse(localStorage.getItem('todos'))

    if (localTodos) {
      this.setState({
        todos: localTodos //this triggers a re-rendering of the state
      })
    }
  }

  typing(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  enter(e) {
    if (e.key === 'Enter' && e.target.value !== '') { //if there is a string within the input field (and its not empty) the text will be added to the to-do list after pressing Enter
      let updatedTodos = this.state.todos

      updatedTodos.push({
        text: e.target.value,
        done: false
      }) //this pushes the text from the input field onto the todo list with a checkbox value of false, which means its unchecked

      this.setState({
        newTodo: ''
      }) //this sets the state back to being an empty string after a person presses enter

      this.updatedTodos(updatedTodos)
    }
  }

  markDone(currentTodoIndex) {
    let updatedTodos = this.state.todos //updates the name of the todos state so that we can refer to the state as updatedTodos.

    if (updatedTodos[currentTodoIndex].done === false) {
      updatedTodos[currentTodoIndex].done = true
    }
    else {
      updatedTodos[currentTodoIndex].done = false
    }
//the default value for the checkbox is set to not be pressed with updatedTodos[currentTodoIndex].done = false
//this sets it so when the user presses enter after inputting text, the object will not be checked
    this.updatedTodos(updatedTodos) //this runs the updatedTodos component within the component
  }

  updatedTodos(updatedTodos) {
    this.setState({
      todos: updatedTodos
    }) //setting the state for the todo item after someone has clicked the checkbox

    localStorage.setItem('todos', JSON.stringify(updatedTodos)) //this updates the localstorage so that its recorded that at li element has been checked as being complete.
  }
    //this is pulls in the TodoItemComponent component within the todoListOfComponents variable and renders the content. Using map, it is converting the contents within the array into something set by parameters within the code. That is being set within the methods and render function.
  render() {
    var todoListOfComponents = this.state.todos.map((todoItem, todoItemIndex) => {
        return <TodoItemComponent item={todoItem} key={todoItemIndex} markDone={() => this.markDone(todoItemIndex)} />
    })
        //this returns the div that is being created after the user presses the Enter button. It is calling the methods that are being set at the top of the file. It is also calling upon the todoListOfComponents component.
    return <div>
    <ul className="list-group">
      {todoListOfComponents}
    </ul>
      <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter} /><br />
    </div>
  }
}

export default TodoItemsComponent
