// mapboxgl.accessToken =
//   "pk.eyJ1Ijoib2xla3NpaXBhc2ljaG55aSIsImEiOiJjaXRvZnN0Z2owMDBoMnRueTl3dDB1OXd3In0.Sog1Iz1Vc1RlMucteIEP_A";


class PrettyMap extends React.Component {
  // Map defaults
  constructor(props) {
    super(props);
    this.state = {
      lng: 18.063918,
      lat: 59.332378,
      zoom: 14.2,

      layers: [
        { name: "energiklass", icon: "fire", hoverText: "Visa primärenergikarta" },
        { name: "byggnadsaeldre", icon: "hourglass", hoverText: "Visa byggnadsäldrekarta" },
      ],

      activeLayer: "energiklass",
    };
  };

  onLayerSelect = (index) => {
    this.setState({ activeLayer: this.state.layers[index].name });
  };

  componentDidMount() {
    // Initialize map
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/oleksiipasichnyi/ckaz15zii0inm1ioekvd8wpz6",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

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
    map.on("click", "byggnadsaeldre", function (e) {
      new mapboxgl.Popup({ closeButton: false })
        .setLngLat(e.lngLat)
        .setHTML(BuildingDetail(e.features[0].properties))
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the states layer
    map.on("mouseenter", "energiklass", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseenter", "byggnadsaeldre", function () {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves
    map.on("mouseleave", "energiklass", function () {
      map.getCanvas().style.cursor = "";
    });
    map.on("mouseleave", "byggnadsaeldre", function () {
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
    var toggleableLayerIds = ["energiklass", "byggnadsaeldre"];
    var menuIcons = ["fire", "hourglass"];
    var hoverTexts = ["Visa energiklasskarta", "Visa byggnadsäldrekarta"];

    // set up the corresponding toggle button for each layer
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];
      var iconImage = menuIcons[i];
      var hoverText = hoverTexts[i]

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
          map.setLayoutProperty(this.state.activeLayer, "visibility", "none");
          map.setLayoutProperty(clickedLayer, "visibility", "visible");
        }

        this.setState({ activeLayer: clickedLayer });
      };

      var layers = document.getElementsByClassName(
        "ui vertical icon buttons"
      )[0];
      layers.appendChild(button);
    };

    console.log(map);
  };

  render() {
    return (
      <div>
        <div className="sidebar-left">
          <div>
            <i className="eye icon"></i>
            Oden Stochholm
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
