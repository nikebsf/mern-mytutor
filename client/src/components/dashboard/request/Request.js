import React, {useState} from "react";
import axios from "axios";
import "./Request.scss";

const Request = () => {

	const [input, setInput] = useState({
		profFName: "",
		profLName: "",
		profUni: ""
	})

	function handleChange(event){
		//console.log(event.target);
		const {name, value} = event.target;

		setInput(prevInput => {
			return {
				...prevInput,
				[name]: value
			}
		})
	}

	function handleClick(event){
		event.preventDefault();
		

		const newProff = {
			profFName : input.profFName,
			profLName : input.profLName,
			profUni : input.profUni
		}

		axios.post('http://localhost:5000/api/profs', newProff);

		console.log(input);
	}

	return (
		<div className="request">
			<div className="request-container">
				<div className="section-title">
					<h1>Request Listing</h1>
				</div>
				<br />
				<div className="request-form">
					<form action="" className="form-group">
						<input type="text" name="profFName" value={input.profName} autoComplete="off" onChange={handleChange} placeholder="Professor first Name" />
						<input type="text" name="profLName" value={input.profName} autoComplete="off" onChange={handleChange} placeholder="Professor last Name" />

						<input type="text" name="profUni" value={input.profUni} autoComplete="off" onChange={handleChange} placeholder="College / University" />
						
							<button
								onClick={handleClick}
								 type="button"
								className="btn btn-lg btn-dark"
								// value="Send Request"
							>Send Requrest</button>
						
					</form>;
				</div>
			</div>
		</div>
	);
};

export default Request;
