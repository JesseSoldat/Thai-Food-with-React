import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDishes} from '../actions';

class Dishes extends Component {
	componentWillMount() {
		this.props.fetchDishes();
	}
	renderDishes() {
		const {dishes} = this.props;
		console.log(dishes);

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