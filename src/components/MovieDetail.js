import React, { Component } from 'react';


class MovieDetail extends Component {    
    render(){
            const movies = this.props.movies
            const match = this.props.match
            const movie = movies.find(m => m.id == match.params.movieId)
            console.log(this.props.match)
        return(
            <div>
                <div>
                    {movie.title} 
                </div>
                <img src={movie.img} alt=""/>
                <div>
                    {movie.descrShort}
                </div>
            </div>
        )
    }
}

export default MovieDetail