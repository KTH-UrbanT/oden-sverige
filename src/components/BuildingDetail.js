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
    case 'A': color= '#2166ac';
      break;
    case 'B': color= '#67a9cf';
      break;
    case 'C': color= '#d1e5f0';
      break;
    case 'D': color= '#f7f7f7';
      break;
    case 'E': color= '#fddbc7';
      break;
    case 'F': color= '#ef8a62';
      break;
    case 'G': color= '#b2182b';
      break;
    default: color= '#b2182b';
  }
  return color;
}

const InvertHeader = (ek = null) => {
  return ek==='C'||ek==='D'||ek==='E' ? '' : 'inverted';
}

const ClassFetchColor = (ek = null) => {
  var color;

  switch(ek){
    case 'A': color= '#ffffb2';
      break;
    case 'B': color= '#fed976';
      break;
    case 'C': color= '#feb24c';
      break;
    case 'D': color= '#fd8d3c';
      break;
    case 'E': color= '#fc4e2a';
      break;
    case 'F': color= '#e31a1c';
      break;
    case 'G': color= '#b10026';
      break;
    default: color= '#b10026';
  }
  return color;
}

const NumericFetchColor = (value = null) => {
  if (value<75) {
    return 'green';
  } else if (value<106) {
    return 'olive';
  } else if (value<138) {
    return 'yellow';
  }  else if (value<169) {
    return 'orange';
  } else return 'red';
}

export default BuildingDetail;
