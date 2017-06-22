import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDishes} from '../actions';
import map from 'lodash/map';
import keys from 'lodash/keys';
import {Link} from 'react-router-dom';

class Dishes extends Component {
	componentWillMount() {
		this.props.fetchDishes();
	}
	renderCategories() {
		const {dishes} = this.props;
		// console.log(dishes);
		return map(dishes, (dish) => {

			let dishNames = keys(dish);

			return map(dishNames, (dishName, i) => {
				let url = dishName;
				return (
				<li key={i} className="list-group-item">
					<Link to={`/dishes/${url}`}>
						{dishName.replace(/_/g, ' ')}
					</Link>
				</li>
				);
			});
		});
	}

	renderDishes() {
		const {dishes} = this.props;
		let { id} = this.props.match.params;
		// console.log(this.props.match.params)

		return map(dishes, (type) => {	
			let dishesList = type[id];
			
			return map(dishesList, (dish, i) => {
		
				return (
				<li key={i} className="list-group-item">
					<Link to={`/dish/${id}/${dish.thai_name}`}>
						<span id="dishThaiName">{dish.thai_name}</span> 
						<span>{dish.thai_script}</span>
					</Link>
				</li>
				);
			});
		});		
	}

	render() {
		
		return(
			<div className="container">
			
				<div className="col-sm-3">
					<h3>Categories</h3>
					<ul className="list-group">
						{this.renderCategories()}
					</ul>
				</div>
				<div className="col-sm-8 col-sm-offset-1">
					<h3>Dishes List</h3>
					<ul className="list-group">
						{this.renderDishes()}
					</ul>
				</div>
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