import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as todoActions from '../store/actions/todoActions';
import AddTodo from '../components/AddTodo/AddTodo';

const mapDispatchToProps = (dispatch: Dispatch<todoActions.TodoAction>) => {
    return {
        addTodo: (title: string) => dispatch(todoActions.addTodo(title))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);