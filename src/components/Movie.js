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
        console.log(movie)
        return (
            <div>
               {this.props.searchedMovies ?
                <div className="movies">
                    <div className="title-link">
                        <Link to ={`/movie/${movie.id}`}>{movie.title}</Link>
                        <span onClick={this.retriveMovie}><i class="fas fa-minus"></i></span>
                    </div>
                    <img src={movie.img} alt=""/>
                </div> :
                
                movie.isRented === true ?
                    <div className="movies">
                        <div className="title-link">
                            <Link to ={`/movie/${movie.id}`}>{movie.title} </Link>
                            <span onClick={this.retriveMovie}><i class="fas fa-minus"></i></span>
                        </div>
                        <img src={movie.img} alt=""/>
                        
                    </div> :
                    <div className="movies">
                        <div className="title-link">
                            <Link to ={`/movie/${movie.id}`}>{movie.title}</Link>
                            <span onClick={this.rentMovie}><i class="fas fa-plus"></i></span>
                        </div>
                        <img src={movie.img} alt=""/>
                    </div>
                }
            </div>
        )
    }
}

export default Movie;