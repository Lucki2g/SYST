import React, { Component } from 'react';
import { withRouter } from "react-router";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { events: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderEventsTable(events) {

        const selectEventRow = (id) => {
            const { history } = this.props;
            history.push(`/eventdetail/'${id}`);
        }
        
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {events.map(event =>
                    <tr onClick={() => selectEventRow(event.id)}>
                        <td>
                            {event.id}
                        </td>
                        <td>{event.name}</td>
                        <td>{event.date}</td>
                        <td>{event.location}</td>
                        <td>{event.rating}</td>
                        <td><button className="btn btn-host rightbtn">Host</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderEventsTable(this.state.events);

        return (
            <div>
                <h1>Welcome to Systematic Event Tool!</h1>
                <p>From this home page you'll be able to create, host and see and overview over events! Check it out!</p>

                <h1 id="tabelLabel" >Upcoming Events
                    <button className="btn btn-primary rightbtn" onClick={this.rerouteToEventCreation}>Create</button>
                </h1>
                {contents}
            </div>
    );
    }

    rerouteToEventCreation = () => {
        const { history } = this.props;
        history.push("/CreateEvent");
    }
    
    async populateData() {
        const response = await fetch('api/eventsquery/upcoming');
        const data = await response.json();
        this.setState({ events: data, loading: false });
    }
}
