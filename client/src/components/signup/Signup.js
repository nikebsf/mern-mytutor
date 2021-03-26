import React from "react";
import "./Signup.scss";

// import { connect } from 'react-redux';
// import { register } from '../../flux/actions/authActions';
// import { clearErrors } from '../../flux/actions/errorActions';

import { Link } from "react-router-dom";

const Signup = () => {
	return (
				<div className="signup">
					<div className="signup-container">
						<div className="container-title">Sign up</div>
						<div className="container-form">
							<form action="">
								<div className="container-input">
									<input type="text" placeholder="E-mail" />
								</div>
								<div className="container-input">
									<input type="password" placeholder="Password" />
								</div>
								<div className="container-input">
									<input type="password" placeholder="Re-type password" />
								</div>
								<div className="container-input btn-sq">
									<input type="submit" className="btn-submit" />
								</div>
							</form>
							<div className="container-link">Already have an account?
								{/* <Link to="/login">
									Already have an account?
								</Link> */}
								
							</div>
						</div>
					</div>
				</div>
			)
	
// const RegisterModal = ({
// 	isAuthenticated,
// 	error,
// 	register,
// 	clearErrors
// }) => {
// 	const [modal, setModal] = useState(false);
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [msg, setMsg] = useState(null);
  
// 	const handleToggle = useCallback(() => {
// 	  // Clear errors
// 	  clearErrors();
// 	  setModal(!modal);
// 	}, [clearErrors, modal]);
  
// 	const handleChangeName = (e) => setName(e.target.value);
// 	const handleChangeEmail = (e) => setEmail(e.target.value);
// 	const handleChangePassword = (e) => setPassword(e.target.value);
  
// 	const handleOnSubmit = (e) => {
// 	  e.preventDefault();
  
// 	  // Create user object
// 	  const user = {
// 		name,
// 		email,
// 		password
// 	  };
  
// 	  // Attempt to login
// 	  register(user);
// 	};
  
// 	useEffect(() => {
// 	  // Check for register error
// 	  if (error.id === 'REGISTER_FAIL') {
// 		setMsg(error.msg.msg);
// 	  } else {
// 		setMsg(null);
// 	  }
  
// 	  // If authenticated, close modal
// 	  if (modal) {
// 		if (isAuthenticated) {
// 		  handleToggle();
// 		}
// 	  }
// 	}, [error, handleToggle, isAuthenticated, modal]);
// 	return (
// 		<div className="signup">
// 			<div className="signup-container">
// 				<div className="container-title">Sign up</div>
// 				<div className="container-form">
// 					<form action="">
// 						<div className="container-input">
// 							<input type="text" placeholder="E-mail" />
// 						</div>
// 						<div className="container-input">
// 							<input type="password" placeholder="Password" />
// 						</div>
// 						<div className="container-input">
// 							<input type="password" placeholder="Re-type password" />
// 						</div>
// 						<div className="container-input btn-sq">
// 							<input type="submit" className="btn-submit" />
// 						</div>
// 					</form>
// 					<div className="container-link">Already have an account?</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

}
export default Signup;