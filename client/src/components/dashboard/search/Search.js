import React, { Component } from "react";
import "./Search.scss";

const options = {
Conestoga: [
	"Amber R. Kimmel",
	"William A. Rich",
	"Brian M. Craig",
	"Reginald M. Catania",
],
Humber: [
	"Megan T. Harris",
	"Ronald S. Sears",
	"Pamela S. Wamsley",
	"Jerry N. Pardue",
],
Lakehead: [
	"Tierra W. Blackwell",
	"Ann E. Pauley",
	"Ron C. Garner",
	"Simone J. McGregor",
],
};

class Search extends React.Component {
		
	constructor(props) {
		super(props);

		this.handleFirstLevelChange = this.handleFirstLevelChange.bind(this);
		this.handleSecondLevelChange = this.handleSecondLevelChange.bind(this);

		this.state = {
			firstLevel: Object.keys(props.options)[0],
			secondLevel: Object.keys(props.options)[0][0],
		};
	}

	handleFirstLevelChange(event) {
		this.setState({ firstLevel: event.target.value });
	}

	handleSecondLevelChange(event) {
		this.setState({ secondLevel: event.target.value });
	}

	render() {
		const renderOption = (item) => <option value={item}>{item}</option>;

		const firstLevelOptions = Object.keys(this.props.options).map(renderOption);
		const secondLevelOptions = this.props.options[this.state.firstLevel].map(
			renderOption
		);

		return (
			<div className="search">
				<div className="search-container">
					<div className="section-title">
						<h1>Find Professor</h1>
					</div>
					<br />
					<p>
						<select
							onChange={this.handleFirstLevelChange}
							value={this.state.firstLevel}
						>
							{firstLevelOptions}
						</select>
					</p>
					<p>
						<select
							onChange={this.handleSecondLevelChange}
							value={this.state.secondLevel}
						>
							{secondLevelOptions}
						</select>
					</p>
					<div className="search-btn-container">
						<input type="submit" className="search-btn" value="Add Review" />
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
