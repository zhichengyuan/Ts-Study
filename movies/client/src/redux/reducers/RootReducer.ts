import {combineReducers} from 'redux'
import movie, { IMovieState } from './MovieReducer'

/**
 * 整个网站的跟状态
 */
export interface IRootState {
    movie:IMovieState
}
export const rootReducer = combineReducers({
    movie
})