import React from "react";
import "./TaskManagerManage.css"
import API from "../../utils/API";
import Moment from 'react-moment';
import {Table, Input, Button} from "reactstrap";
import OneTaskManage from "../OneTaskManage"

class TaskManagerManage extends React.Component {
	render () {
		return (
			<div>
			<h2>Manage View</h2>
			<br />
				<Table hover>
	        <tbody>
	        	<tr>
	        		<th className="add-task-input add-task-td">Status</th>
	        		<th className="add-task-input">Name</th>
	        		<th className="add-task-input">Est. Hours</th>
	        		<th className="add-task-input">Importance</th>
	        		<th className="add-task-input">Urgency</th>
	        		<th className="add-task-input">Due</th>
	        		<th className="add-task-input">Deadline/target</th>
	        		<th className="add-task-input">Actions</th>
	        		<th className="add-task-input">Tags</th>
	        	</tr>

	          {!this.props.tasks.length ? (
	          	<td><i>No tasks to list.</i></td>
	          ) : (
	          	this.props.tasks.map((task, index) =>
	          	<OneTaskManage key={index}
		          							 taskID={task.id}
		          							 taskName={task.name}
		          							 taskEstHrs={task.estHrs}
		          							 taskCompleted={task.completed}
		          							 toggleEditingBool={this.props.toggleEditingBool}
		          							 editingBool={this.props.editingBool}
		          							 taskImportance={task.importance}
		          							 toggleImportance={this.props.toggleImportance}
		          							 taskUrgency={task.urgency}
		          							 toggleUrgency={this.props.toggleUrgency}/>
	          ))}

	        </tbody>
	      </Table>
			</div>	
		)
	}
}

export default TaskManagerManage;