import React, { Component } from 'react';


class Heroe extends Component {

    state = {
        heroe: {}
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
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
                        <img src={this.state.heroe.img} className="img-fluid" alt="" />
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
                            <img src="../assets/img/dc-logo.jpg" alt="Marvel" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }


}

export default Heroe;