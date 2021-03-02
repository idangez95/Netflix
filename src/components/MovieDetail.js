import React, { Component } from 'react';


class MovieDetail extends Component {
    render() {
        const movies = this.props.movies
        const match = this.props.match
        const movie = movies.find(m => m.id == match.params.movieId)
        return (
            <div className="movie-detail-container">
                <div className="movie-detail">
                    <div className="movie-detail-img">
                        <h2>
                            {movie.title}
                        </h2>
                        <img src={movie.img} alt="" />
                        <p>
                            {movie.descrShort}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail