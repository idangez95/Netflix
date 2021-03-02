import React, { Component } from 'react';
import Movie from './Movie'
import '../App.css'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            input: null,
            relevantMovies: []
        }
    }

    typing = (event) => {
        const value = event.target.value.toLowerCase();
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

            <div className="container-catalog">
                <input className="search"
                    placeHolder="Search Your Movie!"
                    type="text"
                    style={{ textTransform: "lowercase" }}
                    onChange={this.typing}
                />
                <div className="catalog">
                    {this.state.input ?
                        <div>
                            <h2>
                                <span className="title">S</span>earched
                                <span className="title">M</span>ovies
                            </h2>
                            <div className="searched-movies">
                                {movies
                                    .filter(m => this.state.relevantMovies.includes(m))
                                    .map(m => {
                                        return (
                                            <Movie key={m.id}
                                                movie={m}
                                                retriveMovie={this.props.retriveMovie}
                                                rentMovie={this.props.rentMovie}
                                            />)
                                    })}
                            </div>
                        </div> :
                        <div>
                            <h2>
                                <span className='title'>M</span>ovies
                                <span className='title'>C</span>atalog
                            </h2>
                            <div className='all-movies'>
                                {movies
                                    .filter(s => !s.isRented)
                                    .map(m => {
                                        return (
                                            <Movie key={m.id}
                                                movie={m}
                                                rentMovie={this.props.rentMovie}
                                                retriveMovie={this.props.retriveMovie}
                                            />)
                                    })}
                            </div>
                        </div>
                    }

                    <div>
                        <h2>
                            <span className='title'>R</span>ented
                            <span className='title'>M</span>ovies
                        </h2>
                        <div className="rented-movies">
                            {movies
                                .filter(m => m.isRented)
                                .map(m => {
                                    return (
                                        <Movie key={m.id}
                                            movie={m}
                                            retriveMovie={this.props.retriveMovie}
                                            rentMovie={this.props.rentMovie}
                                            searchedMovies={this.state.relevantMovies}
                                        />)
                                })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog;