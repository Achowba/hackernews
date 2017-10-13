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

// create a component
class App extends Component {
	
	// introduce a constructor to set initial internal component state
	constructor(props) {
		super(props); // this calls the contructor of the extended Component class in order to set this.props in the contructor

		this.state = {
			list: list,
		};

		this.onDismiss = this.onDismiss.bind(this); // bind the onDIsmiss function to the methods of the App class
	}

	onDismiss (id) {
		const isNotId = (item) => {
			item.objectID != id;
		}

		const updatedList = this.state.list.filter(isNotId);
	}

	render() {
		/* const helloWorld = "Welcome to the Road to learn React";
		<h1 className="mrg-btm-20">{helloWorld}</h1> */

		return (
			<div className="App book-list-wrapper"> 
			{
				// loop through the list object using map function in ES6
				// list.map(function(item) { // replace with arrow function
				// list.map(item => {
					this.state.list.map (item => {
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

export default App; // export the class App
