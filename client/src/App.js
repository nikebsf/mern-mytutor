import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Account from "./components/dashboard/account/Account";
import Request from "./components/dashboard/request/Request";
import Search from "./components/dashboard/search/Search";
import Reviews from "./components/dashboard/reviews/Reviews";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
function App() {
	return (
		<Router>
		<div className="App">
			<Navbar />
			{/* <Login /> */}
			{/* <Signup /> */}
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup"  component={Signup} />
				<Route path="/login"  component={Login} />
				<Route path="/account" component={Account} />
				<Route path="/reviews" component={Reviews} />
				<Route path="/request" component={Request} />
				<Route path="/search" component={Search} />
			</Switch>

			{/* <Dashboard /> */}
			<Footer />
		</div>
		</Router>
	);
}

const Home = () => {
	return (
		<Dashboard />
	)
}

export default App;
