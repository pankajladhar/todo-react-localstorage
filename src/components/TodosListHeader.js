import React from 'react';

 class TodosListHeader extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h4>
                 {this.props.numberOfTasks}  task needs to be complete
            </h4>
        );
    }
}

module.exports={
    TodosListHeader: TodosListHeader
}
