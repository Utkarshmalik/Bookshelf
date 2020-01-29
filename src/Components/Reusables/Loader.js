import React from 'react';
import Loader from 'react-loader-spinner'

class LoaderNew extends React.Component {

  render() {
    return (
      <div style={{ marginTop: "15%", marginLeft: "45%" }}>
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