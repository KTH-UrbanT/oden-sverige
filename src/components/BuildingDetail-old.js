import React from "react";

const BuildingDetail = (props) => {
  // console.log(props);
  if (props.IdAdr !== undefined) {
    return (
      "<div class='ui card'>"+
        "<div class='content'>"+

          "<h2 class='ui header'>"+props.IdAdr+"</h2>"+
          "<div class='floating ui "+FetchColor(props.EgiPrimarenergital)+" right label'>"+
            props.EgiEnergiklass+
          "</div>"+
          "<div class='meta'>"+props["50A_Byggnadsändamål"]+"</div>"+
        "</div>"+
        "<div class='extra content'>"+
          "<h4 class='ui header'>Primärenergital: "+props.EgiPrimarenergital+" kWh/m²</h4>"+
          "<div class='meta'>Byggår: "+props.EgenNybyggAr+"</div>"+
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

const FetchColor = (value = null) => {
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


import React from "react";

const BuildingDetail = (props) => {
  // console.log(props);
  if (props.IdAdr !== undefined) {
    return (
      "<div class='ui card'>"+
        "<div class='content'>"+
          "<div class='ui grid'>"+
            "<div class='twelve wide "+FetchColor(props.EgiPrimarenergital)+" column'>"+
              "<h2 class='ui white header'>"+

                    props.IdAdr+
                    "<div class='sub header'>"+
                      +props["'50A_Byggnadsändamål'"]+
                    "</div>"+

              "</h2>"+
            "</div>"+
            "<div class='four wide "+FetchColor(props.EgiPrimarenergital)+" column'>"+

                "<h1 class='right aligned header'>"+
                  props.EgiEnergiklass+
                "</h1>"+

            "</div>"+
          "</div>"+
        "</div>"+


        "<div class='extra content'>"+
          "<h4 class='ui header'>Primärenergital: "+props.EgiPrimarenergital+" kWh/m²</h4>"+
          "<div class='meta'>Byggår: "+props.EgenNybyggAr+"</div>"+
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

const FetchColor = (value = null) => {
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
