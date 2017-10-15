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

const isSearched = (searchTerm) => (item) => {
	!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

// create a component
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list, // this is the same as list: list
			searchTerm: '',
		};

		this.onSearchChange = this.onSearchChange.bind(this);
		this.onDismiss = this.onDismiss.bind(this);
	}

	onSearchChange (event) {
		this.setState = ({
			searchTerm: event.target.value,
		})
	}

	onDismiss (id) {
		const isNotId = item => item.objectID !== id; //  the id to be deleted
		const updatedList = this.state.list.filter(isNotId);

		this.setState({
			list: updatedList,
		});

	}

	render() {
		const {searchTerm, list} = this.state; // destructuring using ES6
		return (
			<div className="page">
				<div className="interactions">
					<Search value={searchTerm} onChange={this.onSearchChange}>
						Search
					</Search>
				</div>

				<Table list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>
			</div>
		);
	}
}

// search component refactored to a stateless functional component
const Search = ({ value, onChange, children }) =>
<form>
  	{children}
  	<input type="text" value={value} onChange={onChange}/>
</form>

// define a table component
const Table = ({ list, pattern, onDismiss }) =>
<div className="table">
	{ list.filter(isSearched(pattern)).map(item =>
		<div key={item.objectID} className="table-row">
			<span style={{ width: '40%' }}>
				<a href={item.url}>{item.title}</a>
			</span>

			<span style={{ width: '30%' }}>
				{item.author}
			</span>

			<span style={{ width: '10%' }}>
				{item.num_comments}
			</span>

			<span style={{ width: '10%' }}>
				{item.points}
			</span>

			<span style={{ width: '10%' }}>
				<Button onClick={() => onDismiss(item.objectID)} className="button-inline">Dismiss</Button>
			</span>
		</div>
	)}
</div>

class Button extends Component {
	render() {
		const {onClick, className='', children } = this.props;

		return (
			<button onClick={onClick} className={className} type="button">{children}</button>
		)
	}
}

export default App; // export the class App
