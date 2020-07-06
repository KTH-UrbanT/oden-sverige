import React from "react";
import mapboxgl from "mapbox-gl";

import BuildingDetail from "./BuildingDetail";
import DistrictDetail from "./DistrictDetail";
import "./PrettyMap.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xla3NpaXBhc2ljaG55aSIsImEiOiJjaXRvZnN0Z2owMDBoMnRueTl3dDB1OXd3In0.Sog1Iz1Vc1RlMucteIEP_A";


class PrettyMap extends React.Component {
  // Map defaults
  constructor(props) {
    super(props);
    this.state = {
      lng: 18.0665,
      lat: 59.3249,
      zoom: 13.5,

      layers: [
        { name: "energiklass", icon: "fire", hoverText: "Visa primärenergikarta" },
        { name: "byggnadsaldre", icon: "hourglass", hoverText: "Visa byggnadsäldrekarta" },
      ],

      activeLayer: "energiklass"
    };
  };

  // onLayerSelect = (index) => {
  //   this.setState({ activeLayer: this.state.layers[index].name });
  // };

  componentDidMount() {
    // Initialize map
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/oleksiipasichnyi/ckbvyqy4n0m911ipspg10k7sm",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    console.log(this.state);

    // Adjust view after moving map
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // Show popup with building properties
    map.on("click", "energiklass", function (e) {
      new mapboxgl.Popup({ closeButton: false })
        .setLngLat(e.lngLat)
        .setHTML(BuildingDetail(e.features[0].properties))
        .addTo(map);
    });
    map.on("click", "byggnadsaldre", function (e) {
      new mapboxgl.Popup({ closeButton: false })
        .setLngLat(e.lngLat)
        .setHTML(BuildingDetail(e.features[0].properties))
        .addTo(map);
    });

    // Show popup with district properties
    map.on("click", "Districts", function (e) {
      new mapboxgl.Popup({ closeButton: true })
        .setLngLat(e.lngLat)
        .setHTML(DistrictDetail(e.features[0].properties))
        .addTo(map);

    });
    map.on("click", "Municipalities", function (e) {
      new mapboxgl.Popup({ closeButton: true })
        .setLngLat(e.lngLat)
        .setHTML(DistrictDetail(e.features[0].properties))
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the states layer
    map.on("mouseenter", "energiklass", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseenter", "byggnadsaldre", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseenter", "Districts", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseenter", "Municipalities", function () {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves
    map.on("mouseleave", "energiklass", function () {
      map.getCanvas().style.cursor = "";
    });
    map.on("mouseleave", "byggnadsaldre", function () {
      map.getCanvas().style.cursor = "";
    });
    map.on("mouseleave", "Districts", function () {
      map.getCanvas().style.cursor = "";
    });
    map.on("mouseleave", "Municipalities", function () {
      map.getCanvas().style.cursor = "";
    });

    // Add navigation
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      "bottom-left"
    );

    map.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    // MENU block
    // enumerate ids of the layers
    var toggleableLayerIds = ["energiklass", "byggnadsaldre"];
    var menuIcons = ["fire", "hourglass"];
    var hoverTexts = ["Visa energiklasskarta", "Visa byggnadsäldrekarta"];

    // set up the corresponding toggle button for each layer
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];
      var iconImage = menuIcons[i];
      var hoverText = hoverTexts[i]

      var activeLayer = this.state.activeLayer;

      var button = document.createElement("button");
      button.Name = id;
      button.href = "#";
      button.title = hoverText;
      button.className = (i === 0) ? "ui toggle button blue" : "ui toggle button";

      var icon = document.createElement("i");
      icon.className = iconImage + " icon";
      button.appendChild(icon);

      button.onclick = function (e) {
        var clickedLayer = this.Name;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, "visibility");

        if (visibility !== "visible") {
          var activeButton = document.getElementsByClassName(
            "ui toggle button blue"
          )[0];

          activeButton.className="ui toggle button";
          this.className="ui toggle button blue";
          map.setLayoutProperty(activeLayer, "visibility", "none");
          map.setLayoutProperty(clickedLayer, "visibility", "visible");
          activeLayer = clickedLayer;
        }

      };

      var layers = document.getElementsByClassName(
        "ui vertical icon buttons"
      )[0];
      layers.appendChild(button);
    };
  };

  render() {
    return (
      <div>
        <div className="sidebar-left">
          <div>
            <i className="eye icon"></i>
            Oden Sverige [utveckling]
            <br />
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div className="sidebar-right">
          <div>
            <div className="ui vertical icon buttons"></div>
          </div>
        </div>
        <div
          ref={(element) => (this.mapContainer = element)}
          className="mapContainer"
        />
      </div>
    );
  };
}

export default PrettyMap;
