import React, { Component } from "react";

class Teste extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      copo: "agua",
    };
  }

  componentDidMount(){
    window.setTimeout(() => {
      this.setState ({
        copo: 'suco'
      })
    },3000 )
  }

  alterarCopo = () => {
    this.setState({
      copo: "refrigerante",
    });
  };

  render() {
    const { clock, copo } = this.state;
    return (
      <>
        <h1>{clock}</h1>
        <button
          onClick={() => {
            this.alterarCopo()
          }}
        >
          {copo}
        </button>
      </>
    );
  }
}

export default Teste;
