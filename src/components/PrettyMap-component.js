import React from "react";
import { Component } from "react";
import ReactDom from "react-dom";
import MapGL, { GeolocateControl, Marker } from "react-map-gl";

import BuildingDetail from "./BuildingDetail";
import "./PrettyMap.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoib2xla3NpaXBhc2ljaG55aSIsImEiOiJjaXRvZnN0Z2owMDBoMnRueTl3dDB1OXd3In0.Sog1Iz1Vc1RlMucteIEP_A";

const geolocateStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: 10,
};

class PrettyMap extends React.Component {
  // Map defaults
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: 59.332378,
        longitude: 18.063918,
        zoom: 14.2,
      },
      userLocation: {},

      layers: [
        {
          name: "energiklass",
          icon: "fire",
          hoverText: "Visa primärenergikarta",
        },
        {
          name: "byggnadsaeldre",
          icon: "hourglass",
          hoverText: "Visa byggnadsäldrekarta",
        },
      ],

      activeLayer: "energiklass",
    };
  }

  _onViewportChange = (viewport) => this.setState({ viewport });
  //
  // setUserLocation = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     let setUserLocation = {
  //       lat: position.coords.latitude,
  //       long: position.coords.longitude,
  //     };
  //     let newViewport = {
  //       height: "100vh",
  //       width: "100vw",
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //       zoom: 10,
  //     };
  //     this.setState({
  //       viewport: newViewport,
  //       userLocation: setUserLocation,
  //     });
  //   });
  // };

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/oleksiipasichnyi/ckaz15zii0inm1ioekvd8wpz6"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken="pk.eyJ1Ijoib2xla3NpaXBhc2ljaG55aSIsImEiOiJjaXRvZnN0Z2owMDBoMnRueTl3dDB1OXd3In0.Sog1Iz1Vc1RlMucteIEP_A"
      >
        <div className="sidebar-left">
          <div>
            <i className="eye icon"></i>
            Oden Stochholm
            <br />
            Longitude: {this.state.viewport.longitude} | Latitude:{" "}
            {this.state.viewport.latitude} | Zoom: {this.state.viewport.zoom}
          </div>
        </div>
        <div className="sidebar-mapcontrol">
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </div>

        // Showing location marker if asked for

      </MapGL>
    );
  }
}

// Tech sidebar
// Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
// {this.state.zoom}

export default PrettyMap;
