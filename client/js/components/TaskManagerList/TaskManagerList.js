import React from "react";
import "./TaskManagerList.css";
import API from "../../utils/API";
import Moment from 'react-moment';
import {Table, Input, Button} from "reactstrap";
import OneTaskList from "../OneTaskList"

class TaskManagerList extends React.Component {

	render() {
		return (
			<div>
			<br />
				<Table hover>
	        <tbody>
	        	<tr>
	        		<td className="add-task-input add-task-td"><Button className="add-task-button">+ Add Task</Button></td>
	        		<td className="add-task-input"><Input type="text" name="newTask" placeholder="Task Name"/></td>
	        		<td className="add-task-input"><Input type="text" name="newTask" placeholder="Est. Hours (Ex.: 1.25)"/></td>
	        	</tr>

	          {!this.props.tasks.length ? (
	          	<td><i>No tasks to list.</i></td>
	          ) : (
	          	this.props.tasks.map((task, index) =>
	          	<OneTaskList key={index}
	          							 taskID={task.id}
	          							 taskName={task.name}
	          							 taskEstHrs={task.estHrs}
	          							 taskCompleted={task.completed}
	          							 toggleEditingBool={this.props.toggleEditingBool}
	          							 editingBool={this.props.editingBool}/>
	          ))}

	        </tbody>
	      </Table>
			</div>
		)
	}
}

export default TaskManagerList;