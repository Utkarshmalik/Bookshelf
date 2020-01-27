import React from 'react';
import Loader from 'react-loader-spinner'

class LoaderNew extends React.Component {

  render() {
    return (
      <div style={{ margin: "auto", marginTop: "200px", width: "300px" }}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={180}
          width={180}
          timeout={5000} //3 secs

        />
      </div>
    );
  }
}

export default LoaderNew