import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import MovieCard from './MovieCard';


class ShowMovies extends React.Component {

  state = {
    query: this.props.query,
    lastSearch: '',
    movies: []
  }

  /* 
  http://www.omdbapi.com/?apikey=[PUT_YOUR_API_KEY_HERE]&s=harry%20potter 
  */

  async fetchMovies(q) {
    let query = q;
    const apiKey = "2850d816";

    console.log(query);

    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s={${query}}`)

      if(response.ok) {
        let responseJSON = await response.json();
        this.setState({
          query: '',
          lastSearch: query,
          movies: responseJSON.Search
        })
        console.log(responseJSON);
      }
    } catch(error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.fetchMovies(this.props.query)
  }

  render () {
    return(
      <div className="container mt-5">
      <div className="mt-5" style={{width: "30vw"}}>
      <InputGroup size="md" >
        {/* <InputGroup.Text id="inputGroup-sizing-lg" style={{background: "#ccc", color: "black"}}>Search</InputGroup.Text> */}
        <FormControl value={this.state.query} onChange={(event) => {
          this.setState({
            query: event.target.value
          })
        }} onKeyPress={(event) => {
          if(event.charCode === 13) {
            this.fetchMovies(event.target.value);
          }
        }
        } style={{backgroundColor: "rgba(138,138,138,0.4)", border: "solid black", color:"white", fontSize: "1.2em", letterSpacing: "1px"}}
        placeholder={"Search for movies"}/>
      </InputGroup>
      </div>

        <div className="container pl-4 mr-0 pr-0">
        <h4 className="mt-3 mb-3 section-title">{this.state.lastSearch}</h4>
        <div className="row pl-3 flex-md-nowrap" style={{overflowY: "hidden"}}>
        { this.state.movies.length &&
          this.state.movies.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie}/>
          })
        }
        </div>
      </div>
      </div>
    )
  }
}

export default ShowMovies;