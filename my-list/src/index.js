


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class Sample13 extends React.Component {
  render(){
    return <Sample12 value={this.props.value} />
  }
}



class Sample12 extends React.Component {
    render() {
      return (
        <div>
        <Button bsStyle="info" onClick={()=>alert('click')}>
        {this.props.value}
        </Button>

        <Button bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
        good.
        </Button>
      </div>

      );
    }
  }

  ReactDOM.render(
    <Sample13 value={"kuldeep"} />,
    document.getElementById('root')
  );


  class Footer extends React.Component {
    render() {
      return (

        <div>
        this is footer
      </div>

      );
    }
  }

  ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
  );
  
  // class Boardss extends React.Component {
  //   renderSquare(i) {
  //     return <Square value={i} />;
  //   }
  
  //   render() {
  //     const status = 'Next player: X';
  
  //     return (
  //       <div>
  //         <div className="status">{status}</div>
  //         <div className="board-row">
  //           {this.renderSquare(0)}
  //           {this.renderSquare(1)}
  //           {this.renderSquare(2)}
  //         </div>
  //         <div className="board-row">
  //           {this.renderSquare(3)}
  //           {this.renderSquare(4)}
  //           {this.renderSquare(5)}
  //         </div>
  //         <div className="board-row">
  //           {this.renderSquare(6)}
  //           {this.renderSquare(7)}
  //           {this.renderSquare(8)}
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  // class Games extends React.Component {
  //   render() {
  //     return (
  //       <div className="game">
  //         <div className="game-board">
  //           <Boardss />
  //         </div>
  //         <div className="game-info">
  //           <div>yoooo</div>
  //           <ol>{/* TODO */}</ol>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  // ========================================
  

  