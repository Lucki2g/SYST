import React, { Component } from 'react';
import figure from './confirmation-figure.png';
import SvgLines from 'react-mt-svg-lines';

export class Confirmation extends Component {

    static displayName = Confirmation.name;

    constructor(props) {
        super(props);
        this.state = { events: [], loading: true };
    }
    
    render() {
       return (
            <div>
                <div className={"figureConfirmation"}>
                    {/*<img src={figure} alt="figure" width={230}/>*/}
                    <svg viewBox="0 0 100 100"
                        width="200" height="200">
                        <g fill="none" strokeMiterlimit="1">
                            <circle fill="#009BE6" cx="50" cy="50" r="45"/>
                            <path stroke="#FFF" strokeWidth="8" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5"/>
                        </g>
                    </svg>
                </div>
                
                <div className={"confirmationText"}>
                <h1>Your event has successfully been created</h1>
                <h3>Event details</h3>
                <h5>Name</h5>
                <h5>Date</h5>
                <h5>Location</h5>
                <button className={"btn-primary confirmationbtn"} onClick={this.rerouteToHomePage}>OK</button>
                </div>
            </div>
        );
    }

    rerouteToHomePage = () => {
        const { history } = this.props;
        history.push("/");
    }
}