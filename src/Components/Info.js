import React from 'react';
import './stylesheets/info.css';
import {AlgorithmsInfo} from '../SortingAlgorithms/AlgorithmsInfo';
const Info = (props) => {
    
    var radix = false;
    if(props.algorithm === "Radix Sort"){
        radix = true;
    }

    const colors = ['#FFFF00','#808000','#00FFFF','#008080','#0000FF','#000080','#FF00FF','#800080','#800000','#00FF00'];
    var radixBox =  colors.map( (value,index) => {
       
        return ( <div className="box" key={index}><div style={{
            backgroundColor: value}}></div> <span className='boxname'>{`Elements With ${index} in the current position`}</span></div> )

        })

    return (
    <div>
        <div className="jumbotron">
                    <h1 className="display-4">{props.algorithm}</h1>
                    <hr className="my-4"/>
                    {
                        radix 
                        ?( 
                         <div className="radixboxes">
                            {radixBox}
                         </div>  
                        )
                        :(
                        <div className="boxes">
                                <div className="box"><div className="sorted"></div> <span className='boxname'>Sorted Elements</span></div> 
                                <div className="box"><div className="compare"></div> <span className='boxname'>Elements Which Are Being Compared</span></div>
                                <div className="box"><div className="swap"></div> <span className='boxname'>Elements Which Are Being Swaped</span></div>
                                <div className="box"><div className="unsorted"></div> <span className='boxname'>Unsorted Elements</span></div>
                            </div>
                            )
                    }
                    
                    <div className="info">
                        <p>
                        {AlgorithmsInfo[props.algorithm].main}
                        </p>
                    </div>

                    <div>
                        <div className="float-right">
                            <a className="btn btn-dark" href={AlgorithmsInfo[props.algorithm].moreInfo}>More Info</a>
                        </div>
                    </div>
        </div>

        <div className="timecom">
            <h2>Time Complexity</h2>
            <div> <h4>Best Case</h4> = <h5>{AlgorithmsInfo[props.algorithm].best}</h5></div>
            <div> <h4>Average Case</h4> = <h5>{AlgorithmsInfo[props.algorithm].average}</h5></div>
            <div> <h4>Worst</h4> = <h5>{AlgorithmsInfo[props.algorithm].worst}</h5></div>
        </div>

    </div>
    )
}


export default Info;