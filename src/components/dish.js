import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDishes } from '../actions';
import map from 'lodash/map';
import filter from 'lodash/filter';

class Dish extends Component {
	componentDidMount() {
		this.props.fetchDishes();
	}

	renderDish() {
		let {dish} = this.props;
		console.log(dish)
		return <li></li>
	}

	render() {
		return (
			<div>
				{this.renderDish()}
			</div>

		)
	}
}
function mapStateToProps(state, ownProps) {

	let category = ownProps.match.params.cat;
	let dishName = ownProps.match.params.id;
	console.log(state)
	let dish = state.food[category];
	dish = map(dish, (d) => {
		// console.log(d)
		if(d.thai_name === dishName)
		return d
	})
	console.log(dish)
	

	return { dish: state.food[category]}
}
export default connect(mapStateToProps, {fetchDishes})(Dish);