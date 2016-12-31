import React from 'react';
import _ from 'lodash';
import { TodosListHeader } from './TodosListHeader';
import { TodosListItem } from './TodosListItem';
import { Button } from './Button';

class TodosList extends React.Component {
    constructor(props) {
        super(props);
        this.getCountOfUncompleteTask = this.getCountOfUncompleteTask.bind(this);
        this.completed = this.completed.bind(this);
        this.unCompleted = this.unCompleted.bind(this);
        this.all = this.all.bind(this);
        this.PROPS = this.props;
        this.state={
            props: this.PROPS,
            isDisabled: false
        }
    };

    renderItems(val) {
        const props = _.omit(val, 'todos');
        return _.map(val.todos, (todo, index) => {
            return <TodosListItem key={index} {...todo} {...props} />
        });
    };

    getCountOfUncompleteTask(tasks){
        return _.filter(tasks, (task) =>{
            return task.isCompleted == false
        }).length
    };
    completed(){
        let props = _.omit(this.state.props, 'todos');
        props['todos'] =_.filter(this.state.props.todos , (todo) =>{
            return todo.isCompleted == true
        });
        this.setState({props: props});
    };

    unCompleted(){
        let props = _.omit(this.state.props, 'todos');
        props['todos'] =_.filter(this.state.props.todos , (todo) =>{
            return todo.isCompleted == false
        });
        this.setState({props: props});
    };

    all(){
        this.setState({props: this.PROPS});
    };

    render() {
        if(this.state.props.todos.length == 0){
            return (<div></div>)
        }
        else {
            return (
                <div>
                    <TodosListHeader numberOfTasks={this.getCountOfUncompleteTask(this.state.props.todos)} />
                    <div className="button-wrapper">
                        <Button text="Completed" clickHandler={this.completed} />
                        <Button text="Uncompleted" clickHandler={this.unCompleted} />
                        <Button text="All"  clickHandler={this.all}/>
                    </div>
                    <ul className="theList">
                        {this.renderItems(this.state.props)}
                    </ul>
                </div>
            )
        }

    }
}
module.exports = {
    TodosList: TodosList
}
