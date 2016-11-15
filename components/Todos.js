import React, { Component } from 'react'
import TodoItem from './TodoItem'
//I am using class to define this component.
class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.click = this.click.bind(this)
        this.markDone = this.markDone.bind(this)
            //typing, enter, click, markDone are all methods that give give direction for the app on what to do when the user does a specific action. The user can type, click the Add button, press Enter to add something to the to do list, and they can also mark a todo list item as done.
        this.state = {
            newTodo: '',
            todos: []
        } //this sets it so there is no data loaded in when opening the page. I added a value within the newTodo string and it gave the input field a default value
    }
    typing(e) {
        this.setState({
            newTodo: e.target.value
        })
    }
    enter(e) {
        if (e.key === 'Enter' && e.target.value !== '') {
            let updatedTodos = this.state.todos

            updatedTodos.push({
                text: e.target.value,
                done: false
            })
                //updatedTodos.push pushes the data into the todo list. I updated the done: value to true, and it would automatically update the todo item to be complete.
            this.setState({
                newTodo: '',
                todos: updatedTodos
                //after clicking the add button, this sets the value of the input field to being empty, and does not make any additional updates to the todos list. I updated the value of the newTodo, and the string appeared within the input field after adding in a new todo. This is repeated for the click and markDone method.
            })
        }
    }
    click(e) {
        if (e.target.value !== '') {
            let updatedTodos = this.state.todos

            updatedTodos.push({
                text: e.target.value,
                done: false
            })

            this.setState({
                newTodo: '',
                todos: updatedTodos
            })
    }}
    markDone(i) {
        let updatedTodos = this.state.todos

        if (updatedTodos[i].done === false) {
            updatedTodos[i].done = true
        }
        else{
            updatedTodos[i].done = false
        } //for me, the i stands for index. Instead of it being an e for event, this argument is used as an index for the value of the updatedTodo.

        this.setState({
            todos: updatedTodos
        })
    }

    render() { //TodoItems variable maps the TodoItem into an array. todo and i are the arguments for this stateless component. There is a key within the variable because that component will be consistently changing.
        var TodoItems = this.state.todos.map((todo, i) => {
            return <TodoItem item={todo} key={i} markDone={() => this.markDone(i)} />
        })
        return <div className="row">
        <div className="col-sm-6">
            <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter}  />
                <div className="text-center button">
                <button value={this.state.newTodo} className="btn btn-success" onClick={this.click} onChange={this.typing} type="button" id="addBtn">Add to my list</button>
                </div>
            </div>
            <ul className="col-sm-6">
            {TodoItems}
            </ul>
            </div>
        }}
//I am returning a row that has a column for the input field and the todo list. {this.state.newTodo} is an empty string, and the onChange is pulling in the typing method. {this.state.newTodo} is used as the button value because it is clearing out the input field after pushing the data into the todo list. onClick has a value of {this.click} and because it is using the click method.
export default Todos
