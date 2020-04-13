import React from 'react';
import '../SortingAlgorithms/SortingAlgorithms'


const NavBar = ({setAlgorithm,resetInfo}) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" id="Brand" href="#Visual Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Visual Sort")}}>Visual Sort</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#Bubble Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Bubble Sort");resetInfo()}}>Bubble Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Merge Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Merge Sort");resetInfo()}}>Merge Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Quick Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Quick Sort");resetInfo()}}>Quick Sort</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#More Sorts" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More Sorts
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#Selection Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Selection Sort");resetInfo()}}>Selection Sort</a>
                        <a className="dropdown-item" href="#Insertion Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Insertion Sort");resetInfo()}}>Insertion Sort</a>
                        <a className="dropdown-item" href="#Radix Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Radix Sort");resetInfo()}}>Radix Sort</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item"  href="#Visual Sort" onClick={(e) => {e.preventDefault();setAlgorithm("Visual Sort");resetInfo()}}>About</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
    );
} 

export default NavBar;