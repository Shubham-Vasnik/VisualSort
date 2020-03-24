import React from 'react';
import RenderArray from './RenderArray';
import {bubbleSort,selectionSort,insertionSort} from '../SortingAlgorithms/SortingAlgorithms';

const MAX = Number(window.innerHeight)-150;
const LENGHT = 300;



class Visualizer extends React.Component{

    state = { array: [1,2,3], size:25,delay:300};

    randomArray = (length, max) =>
        [...new Array(length)].map(() => Math.round(Math.random() * max));
    
    genRandomArray = (length = LENGHT) => {
        this.setState({ array : this.randomArray(length,MAX) });
    }    


    componentDidMount = () =>{
        this.genRandomArray(this.state.size);
    }

    onInputChange = (event) => {
        this.setState({size:event.target.value});
    }

    setArraySize = (event) =>{
        event.preventDefault();
        this.genRandomArray(Number(this.state.size));
        let arrayBar = document.getElementsByClassName("array-bar");
        for(var i =0 ;i<arrayBar.length;i++){
            arrayBar[i].style.backgroundColor="#292b2c";
        }
    }

    startAlgorithm = (event) => {
        event.preventDefault();
        switch(this.props.algorithm){
            case "Bubble Sort":
                bubbleSort(this.state.array,this.state.delay);
                break;
            case "Merge Sort":
                console.log("hi merge");
                break;
            case "Quick Sort":
                console.log("hi quick");
                break;
            case "Selection Sort":
                console.log("Selection Sort");
                selectionSort(this.state.array,this.state.delay);
                break;
            case "Insertion Sort":
                console.log("Insertion Sort");
                insertionSort(this.state.array,this.state.delay)
                break;
            case "Radix Sort":
                console.log("Radix Sort");
                break;
            default :
                break;
        }
    }

    render(){
        return (
            <div>
                <div>
                    <h2>{this.props.algorithm}</h2>
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="arraySize" className=""> Array Size </label>
                        <input type="text"  className="form-control" id="arraySize" onChange={e => this.onInputChange(e)} placeholder={this.state.size}/>
                    </div>
                    <button type="submit" id="submit" className="btn btn-dark mb-2" onClick={e => this.setArraySize(e)}>Select</button>
                    <button type="submit" id="submit" className="btn btn-dark mb-2" onClick={e => this.setArraySize(e)}>Reset Array</button>
                    <button type="submit" id="submit" className="btn btn-dark mb-2" onClick={e => this.startAlgorithm(e)}>Start</button>
                </form>
                </div>
                <RenderArray array={this.state.array}/>
            </div>
        );
    }


    }
   

    export default Visualizer;