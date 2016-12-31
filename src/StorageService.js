import _ from 'lodash';

let StorageService = {
    getItem: function (name) {
        return localStorage.getItem(name);
    },
    setItem: function (name, items) {
        return localStorage.setItem(name, items);
    },
    updateItem: function (key, value) {
        let allTodos = this.getItem('todos') && JSON.parse(this.getItem('todos'));

        this.setItem('todos', JSON.stringify(
            _.each(allTodos, (todo)=> {
                if (todo.text == key) {
                    todo['status'] = value;
                }
            })
        ));
    }
};

module.exports = {
    StorageService: StorageService
}
