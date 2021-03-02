
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'


class Landing extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        {
          name: "John",
          backgroundColor: "#ffff3f",
          id: 0,
          movies: []
        },
        {
          name: "Brad",
          backgroundColor: "red",
          id: 1,
          movies: []
        },
        {
          name: "Din",
          backgroundColor: "#1f7a8c",
          id: 2,
          movies: []
        },
        {
          name: "Emilia",
          backgroundColor: "#55a630",
          id: 3,
          movies: []
        }]
    }
  }

  render() {
    const users = this.state.users
    return (
      <div className="container-users">
        <div className="users">
          {users.map(user => {
            return <div className="user" style={{ backgroundColor: user.backgroundColor }}>
                      <Link className="user-name" to={`/catalog/${user.id}`}>
                      {user.name}
                      </Link>
                    </div>
          })}
        </div>
      </div>
    )
  }
}

export default Landing;