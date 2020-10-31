import {createStore, PreloadedState} from 'redux';
import {RootState} from './reducers';
import {TodoAction} from './actions/todoActions';
import rootReducer from './reducers';

export default function configureStore(preloadedState?: PreloadedState<RootState>) {
    return createStore<RootState, TodoAction, unknown, unknown>(
        rootReducer,
        preloadedState
    )
}