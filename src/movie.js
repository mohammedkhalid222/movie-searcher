import React from 'react';
import "./App.css"

class Movie extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    };
    playMovie() {
        const url = "https://putlockers.buzz/movies/" + this.props.movie.title
        window.location.href = url
        
    }
    render() {
        return (
            <table key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img alt="gg" width="100" src={this.props.movie.img} />

                        </td>
                        <td className="view">
                            <h1>{this.props.movie.title}</h1>
                            <p> {this.props.movie.overview}</p>
                            <input style={{ backgroundColor: "green",color:"white", marginRight:10}} type="button" onClick={this.playMovie.bind(this) } value="play"/>
                            <input type="button" onClick={this.viewMovie.bind(this) } value="view"/>
                        </td>
                    </tr>



                </tbody>

            </table>
      )      
    }
}

export default Movie