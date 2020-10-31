import {connect} from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import {StoreState} from '../types';

const mapStateToProps = ({todos}: StoreState) => {
    return {
        todos
    }
}

export default connect(mapStateToProps)(TodoList);
