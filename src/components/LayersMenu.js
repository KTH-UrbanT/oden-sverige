// Not used, internal code in the main component is active instead

import react from React;

const LayersMenu = ({ layers, activeLayer, onLayerSelect }) => {
  // console.log(activeLayer);
  return (
    <div className="ui icon vertical buttons" id="vertical-menu">
      {layers.map((layer, index) => (
        <button
          className={
            index === activeLayer ? "ui toggle button blue" : "ui toggle button"
          }
          onClick={() => onLayerSelect(index)}
          key={layer.name}
        >
          <i className={layer.icon + " icon"} title={layer.name}></i>
        </button>
      ))}
    </div>
  );
};

export default LayersMenu;
