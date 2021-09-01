import { Dispatch } from 'react';
import {connect} from 'react-redux'
import MovieAction from '../../redux/actions/MovieAction';
import { IMovieState } from '../../redux/reducers/MovieReducer';
import { IRootState } from '../../redux/reducers/RootReducer';
import MovieTable, { IMovieTableEvent } from '../MovieTable';

const mapStateToProps = (state:IRootState):IMovieState=> ({
    ...state.movie
})

// function mapStateToProps(state:IRootState) {
//     return state.movie
// }
const mapDispatchToProps = (dispatch:Dispatch<any>):IMovieTableEvent => ({
    onLoad(){
        //重新设置条件
        dispatch(MovieAction.fetchMoive({
            page:1,
            limit:15,
            key:''
        }))
    },
    onSwitchChange(type, newState, id){
        dispatch(MovieAction.changeSwitch(type, newState, id));
    },
    async onDelete(id) {
        await dispatch(MovieAction.deleteMovie(id))
    },
    onChange(newPage) {
        dispatch(MovieAction.fetchMoive({
            page:newPage
        }))
    },
    onkeyChange(key) {
        dispatch(MovieAction.setConditionAction({
            key
        }))
    },
    onSearch() {
        dispatch(MovieAction.fetchMoive({
            page:1
        }))
    },
    // goEditMovie(id) {
    //     console.log(id);
    //     dispatch(MovieAction.editMoviesAction(id))
    // }
})

export default connect(mapStateToProps,mapDispatchToProps)(MovieTable);