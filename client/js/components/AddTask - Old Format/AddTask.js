import React from "react";
import "./AddTask.css";
import API from "../../utils/API";
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'

class AddTask extends React.Component {

	render() {
		return (
			<div>
			<br />
			<h3><i>Add a task here</i></h3>
				<form>
					<div className="form-group">
						<label>What is the name of your task? <i>(required)</i></label>
						<input type="text"
									 className="form-control" 
									 name="name"
									 placeholder="Ex: Do some paperwork"/> 
					</div>
					<div className="form-group">
						<label>Do you have any notes to add about this task? <i>(optional)</i></label>
						<textarea type="text"
									 className="form-control" 
									 name="description"
									 placeholder="Ex: Ask sales manager for company ID"/> 
					</div>
					<div className="form-group">
						<label>How long do you estimate this task will take? <i>(HH:mm, optional)</i></label>
						<input type="text"
									 className="form-control" 
									 name="tasklength"
									 placeholder="Ex: 01:20"/> 
					</div>
					<div className="form-group">
						<label>When does this task need to be finished? <i>(click field to select, optional)</i></label>
						<br />
						<Flatpickr 
							         value={this.props.todaysDate}
							         name="dueDate"/>			  
					</div>
					<div className="form-group">
						<label>Is this date a hard deadline or a target date? <i>(select one, required)</i></label>					
						<div className="form-check">
					    <input type="radio" className="form-check-input" name="dueDateRadio" value="deadline"/>
					    <label className="form-check-label">Hard deadline</label>
					  </div>
					  <div className="form-check">
					    <input type="radio" className="form-check-input" name="dueDateRadio" value="targetDate"/>
					    <label className="form-check-label">Target date</label>
					  </div>
					  <div className="form-check">
					    <input type="radio" className="form-check-input" name="dueDateRadio" value="noDueDate"/>
					    <label className="form-check-label">I didn't pick a date</label>
					  </div>
				  </div>
				  <div className="form-group">
						<label>How important is it that you accomplish this task? <i>(select one, required)</i></label>					
						<div className="form-check">
					    <input type="radio" className="form-check-input" name="importanceRadio" value="veryImportant"/>
					    <label className="form-check-label">Very important</label>
					  </div>
					  <div className="form-check">
					    <input type="radio" className="form-check-input" name="importanceRadio" value="notImportant"/>
					    <label className="form-check-label">Not too important</label>
					  </div>
				  </div>
				  <div className="form-group">
						<label>Does this task need to be completed soon? <i>(select one, required)</i></label>					
						<div className="form-check">
					    <input type="radio" className="form-check-input" name="urgencyRadio" value="highUrgency"/>
					    <label className="form-check-label">Yes</label>
					  </div>
					  <div className="form-check">
					    <input type="radio" className="form-check-input" name="urgencyRadio" value="lowUrgency"/>
					    <label className="form-check-label">No</label>
					  </div>
				  </div>
				  <p><i>Please note that this application is designed to increase productivity and efficiency. If a task is marked neither needing to be completed soon nor being very important, it will <strong>not</strong> be added to your task list.</i></p>
					<button className="btn btn-primary">
									Add to list</button>
				</form>
			</div>
		)
	}
}

export default AddTask;