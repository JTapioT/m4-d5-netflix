import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class ShowMovies extends React.Component {

  state = {
    query: this.props.query
  }

  /* 
  http://www.omdbapi.com/?apikey=[PUT_YOUR_API_KEY_HERE]&s=harry%20potter 
  */

  async fetchMovies(q) {
    let query = q;
    /* let apiKey = "2850d816"; */

    console.log(query);

    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=2850d816&s={${query}}`)

      if(response.ok) {
        let responseJSON = await response.json();
        console.log(responseJSON);
      }
    } catch(error) {
      console.log(error);
    }
  }

  render () {
    return(
      <div style={{width: "30vw"}}>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
        <FormControl value={this.state.query} onChange={(event) => {
          this.setState({
            query: event.target.value
          })
          this.fetchMovies(event.target.value);
        }} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      </div>
    )
  }
}

export default ShowMovies;