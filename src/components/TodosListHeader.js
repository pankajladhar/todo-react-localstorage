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
TodosListHeader.propTypes ={
    numberOfTasks : React.PropTypes.number.isRequired
}

module.exports={
    TodosListHeader: TodosListHeader
}
