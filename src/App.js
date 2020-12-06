import React, { Component } from 'react';
import './App.css';
import Movie from './movie.js';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.performSearch("avengers")
    }
    
    performSearch(searchTerm) {
        const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=a290e113977de865be9dfc08c11fb36f&language=en-US&query=' + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResualt) => {
                
                const results = searchResualt.results

                var movieRows = []

                results.forEach((movie) => {
                    movie.img = 'https://image.tmdb.org/t/p/w185' + movie.poster_path 
                    const movieRow = <Movie key={movie.id} movie={movie}/>
                 movieRows.push(movieRow)
                })
                this.setState({rows: movieRows})
            },
            error: (chr, status, err) => {
                console.error('failed')
            }
        })
    }

    searchChangeHandler(event) {
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }
    render(){
        return (
            <div className="App">
                <table style={{
                    background: "black",
        display: "block",
        color: "white",
        fontSize: 26,
        paddingLeft: 16
                }}>
                    <tbody><tr>
                        <td>
                            <img width="100" src="download.jpg" alt="gg" />
                        </td>
                        <td>
                            <h3>Movies Search</h3>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <input style={{
                    fontSize: 24,
                    display: "block",
                    width: "100%",
                    paddingTop: 8,
                    paddingBottom: 8
                }} onChange={this.searchChangeHandler.bind(this) } placeholder="enter search" />


                {this.state.rows}
            </div>
        )
    }
}

            export default App;
