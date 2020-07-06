import React from "react";

const DistrictDetail = (props) => {
  console.log(props);

  return (
    "<div class='ui fluid card'>"+
      "<div class='ui top attached "+InvertHeader(props.EgiEnergiKlass_median)+" padded segment' style=background-color:"+FetchColor(props.EgiEnergiKlass_median)+">"+

          "<h2 class='ui header' >"+
            "<span class='right floated header'>"+
              "<div class='ui large "+InvertHeader(props.EgiEnergiKlass_median)+" header'>"+
                props.EgiEnergiKlass_median+
              "</div>"+
            "</span>"+

            "DeSO område"+
            "<div class='sub header'>"+
              props.Deso+
            "</div>"+

          "</h2>"+
      "</div>"+

      "<div class='ui bottom attached padded segment'>"+
        "<div class='content'>"+
          "<h4 class='ui header'>"+
            "Primärenergital: "+props.EgiPrimarenergital_median+" kWh/m²"+
            "<div class='sub header'>Byggår: "+props.EgenNybyggAr_median+"</div>"+
          "</h4>"+

          "<h4 class='ui header'>"+
            "Antal deklarerad byggnader "+props.AntalByggnader+
            "<div class='sub header'>flerbostadshus - "+props.AntalFlerbostadshus+
            "<div class='sub header'>lokaler - "+props.AntalLokaler+
            "<div class='sub header'>småhus - "+props.AntalSmahus+
          "</h4>"+
        "</div>"+
      "</div>"+
    "</div>"
  )
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


export default DistrictDetail;
