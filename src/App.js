// default create-react-app code
/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
 */

import React, { Component } from 'react';
import './App.css';

// declare an array object
const list = [
	{
		title: 'React',
		url: 'https://facebook.github.io/react/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://github.com/reactjs/redux',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	}
];

function isSearched (searchTerm) {

	// function which returns another function that takes in an item
	return function (item) {
		// some conditon which returns true or false
		return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
	}
}

// create a component
class App extends Component {

	// introduce a constructor to set initial internal component state
	constructor(props) {
		super(props); // this calls the contructor of the extended Component class in order to set this.props in the contructor

		this.state = {
			list, // this is the same as list: list
			searchTerm: '', // define the initial state for searchTerm
		};

		this.onSearchChange = this.onSearchChange.bind(this); // bind the onSearchChange function to the methods of the App class so the 'this' will work in the callback of the function
		this.onDismiss = this.onDismiss.bind(this); // bind the onDismiss function to the methods of the App class so the 'this' will work in the callback of the function
	}

	// function to search for items on the list
	onSearchChange (event) {
		this.setState = ({
			searchTerm: event.target.value,
		})
	}

	// function that deletes item from the list
	onDismiss (id) {
		const isNotId = item => item.objectID !== id; //  the id to be deleted

		/*
		the value of the updated List object and the filter function evaluates the
		id in the list object and deletes the item tied to that id if it is false
		 */
		const updatedList = this.state.list.filter(isNotId);

		// updates the list in the internal component state
		this.setState({
			list: updatedList,
		});

	}

	render() {
		/* const helloWorld = "Welcome to the Road to learn React";
		<h1 className="mrg-btm-20">{helloWorld}</h1> */

		const {searchTerm, list} = this.state; // destructuring using ES6

		return (
			<div className="App book-list-wrapper">
				{/* Create new components to make the code easier to read */}
				<Search value={searchTerm} onChange={this.onSearchChange}/>
				<Table list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>

				<form>
					<input type="text" value={searchTerm} onChange={this.onSearchChange}/>
				</form>
				{/* { this.state.list.filter(...).map(item => */ }

				{
					// this.state.list.filter(isSearched(this.state.searchTerm)).map (item=> { // removed due to destructuring
					list.filter(isSearched(searchTerm)).map (item=> { // handles the search functionality, also destructuring was done to make the line shorter

					// loop through the list object using map function in ES6
					// list.map(function(item) { // replace with arrow function
					// list.map(item => {
						// this.state.list.map (item => {
						return (
							// <div key={item.objectID} className="mrg-btm-20">
							<ul key={item.objectID} className="mrg-btm-20 book-list">
								<li>
									<b>Book Title: &nbsp;</b>
									<a href={item.url}>{item.title}</a>
								</li>
								<li>
									<b>Author: &nbsp;</b> {item.author}
								</li>
								<li>
									<b>Comments: &nbsp;</b> {item.num_comments}
								</li>
								<li>
									<b>Points: &nbsp;</b> {item.points}
								</li>
								<li>
									<button onClick={() => this.onDismiss(item.objectID)} type="button" className="dismiss" title="Delete this item.">DISMISS</button>
								</li>
							</ul>
						);
					})
				}
			</div>
		);
	}
}

// define a seacrh component
class Search extends Component {
	render() {
		const {value, onChange} = this.props;
	}
}

export default App; // export the class App
