import{ Component } from 'react';
import MovieForm from '../../components/containers/MovieFormContainer';


class Home extends Component {
    state = {
        img:''
    }
    render() {
        return (
            <div>
                <MovieForm/>
               
            </div>
        );
    }
}

export default Home;