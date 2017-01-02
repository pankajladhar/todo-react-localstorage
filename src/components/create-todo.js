import React from 'react';
import _ from 'lodash';
import { Button } from './Button';

class CreateToDo extends React.Component{
    constructor(props){
        super(props);
        this.handleCreate = this.handleCreate.bind(this);
        this.state = {
            error: null
        };
    };

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    };

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }

    render(){
        return(
            <form onSubmit={this.handleCreate}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <Button text="Create" clickHandler={this.handleCreate} />
                {this.renderError()}
            </form>
        )
    };
}

CreateToDo.propTypes = {
    todos : React.PropTypes.array.isRequired,
    createTask: React.PropTypes.func.isRequired
}

module.exports={
    CreateToDo : CreateToDo
}
