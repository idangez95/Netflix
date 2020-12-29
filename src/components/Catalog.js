import React, { Component } from 'react';
import Movie from './Movie'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            input: null,
            relevantMovies: []
        }
    }

    typing = (event) => {
        const value = event.target.value
        this.setState({
            input: value
        }, () => {
            let filteredMovies = this.props.movies.filter(m => { return m.title.includes(this.state.input) })
            this.setState({
                relevantMovies: filteredMovies
            }, () => {
                if (this.state.input == "") {
                    let emptyInput = null
                    this.setState({
                        input: emptyInput
                    }, () => {
                        let filteredMovies = this.props.movies.filter(m => { return m.title.includes(this.state.input) })
                        this.setState({
                            relevantMovies: filteredMovies
                        })
                    })
                }
            })
        })
    }


    render() {
        const movies = this.props.movies

        return (
            <div className="catalog">
                <input type="text" onChange={this.typing} />
                <button className="search">Search</button>
                {this.state.input
                    ? <div className="searchedMovies">
                        searched Movies: {movies.filter(m => this.state.relevantMovies.includes(m)).map(m => {
                        return <Movie key={m.id}
                            movie={m} retriveMovie={this.props.retriveMovie}
                            rentMovie={this.props.rentMovie} />
                    })}
                    </div>
                    : <div className='allMovies'>
                        Movies Catalog:{movies.filter(s => !s.isRented).map(m => {
                        return <Movie key={m.id}
                            movie={m} rentMovie={this.props.rentMovie}
                            retriveMovie={this.props.retriveMovie} />
                    })}
                    </div>
                }

                <div className="rentedMovies">
                    Rented movies: {movies.filter(m => m.isRented).map(m => {
                    return <Movie key={m.id}
                        movie={m} retriveMovie={this.props.retriveMovie}
                        rentMovie={this.props.rentMovie} searchedMovies={this.state.relevantMovies} />
                })}
                </div>
            </div>
        )
    }
}

export default Catalog;