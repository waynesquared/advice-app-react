import React from "react";
import axios from "axios";

import './App.css';

class App extends React.Component {

    state = { advice: '' };
    

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip; 
                // same as
                // const advice = response.data.slip.advice;

                // const name = app.name;
                // const version = app.version;
                // const type = app.type;

                // // Can be rewritten as:
                // const { name, version, type } = app;

                this.setState({ advice });
                
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>
                            GIVE ME ADVICE!
                        </span>

                    </button>
                </div>
            </div>
                );
        }
}


export default App;