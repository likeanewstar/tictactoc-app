import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
      super(props); // JavaScript 클래스에서 하위 클래스의 생성자를 정의할 때 항상 super를 호출해야합니다. 모든 React 컴포넌트 클래스는 생성자를 가질 때 super(props) 호출 구문부터 작성해야 합니다.
      
      // 무언가를 “기억하기”위해 component는 state를 사용합니다.
      this.state = {
        value: null
      };
    }

    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.setState({value: 'X'})} // Square의 render 함수 내부에서 onClick 핸들러를 통해 this.setState를 호출하는 것으로 React에게 <button>을 클릭할 때 Square가 다시 렌더링해야 한다고 알릴 수 있습니다.
        >
          {this.state.value}
        </button> // 업데이트 이후에 {this.state.value}가 X로 변화.
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null)
      };
    }
    
    renderSquare(i) {
      return <Square value={this.state.squares[i]}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  