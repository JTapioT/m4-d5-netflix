import React from 'react';

class GenresMenu extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex">
          <h2 className="text-white">Movies</h2>
          <div>
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
                <a className="dropdown-item" href="https://www.netflix.com">
                  Action
                </a>
                <a className="dropdown-item" href="https://www.netflix.com">
                  Horror
                </a>
                <a className="dropdown-item" href="https://www.netflix.com">
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