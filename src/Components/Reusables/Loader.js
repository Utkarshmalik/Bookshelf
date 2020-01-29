import React from 'react';
import Loader from 'react-loader-spinner'

const LoaderNew= () => {

  return (
    <div style={{ marginTop: "15%", marginLeft: "45vw" }}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={5000}

      />
    </div>
  );

}

export default LoaderNew