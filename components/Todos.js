import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.click = this.click.bind(this)
        this.markDone = this.markDone.bind(this)

        this.state = {
            newTodo: '',
            todos: []
        }
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

            this.setState({
                newTodo: '',
                todos: updatedTodos
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
        }

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
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

export default Todos
