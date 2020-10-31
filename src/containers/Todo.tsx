import {connect} from 'react-redux';
import Todo from '../components/Todo/Todo';
import * as todoActions from '../store/actions/todoActions';
import {Dispatch} from 'redux';

interface OwnProps {
    todo: {
        id: symbol;
        title: string;
        completed: boolean;
    };
}

const mapDispatchToProps = (dispatch: Dispatch<todoActions.TodoAction>, ownProps: OwnProps) => {
    return {
        onTodoDelete: () => dispatch(todoActions.removeTodo(ownProps.todo.id)),
        onTodoToggle: () => dispatch(todoActions.toggleTodo(ownProps.todo.id))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Todo);