import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Request.scss";
import { COLLEGELIST } from "../../constant";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SpeechRecognition2, { useSpeechRecognition2 } from 'react-speech-recognition';



const Request = () => {


	const [input, setInput] = useState({
		profFName: "",
		profLName: "",
		profUni: "Conestoga",
	});

	function handleChange(event) {
		//console.log(event.target);
		const { name, value } = event.target;

		setInput((prevInput) => {
			return {
				...prevInput,
				[name]: value,
			};
		});
		// console.log(name, value);
	}

	function handleClick(event) {
		event.preventDefault();

		const newProff = {
			fname: input.profFName,
			lname: input.profLName,
			institution: input.profUni,
		};
		// console.log(input);

		axios.post("http://localhost:4000/api/profs", newProff);
	}
	// voice input code

	const { transcript, resetTranscript} = useSpeechRecognition()
	//const { transcript2, resetTranscript2} = useSpeechRecognition()

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
	  return null
	}
	
  
	// return (
	//   <div>
	// 	<button onClick={SpeechRecognition.startListening}>Start</button>
	// 	<button onClick={SpeechRecognition.stopListening}>Stop</button>
	// 	<button onClick={resetTranscript}>Reset</button>
	  
	// 	<p style={{border:"1px solid"}}>{ transcript }</p>
	//   </div>
	  
	// )

	return (
		<>
		<div className="request">
			<div className="request-container">
				<div className="section-title">
					<h1>Request Listing</h1>
				</div>
				<br />
				<div className="request-form">
						<div>
							<button style={{float:"right", fontSize:"30px"}} onClick={resetTranscript}> 🔂  </button>
							<button style={{float:"right", fontSize:"30px"}} onClick={SpeechRecognition.startListening}>🎙 </button>
							<br></br>
							<button style={{float:"right", fontSize:"30px"}} onClick={resetTranscript}> 🔂  </button>
							<button style={{float:"right", fontSize:"30px"}} onClick={SpeechRecognition.startListening}>🎙2 </button>
						</div>		
					<form action="" className="form-group">
						
						<input
							type="text"
							name="profFName"
							value={input.profName, transcript}
							autoComplete="off"
							onChange={handleChange}
							placeholder="Professor first Name"
							
						/>
						

						<input
							type="text"
							name="profLName"
							value={input.profName,transcript}
							autoComplete="off"
							onChange={handleChange}
							placeholder="Professor last Name"
						/>

						<select
							onChange={handleChange}
							name="profUni"
							value={input.profUni}
							placeholder="College / University"
						>
							{COLLEGELIST.map((college) => (
								<option value={college.value}>{college.name}</option>
							))}
						</select>

						<button
							onClick={handleClick}
							type="button"
							className="btn btn-submit btn-sq"
							// value="Send Request"
						>
							Send Requrest
						</button>
					</form>
				</div>
			</div>
		</div>
		</>
	);
};

export default Request;
