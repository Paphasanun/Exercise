import React, { Component } from "react";

class Carousel extends Component {
  state = {
    slidePage: 0,
  };
  render() {
    const picList = [
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120331003_2673306136257225_5627365831170474321_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=AWPdkPwF6WYAX9yGqT1&_nc_ht=scontent.fbkk7-2.fna&oh=96207a41544c3f51b99d81948b9b5069&oe=5FA4B7E5",
      "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/120373328_2673306212923884_5396853271880866721_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=EmY-vpEG-GAAX8dtL24&_nc_ht=scontent.fbkk7-3.fna&oh=a820b54711b287224a51e8654be3f431&oe=5FA13610",
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120375248_2673306239590548_7794608346020773535_n.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Gwv4p_EbRYcAX9YbQ_8&_nc_ht=scontent.fbkk7-2.fna&oh=c673d2aa4d60fd3b79283dde86df7a21&oe=5FA295E4",
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120454556_2673306349590537_8604055987057004491_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=iMytz1dwpkAAX-9P-m1&_nc_ht=scontent.fbkk7-2.fna&oh=5cdfa0e4513c945bb52fd9a92f85f620&oe=5FA4C230",
    ];

    return (
      <div
        style={{
          margin: "0 auto",
          width: "500px",
          alignItems: "center",
          display: "flex",
        }}
      >
        <button
          style={{
            marginRight: "20px",
            height: "30px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "tan",
            boxShadow: "1px 1px 1px 1px #6666",
            cursor: "pointer",
          }}
          disabled={this.state.slidePage === 0}
          onClick={() => this.setState({ slidePage: this.state.slidePage - 1 })}
        >
          Prev
        </button>
        <img
          style={{ maxHeight: "400px" }}
          src={picList[this.state.slidePage]}
        />
        <button
          style={{
            marginLeft: "20px",
            height: "30px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "tan",
            boxShadow: "1px 1px 1px 1px #6666",
            cursor: "pointer",
          }}
          disabled={this.state.slidePage === 3}
          onClick={() => this.setState({ slidePage: this.state.slidePage + 1 })}
        >
          Next
        </button>
        <div style={{display:"flex"}}>
          <button onClick={() => this.setState({ slidePage: 0 })}> 1 </button>
          <button onClick={() => this.setState({ slidePage: 1 })}> 2 </button>
          <button onClick={() => this.setState({ slidePage: 2 })}> 3 </button>
          <button onClick={() => this.setState({ slidePage: 3 })}> 4 </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
