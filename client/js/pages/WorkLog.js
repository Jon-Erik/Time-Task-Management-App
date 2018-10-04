import React from "react";
import "./WorkLog.css";

class WorkLog extends React.Component {
	state = {

	}

	render() {
		return (
			<div className="container">
				<h1>Work Log and History</h1>
				<form>
					<h5>Order Tasks</h5>
					<div class="form-group">
				    <label>Choose to order by:</label>
				    <select class="form-control">
				      <option>Date completed (most recent first)</option>
				      <option>Date completed (most recent last)</option>
				      <option>Actual Length (shortest to longest)</option>
				      <option>Actual Length (longest to shortest)</option>
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

				  <hr/>
				  <h5>Time adding</h5>
				  <p>Add the times for different tasks together using these functions.</p>
				  <div class="form-group">
				  	<label>Add total actual times for selected tasks</label>
				  	<br />
				  	<button className="btn btn-primary">Add times</button>
				  	<br />
				  	<h6>Total Hours: 00:00 (HH:mm)</h6>
				  </div>
				  <div class="form-group">
				  	<label>Add total actual times for tasks with a certain tag. Select a tag below:</label>
				  	<select class="form-control">
				      <option>errands</option>
				      <option>finances</option>
				      <option>paperwork</option>
				    </select>
				    <br />
				  	<button className="btn btn-primary">Add times</button>
				  	<br />
				  	<h6>Total Hours: 00:00 (HH:mm)</h6>
				  </div>
				</form>

				<table class="table">
					<thead>
					  <tr>
					  	<th scope="col">Select</th>
					    <th scope="col">Name</th>
					    <th scope="col">Notes</th>
					    <th scope="col">Scheduled length (HH:mm)</th>
					    <th scope="col">Actual length (HH:mm)</th>
					    <th scope="col">Scheduled start/stop</th>
					    <th scope="col">Actual start/stop</th>
					    <th scope="col">Tags</th>
					    <th scope="col">Mark as incomplete</th>
					    <th scope="col">Edit Task</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
					    <th scope="row"><input className="form-check-input" type="checkbox"/></th>
					    <td>Go to bank</td>
					    <td>bring the right cheque</td>
					    <td>00:15</td>
					    <td>00:23</td>
					    <td>none</td>
					    <td>TIMESTAMP/TIMESTAMP</td>
					    <td>errands, finances</td>
					    <td><button className="btn btn-primary">Incomplete</button></td>
					    <td><button className="btn btn-primary">Edit</button></td>
					  </tr>
					  <tr>
					    <th scope="row"><input className="form-check-input" type="checkbox"/></th>
					    <td>Get groceries</td>
					    <td>Remember milk</td>
					    <td>00:15</td>
					    <td>00:23</td>
					    <td>TIMESTAMP/TIMESTAMP</td>
					    <td>TIMESTAMP/TIMESTAMP</td>
					    <td>errands</td>
					    <td><button className="btn btn-primary">Incomplete</button></td>
					    <td><button className="btn btn-primary">Edit</button></td>
					  </tr>
					  <tr>
					    <th scope="row"><input className="form-check-input" type="checkbox"/></th>
					    <td>Fill out tax forms</td>
					    <td>income tax only</td>
					    <td>02:30</td>
					    <td>03:23</td>
					    <td>TIMESTAMP/TIMESTAMP</td>
					    <td>TIMESTAMP/TIMESTAMP</td>
					    <td>errands, finances</td>
					    <td><button className="btn btn-primary">Incomplete</button></td>
					    <td><button className="btn btn-primary">Edit</button></td>
					  </tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default WorkLog;