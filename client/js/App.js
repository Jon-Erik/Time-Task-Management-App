import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import TaskManager from "./pages/TaskManager"
import WorkLog from "./pages/WorkLog"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => (
	<Router>
		<div>
			<Navbar />
			<div>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/taskManager" component={TaskManager} />
				<Route exact path="/workLog" component={WorkLog} />
			</div>
			<Footer />
		</div>
	</Router>
);

export default App;