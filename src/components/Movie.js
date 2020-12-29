import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {

    rentMovie = () => {
        this.props.rentMovie(this.props.movie.id)
    }

    retriveMovie = () =>{
        this.props.retriveMovie(this.props.movie.id)
    }


    render() {
        const movie = this.props.movie
        return (
            <div>
               {this.props.searchedMovies ?
                <div>
                    <div>
                        <Link to ={`movie/${movie.id}`}>{movie.title}</Link>
                        <span onClick={this.retriveMovie}>-</span>
                    </div>
                    <img src={movie.img} alt=""/>
                </div> :
                
                movie.isRented === true ?
                    <div>
                        <div>
                            <Link to ={`movie/${movie.id}`}>{movie.title} </Link>
                            <span onClick={this.retriveMovie}>-</span>
                        </div>
                        <img src={movie.img} alt=""/>
                        
                    </div> :
                    <div>
                        <div>
                            <Link to ={`movie/${movie.id}`}>{movie.title}</Link>
                            <span onClick={this.rentMovie}>+</span>
                        </div>
                        <img src={movie.img} alt=""/>
                    </div>
                }
            </div>
            
        )
    }
}

export default Movie;