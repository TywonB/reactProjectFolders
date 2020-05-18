import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            contact: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("http://localhost:3002/api/employee")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    contact: data
                })
            })
    }

    render() {
        const text = this.state.loading ? 'Loading...' : this.state.contact.map((employee => (
            <>
            <div className="contact" key={employee.id}>
                <div>
                    <h1 className="contact-info">{employee.title}</h1>
                    <h2 className="contact-info">{employee.name}</h2>
                    <p>Email: <Link to="mailto:fakeemail@gmail.com" target="_blank">{employee.email}</Link></p>
                    <p>Cell: {employee.cell}</p>
                    <p>Social:</p>
                    <ul>
                        <li>Twitter: {employee.twitter}</li>
                        <li>Facebook: {employee.facebook}</li>
                        <li>Instagram: {employee.instagram}</li>
                    </ul>
                </div>
            </div>
            </>
            )))
        return (
            <>
            <p>{text}</p>
            </>
        )
    }
}


export default Contact