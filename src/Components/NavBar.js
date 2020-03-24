import React from 'react';
import '../SortingAlgorithms/SortingAlgorithms'
import bubbleSort from '../SortingAlgorithms/SortingAlgorithms';

const NavBar = ({setAlgorithm}) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" id="Brand" href="#">Visual Sort</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();setAlgorithm("Bubble Sort")}}>Bubble Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();setAlgorithm("Merge Sort")}}>Merge Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={(e) => {e.preventDefault();setAlgorithm("Quick Sort")}}>Quick Sort</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More Sorts
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#" onClick={(e) => {e.preventDefault();setAlgorithm("Selection Sort")}}>Selection Sort</a>
                        <a className="dropdown-item" href="#" onClick={(e) => {e.preventDefault();setAlgorithm("Insertion Sort")}}>Insertion Sort</a>
                        <a className="dropdown-item" href="#" onClick={(e) => {e.preventDefault();setAlgorithm("Radix Sort")}}>Radix Sort</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">More Comming Soon</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
    );
} 

export default NavBar;