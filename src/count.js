import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 5 }
    }
    f1 = () => {
        let countDown = setInterval(() => {
            this.setState({ num: this.state.num - 1 }, () => {
                if (this.state.num == 0)
                    clearInterval(countDown);
            })
        }, 1000)
    }
    render() {
        return (<div>
            <span >{this.state.num}</span>
            <button onClick={this.f1}>start</button>
        </div>)
    }
}

export default App2;
