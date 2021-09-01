import React, { Component } from 'react';
import MovieTableContainer from '../../components/containers/MovieTableContainer'

class MovieList extends Component {

    render() {
        return (
            <div>
                <MovieTableContainer></MovieTableContainer>
            </div>
        );
    }
}

export default MovieList;