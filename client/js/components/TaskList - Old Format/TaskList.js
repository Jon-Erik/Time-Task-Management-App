import React from "react";
import "./TaskList.css";
import API from "../../utils/API";
import Moment from 'react-moment';

class TaskList extends React.Component {

	render() {
		return (
			<div>
				<h3>My tasks</h3>

				<hr/>				
				<form>
					<h5>Order Tasks</h5>
					<div class="form-group">
				    <label>Choose to order by:</label>
				    <select class="form-control">
				      <option>Priority (urgent and important, important, urgent)</option>
				      <option>Length of task (shortest to longest)</option>
				      <option>Length of task (longest to shortest)</option>
				      <option>Due Date (closest due dates first)</option>
				      <option>Due Date (closest due dates last)</option>
				    </select>
				  </div>
				  <p>To order by tag, simply click on a tag for a listed task to make those tasks appear at the top of the list.</p>
				  <button className="btn btn-primary">Order list</button>  

				<hr/>
					<h5>My Tags</h5>
					<ul>
						<li>errands <button className="btn btn-secondary">X</button></li>
						<li>finances <button className="btn btn-secondary">X</button></li>
						<li>paperwork <button className="btn btn-secondary">X</button></li>
					</ul>
					<div class="form-group">
					  <input type="text" class="form-control" placeholder="new tag"/>
					  <button className="btn btn-primary">Create tag</button>
					</div>
					<div class="form-group">
				    <select class="form-control">
				      <option>errands</option>
				      <option>finances</option>
				      <option>paperwork</option>
				    </select>
				    <button className="btn btn-primary">Add tag to selected tasks</button>
				  </div>
				  <div>
				    <button className="btn btn-primary">Clear tags from selected tasks</button>
				  </div>
				  <div>
				  	<button className="btn btn-primary">Delete selected tasks</button>
				  </div>
				</form>

				<table class="table">
					<thead>
					  <tr>
					  	<th scope="col">Select</th>
					    <th scope="col">Name</th>
					    <th scope="col">Length (HH:mm)</th>
					    <th scope="col">Due Date (MM/DD/YY)</th>
					    <th scope="col">Created on (MM/DD/YY)</th>
					    <th scope="col">Priority</th>
					    <th scope="col">Time spent (HH:mm)</th>
					    <th scope="col">Start timer</th>
					    <th scope="col">Tags</th>
					    <th scope="col">Add to calendar</th>
					    <th scope="col">Mark as completed</th>
					    <th scope="col">Edit Task</th>
					    <th scope="col">Interruption</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
					    <th scope="row"><input className="form-check-input" type="checkbox"/></th>
					    <td>Go to bank</td>
					    <td>00:15</td>
					    <td>12/12/2018 (deadline)</td>
					    <td>10/12/2018</td>
					    <td>Important and Urgent</td>
					    <td>00:00</td>
					    <td><button className="btn btn-primary">Start</button></td>
					    <td>errands, finances</td>
					    <td><button className="btn btn-primary">Schedule</button></td>
					    <td><button className="btn btn-primary">Completed</button></td>
					    <td><button className="btn btn-primary">Edit</button></td>
					    <td><button className="btn btn-primary">Record Interruption</button></td>
					  </tr>
					  <tr>
					  	<th scope="row"><input className="form-check-input" type="checkbox"/></th>
					    <td>Get groceries</td>
					    <td>00:45</td>
					    <td>11/12/2018 (target date)</td>
					    <td>10/12/2018</td>
					    <td>Important</td>
					    <td>00:00</td>
					    <td><button className="btn btn-primary">Start</button></td>
					    <td>errands</td>
					    <td><button className="btn btn-primary">Schedule</button></td>
					    <td><button className="btn btn-primary">Completed</button></td>
					    <td><button className="btn btn-primary">Edit</button></td>
					    <td><button className="btn btn-primary">Record Interruption</button></td>
					  </tr>
					  <tr>
					  	<th scope="row"><input className="form-check-input" type="checkbox"/></th>
					    <td>Fill out tax forms</td>
					    <td>00:45</td>
					    <td>11/12/2018 (target date)</td>
					    <td>10/12/2018</td>
					    <td>Urgent</td>
					    <td>00:00</td>
					    <td><button className="btn btn-primary">Start</button></td>
					    <td>paperwork</td>
					    <td><button className="btn btn-primary">Schedule</button></td>
					    <td><button className="btn btn-primary">Completed</button></td>
					    <td><button className="btn btn-primary">Edit</button></td>
					    <td><button className="btn btn-primary">Record Interruption</button></td>
					  </tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default TaskList;