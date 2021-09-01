import { message } from 'antd';
import { Dispatch } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import MovieAction from '../../redux/actions/MovieAction';
import { IMovieState } from '../../redux/reducers/MovieReducer';
import { IRootState } from '../../redux/reducers/RootReducer';
import { MovieService } from '../../services/MovieService';
import MovieForm, { IAddAndEditMovieEvent } from '../MovieForm';

const mapStateToProps = (state:IRootState):IMovieState=> ({
    ...state.movie
})

// function mapStateToProps(state:IRootState) {
//     return state.movie
// }
const mapDispatchToProps = (dispatch:Dispatch<any>):IAddAndEditMovieEvent => ({
    async editMovie(id,movie){
      console.log(id,movie)
      
      const data = await MovieService.edit(id,movie);
      // dispatch(MovieAction.editMoviesAction(''))
      return data;
      console.log(data);
      if(data.err == '') {
        message.success('保存成功',1000,()=>{
          
        });
      }else {
        message.error(data.err);
      }
      
    },
   
})

const MovieFormContaner = connect(mapStateToProps,mapDispatchToProps)(withRouter(MovieForm))

export default MovieFormContaner;