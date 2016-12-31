import React from 'react';
import {Greeting}  from '../Greeting';
import {TODO_CONSTANTS}  from  '../Constants';
import {CreateToDo}  from  './create-todo';
import {TodosList}  from  './TodosList';
import {StorageService}  from  '../StorageService';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        let todos = StorageService.getItem(TODO_CONSTANTS.TODO_STORAGE) ? JSON.parse(StorageService.getItem("todos")) : [];
        this.state = {
            todos
        };
    };

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <Greeting message={TODO_CONSTANTS.MESSAGE}/>
                    <CreateToDo todos={this.state.todos} createTask={this.createTask}/>
                    <TodosList
                        todos={this.state.todos}
                        toggleTask={this.toggleTask}
                        saveTask={this.saveTask}
                        deleteTask={this.deleteTask}
                    />
                </div>
            </div>
        )
    };

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({todos: this.state.todos});
        this.saveTaskIntoStorage(this.state.todos)
    };

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, (todo) => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
        this.saveTaskIntoStorage(this.state.todos);
    };

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
        this.saveTaskIntoStorage(this.state.todos)
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
        this.saveTaskIntoStorage(this.state.todos);
    }

    saveTaskIntoStorage(value){
        StorageService.setItem(TODO_CONSTANTS.TODO_STORAGE, JSON.stringify(value));
    }
}

module.exports = {
    App: App
}
