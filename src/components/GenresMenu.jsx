import React from 'react';

class GenresMenu extends React.Component {
  render() {
    return (
      <div className="container genres-drop-down">
        <div className="row">
          <h1>Movies</h1>
          <div className="column">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle bg-dark"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Genres
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Horror
                </a>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenresMenu;