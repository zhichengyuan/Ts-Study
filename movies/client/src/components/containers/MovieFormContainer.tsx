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
    ...state.movie,
})

// function mapStateToProps(state:IRootState) {
//     return state.movie
// }
const mapDispatchToProps = (dispatch:Dispatch<any>):IAddAndEditMovieEvent => ({
   
    async addMovie(movie){
      const data = await MovieService.add(movie);
      return data
      if(data.err == '') {
        message.success('添加成功');
        
      }else {
        message.error(data.err);
      }
    }
   
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MovieForm));