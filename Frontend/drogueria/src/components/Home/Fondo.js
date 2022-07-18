import React from "react";

class Fondo extends Component {
    render() {
      const containerStyle = {
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)",
        width: "600px",
        height: "600px",
      };
      return <div style={containerStyle}><h1 style={{color: "black"}}>Hi! Try edit me</h1></div>;
    }
  }