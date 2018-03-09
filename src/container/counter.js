import React, { Component } from "react";
import { connect } from "react-redux";
import { addNumber, subtractNumber } from "../actions/index";
import { bindActionCreators } from "redux";

class Counter extends Component {
	render() {
		return (
			<div className="content">
				<div>
					<h2>Number Counter</h2>
					<h4>{this.props.number}</h4>
				</div>
				<button
					className="waves-effect waves-light btn"
					onClick={() => this.props.addNumber(this.props.number)}
				>
					<i className="large material-icons">add_box</i>
				</button>
				<button
					className="waves-effect waves-light btn"
					onClick={() => this.props.subtractNumber(this.props.number)}
				>
					<i className="large material-icons">indeterminate_check_box</i>
				</button>
			</div>
		);
	}
}

function mapStateToProps({ number }) {
	return { number };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addNumber, subtractNumber }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
