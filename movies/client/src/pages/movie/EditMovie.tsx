import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import MovieForm from '../../components/containers/MovieFormEditContainer';

interface IParams {
    id:string
}

interface MyProps extends RouteComponentProps<IParams> {
    abc:string
}

// type AllProps = MyProps & RouteComponentProps<IParams>
class EditMovie extends Component<MyProps> {
    render() {
        return (
                <MovieForm/>
        );
    }
}

export default EditMovie;