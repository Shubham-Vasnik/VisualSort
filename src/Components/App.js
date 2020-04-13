import './stylesheets/app.css'
import React from 'react';
import NavBar from './NavBar';
import Visualizer from './Visualizer';
import About from './About';


class App extends React.Component{
    state = {algorithm:'Merge Sort',info:false};
    setAlgorithm = (selectedAlgorithm) => {
        this.setState({algorithm:selectedAlgorithm});
    }

    setInfo = () => {
        this.setState({info:true});
    }

    reserInfo = () => {
        this.setState({info:false});
    }

    if(){
        
    }
    render(){
        return (
        <div>
            <NavBar setAlgorithm={this.setAlgorithm} resetInfo={this.reserInfo}/>
            {
                this.state.algorithm === "Visual Sort" 
                ? <About/>
                :(
                    <div className="container">
                        <Visualizer algorithm={this.state.algorithm} setInfo={this.setInfo} info={this.state.info}/>
                    </div>
                )
            }
            
            
        </div>
        );
    }
}

export default App;