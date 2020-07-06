import React from "react";

const BuildingDetail = (props) => {
  if (props.IdAdr !== undefined) {
    return (
      "<div class='ui fluid card'>"+
        "<div class='ui top attached "+InvertHeader(props.EgiEnergiklass)+" padded segment' style=background-color:"+FetchColor(props.EgiEnergiklass)+">"+

            "<h2 class='ui header' >"+
              "<span class='right floated header'>"+
                "<div class='ui large "+InvertHeader(props.EgiEnergiklass)+" header'>"+
                  props.EgiEnergiklass+
                "</div>"+
              "</span>"+

              props.IdAdr+
              "<div class='sub header'>"+
                props["50A_ByggnadsAndamal"]+
              "</div>"+

            "</h2>"+
        "</div>"+

        "<div class='ui bottom attached padded segment'>"+
          "<div class='content'>"+
            "<h4 class='ui header'>"+
              "Primärenergital: "+props.EgiPrimarenergital+" kWh/m²"+
              "<div class='sub header'>Byggår: "+props.EgenNybyggAr+"</div>"+
            "</h4>"+
          "</div>"+
        "</div>"+
      "</div>"
    )}
    else { return (
      "<div class='ui card'>"+
        "<div class ='content'>"+
          "<h4>Ingen data</h4>"+
        "</div>"+
      "</div>"
    )
  }
};

const FetchColor = (ek = null) => {
  var color;

  switch(ek){
    case 'A': color= '#4575b4';
      break;
    case 'B': color= '#91bfdb';
      break;
    case 'C': color= '#e0f3f8';
      break;
    case 'D': color= '#ffffbf';
      break;
    case 'E': color= '#fee090';
      break;
    case 'F': color= '#fc8d59';
      break;
    case 'G': color= '#d73027';
      break;
    default: color= '#d73027';
  }
  return color;
}

const InvertHeader = (ek = null) => {
  return ek==='C'||ek==='D'||ek==='E' ? '' : 'inverted';
}

export default BuildingDetail;
