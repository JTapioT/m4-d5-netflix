import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class ShowMovies extends React.Component {

  state = {
    query: this.props.query
  }

  render () {
    return(
      <div style={{width: "30vw"}}>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
        <FormControl value={"search movies"} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      </div>
    )
  }
}

export default ShowMovies;