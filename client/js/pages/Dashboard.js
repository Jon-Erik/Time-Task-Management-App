import React from "react";
import "./Dashboard.css";
// import BigCalendar from "react-big-calendar";
//import moment from "moment"

//const localizer = BigCalendar.momentLocalizer(moment)
import CalendarPlaceholder from "../../assets/images/calendar.jpg"

class Dashboard extends React.Component {
	state = {

	}

	render() {
		return (
			<div className="container">
				<h1>Welcome to the dashboard</h1>
				<div className="row">

					<div className="col">
						<div className="card">
						  <div className="card-body">
						    <h5 className="card-title text-center">My Calendar</h5>
						    <h6 className="card-subtitle mb-2 text-muted text-center">Find your scheduled events here</h6>
						    <img src={CalendarPlaceholder} className="calendar text-center"/>
						    <div className="text-center">
							    <button className="btn btn-primary card-link">View/Edit Calendar</button>
								</div>
						  </div>
						</div>
					</div>

					<div className="col">
						<div className="card">
						  <div className="card-body">
						    <h5 className="card-title text-center">Today's Work</h5>
						    <h6 className="card-subtitle mb-2 text-muted text-center">Find today's events here</h6>
						    <table className="table">
								  <thead>
								    <tr>
								      <th scope="col">Time</th>
								      <th scope="col">Name</th>
								      <th scope="col">Length (HH:mm)</th>
								      <th scope="col">Edit</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <th scope="row">10:30 AM-11:00 AM</th>
								      <td>Presentation</td>
								      <td>00:30</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								    <tr>
								      <th scope="row">11:00 AM - 12:00 PM</th>
								      <td>Meeting</td>
								      <td>01:00</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								    <tr>
								      <th scope="row">12:30 PM - 1:30 PM</th>
								      <td>Phone Call</td>
								      <td>01:00</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								    <tr>
								      <th scope="row">1:30 PM - 4:00 PM</th>
								      <td>Paperwork</td>
								      <td>03:30</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								  </tbody>
								</table>
						    <div className="text-center">
							    <button className="btn btn-primary card-link">Start today's work</button>
								</div>
						  </div>
						</div>
					</div>

					<div className="col">
						<div className="card">
						  <div className="card-body">
						    <h5 className="card-title text-center">My tasks</h5>
						    <h6 className="card-subtitle mb-2 text-muted text-center">Your most important tasks</h6>
						    <table className="table">
								  <thead>
								    <tr>
								      <th scope="col">Priority</th>
								      <th scope="col">Name</th>
								      <th scope="col">Est. Length (HH:mm)</th>
								      <th scope="col">Edit</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <th scope="row">Important and Urgent</th>
								      <td>Presentation Preparation</td>
								      <td>00:30</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								    <tr>
								      <th scope="row">Important and Urgent</th>
								      <td>Meeting</td>
								      <td>01:00</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								    <tr>
								      <th scope="row">Important</th>
								      <td>Phone Call</td>
								      <td>01:00</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								    <tr>
								      <th scope="row">Urgent</th>
								      <td>Paperwork</td>
								      <td>03:30</td>
								      <th scope="col">
								      	<button className="btn btn-primary">Edit</button>
								      </th>
								    </tr>
								  </tbody>
								</table>
						    <div className="text-center">
							    <button className="btn btn-primary card-link">Manage my tasks</button>					
								</div>
						  </div>
						</div>
					</div>

					<div className="col">
						<div className="card">
						  <div className="card-body">
						    <h5 className="card-title text-center">More Options</h5>
						    <h6 className="card-subtitle mb-2 text-muted text-center">Choose more actions here</h6>
						    <div className="text-center">
							    <button className="btn btn-primary card-link">Manage my schedule</button>					
							    <button className="btn btn-primary card-link">Manage Work Log</button>
								</div>
						  </div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default Dashboard;