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
            <div className="card">
                <h1 className="">{this.state.heroe.nombre} <small>({this.state.heroe.aparicion})</small></h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <img src={`../${this.state.heroe.img}`} className="img-fluid" alt="" />
                        <br /><br /><br />
                        <a href="" className="btn btn-outline-danger btn-block">Regresar</a>
                    </div>
                    <div className="col-md-8">
                        <h3>{this.state.heroe.nombre}</h3>
                        <hr />
                        <p>
                            {this.state.heroe.bio}
                         </p>
                        <div>
                            <img className="img-logo" src="../assets/img/marvel-logo.png" alt="DC" />
                            <img src={this.state.heroe.casa === 'DC' ? dc_logo : marvel_logo } alt="Marvel" className="Heroe-logo"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    getSnapshotBeforeUpdate(){
        console.log(this.state);
        
    }


}

export default Heroe;