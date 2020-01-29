import React from 'react';
import Loader from 'react-loader-spinner'

class LoaderNew extends React.Component {

  render() {
    return (
      <div style={{ margin: "auto", marginTop: "15%", marginLeft: "40%" }}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000}

        />
      </div>
    );
  }
}

export default LoaderNew