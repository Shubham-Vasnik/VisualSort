import React from 'react';
import NavBar from './NavBar';
import Visualizer from './Visualizer';

class App extends React.Component{
    state = {algorithm:'Bubble Sort',};
    setAlgorithm = (selectedAlgorithm) => {
        this.setState({algorithm:selectedAlgorithm});
    }
    render(){
        return (
        <div>
            <NavBar setAlgorithm={this.setAlgorithm}/>
            <div className="container">
                <Visualizer algorithm={this.state.algorithm}/>
            </div>
            
        </div>
        );
    }
}

export default App;