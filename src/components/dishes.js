import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDishes} from '../actions';
import map from 'lodash/map';
import keys from 'lodash/keys';
import filter from 'lodash/filter';
import size from 'lodash/size';

class Dishes extends Component {
	componentWillMount() {
		this.props.fetchDishes();
	}
	renderDishes() {
		const {dishes} = this.props;
		console.log(dishes);
		return map(dishes, (dish) => {
			
			let dishNames = keys(dish);
			dishNames = map(dishNames, (name) => {
				return name.replace(/_/g, ' ');
			})
					
			return map(dishNames, (dishName, i) => {
				return <li key={i}>{dishName}</li>
			})
		});
	}

	render() {
		return(
			<div>
				<h3>Thai Dishes</h3>
				<ul>
					{this.renderDishes()}
				</ul>

			</div>
		)
	}
}
function mapStateToProps(state) {

	return {
		dishes: state
	}
}
export default connect(mapStateToProps, {fetchDishes})(Dishes);