
import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                {
                  name: "Idan",
                  backgroundColor: "yellow",
                  id: 0
                },
                {
                  name: "Roni",
                  backgroundColor: "green",
                  id: 1
                },
                {
                  name: "Dor",
                  backgroundColor: "orange",
                  id: 2
                },
                {
                  name: "Rachel",
                  backgroundColor: "red",
                  id: 3
                }]
        }
    }
    render() {
        const users = this.state.users
        return (
            <div>
                {users.map(user => {return <Link to={`/catalog/${user.id}`}><div className="user" 
                style={{backgroundColor: user.backgroundColor}}>{user.name}</div></Link>})}
            </div>
            
        )
    }
}

export default Landing;