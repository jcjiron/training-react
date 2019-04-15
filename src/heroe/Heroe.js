import React, { Component } from 'react';

import dc_logo from '../assets/img/dc-logo.jpg';
import marvel_logo from '../assets/img/marvel-logo.png';
import './Heroe.css';


class Heroe extends Component {

    state = {
        heroe: {}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            // heroe: this.props.data
            heroe: this.props.data
        });
    }


    render() {
        return (
            <div className="card p-3 Heroe-card">
                <img src={this.state.heroe.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.state.heroe.nombre}</h5>
                    <p className="card-text Heroe-bio">{this.state.heroe.bio}</p>
                    <p className="card-text"><small className="text-muted">({this.state.heroe.aparicion})</small></p>
                </div>
                <div>
                    <img src={this.state.heroe.casa === 'DC' ? dc_logo : marvel_logo} alt="Marvel" className="Heroe-logo" />
                </div>
                <div className="btn btn-primary btn-block"> Ver más</div>
            </div>
        );
    }

    getSnapshotBeforeUpdate() {
        console.log(this.state);

    }


}

export default Heroe;