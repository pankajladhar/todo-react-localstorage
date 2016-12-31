import React from 'react';
import { Button } from './Button';

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            klass: isCompleted ? 'strike' : ''
        };

        if (this.state.isEditing) {
            return (
                <span>
                    <form onSubmit={this.onSaveClick}>
                        <input autoFocus type="text" defaultValue={task} ref="editInput" />
                    </form>
                </span>
            );
        }

        return (
            <span>
                <input type="checkbox" checked={isCompleted} onChange={this.props.toggleTask.bind(this, task)}/>
                <span className={taskStyle.klass}>{task}</span>
            </span>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                    <span className="buttonContainer">
                        <Button text="Save" clickHandler={this.onSaveClick} />
                        <Button text="Cancel" clickHandler={this.onCancelClick} />
                    </span>

            );
        }

        return (
            <span  className="buttonContainer">
                <Button text="Edit" clickHandler={this.onEditClick} />
                <Button text="Delete" clickHandler={this.props.deleteTask.bind(this, this.props.task)} />
            </span>
        );
    }

    render() {
        return (
            <li>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </li>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}

module.exports={
    TodosListItem : TodosListItem
}
