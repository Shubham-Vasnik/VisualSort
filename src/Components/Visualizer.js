import './stylesheets/visualizer.css'
import React from 'react';
import RenderArray from './RenderArray';
import Info from './Info';
import {bubbleSort,selectionSort,insertionSort,mergeSort, quickSort, radixSort} from '../SortingAlgorithms/SortingAlgorithms';

const MAX = Number(window.innerHeight)-150;
const LENGHT = 300;


class Visualizer extends React.Component{

    state = { array: [1,2,3], size:250,delay:3,};

    randomArray = (length, max) =>
        [...new Array(length)].map(() => Math.round(Math.random() * max));
    
    genRandomArray = (length = LENGHT) => {
        this.setState({ array : this.randomArray(length,MAX) });
    }    


    componentDidMount = () =>{
        this.genRandomArray(this.state.size);
        this.setSlider();
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

    setSlider = () =>{
        let value =((303-this.state.delay)*100)/300 + 3;
        let rangeColor=`linear-gradient(90deg,#292b2c ${value}%,  #ffffff ${value}%)`;
        document.getElementById('delay').style.background = rangeColor;
    }

    onSliderChange = (event) =>{
        let delay=303-event.target.value;
        this.setState({delay:delay});
        this.setSlider();
    }

    btnDisable = () => {
        document.getElementById('select').disabled=true;
        document.getElementById('reset').disabled=true;
        document.getElementById('start').disabled=true;
        document.getElementById('delay').disabled=true;
    }
    btnEnable = () => {
        document.getElementById('select').disabled=false;
        document.getElementById('reset').disabled=false;
        document.getElementById('start').disabled=false;
        document.getElementById('delay').disabled=false;
    }
   

    startAlgorithm = async (event) => {
        event.preventDefault();
        this.btnDisable()
        switch(this.props.algorithm){
            case "Bubble Sort":
                console.log("Bubble Sort");
                this.setState({runningAlgo:this.props.algorithm})
                await bubbleSort(this.state.array,this.state.delay);
                this.btnEnable();
                break;
            case "Merge Sort":
                console.log("Merge Sort");
                let arr2 = this.state.array.slice();
                let end =this.state.array.length-1;
                await mergeSort(this.state.array,0,end,arr2,this.state.delay);
                this.btnEnable();
                break;
            case "Quick Sort":
                console.log("Quick Sort");
                var endd = this.state.array.length-1;
                await quickSort(this.state.array,0,endd,this.state.delay);
                this.btnEnable();
                break;
            case "Selection Sort":
                console.log("Selection Sort");
                await selectionSort(this.state.array,this.state.delay);
                this.btnEnable();
                break;
            case "Insertion Sort":
                console.log("Insertion Sort");
                await insertionSort(this.state.array,this.state.delay);
                this.btnEnable();
                break;
            case "Radix Sort":
                console.log("Radix Sort");
                await radixSort(this.state.array,this.state.delay);
                this.btnEnable();
                break;
            default :
                break;
        }
    }

    getInfo = (event) => {
        event.preventDefault();
        this.props.setInfo();
    };

    render(){
        return (
            <div>
                 <h2>{this.props.algorithm} <button type="submit" id="info" className="btn btn-dark mb-2 mybtn" onClick={e => this.getInfo(e)}>Info</button></h2>
                {
                     this.props.info 
                     ? (<Info algorithm= {this.props.algorithm} /> )
                     :(
                        <div>
                        <div>
                        <form className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="arraySize" className="size-label"> Array Size : </label>
                                <input type="text"  className="form-control" id="arraySize" onChange={e => this.onInputChange(e)} placeholder={this.state.size}/>
                            </div>
                            <button type="submit" id="select" className="btn btn-dark mb-2 mybtn" onClick={e => this.setArraySize(e)}>Select</button>
                            <button type="submit" id="reset" className="btn btn-dark mb-2 mybtn" onClick={e => this.setArraySize(e)}>Reset Array</button>
                            <button type="submit" id="start" className="btn btn-dark mb-2 mybtn" onClick={e => this.startAlgorithm(e)}>Start</button>
                            <div className="slider-container">
                               <span>Slow</span>
                                    <input type="range" min="3" max="300" slider-step="50" className="form-control" id="delay" onChange={e => this.onSliderChange(e)} value={(303-this.state.delay)}/>
                                <span>Fast</span>
                            </div>
                        </form>
                        </div>
                        <RenderArray array={this.state.array}/>
                        </div>
                        )
                }   
            </div>
        );
    }


    }

   

    export default Visualizer;