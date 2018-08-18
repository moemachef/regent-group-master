import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

const AnyReactComponent = ({ marker }) => <img src={'https://res.cloudinary.com/dqbgnn5hf/image/upload/v1533986136/Facebook_Places.svg'} alt="cayan group "/>;



class Map extends Component {
    static defaultProps = {
    center: {lat: 41.016431,lng: 28.653232},
    zoom: 15,




  };

  render() {
    return (
          <div className="map col s11 l5">
                    <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}


        >
          <AnyReactComponent
            lat={41.016431}
            lng={28.653232}


          />
        </GoogleMapReact>
          </div>
    );
  }
}

export default Map;
