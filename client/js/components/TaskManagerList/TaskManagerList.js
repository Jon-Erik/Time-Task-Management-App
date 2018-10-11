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
	        		<td className="add-task-input add-task-td">
	        			<Button className="add-task-button"
	        							onClick={this.props.addTask}>
	        				+ Add Task
	        			</Button>
	        		</td>
	        		<td className="add-task-input">
	        			<Input type="text"
	        			 			 name="newTaskName" 
	        			 			 placeholder="Task Name"
	        			 			 onChange={this.props.handleInputChange}/>
	        		</td>
	        		<td className="add-task-input">
	        			<Input type="text" 
	        						 name="newTaskEstHrs" 
	        						 placeholder="Est. Hours (Ex.: 1.25)"
	        						 onChange={this.props.handleInputChange}/>
	        		</td>
	        	</tr>

	          {!this.props.tasks.length ? (
	          	<tr>
	          	 <td><i>No tasks to list.</i></td>
	          	</tr>
	          ) : (
	          	this.props.tasks.map((task, index) =>
	          	<OneTaskList key={task.id}
	          							 taskID={task.id}
	          							 taskName={task.name}
	          							 taskEstHrs={task.estHrs}
	          							 taskCompleted={task.completed}
	          							 toggleEditing={this.props.toggleEditing}
	          							 editedID={this.props.editedID}
	          							 updateTask={this.props.updateTask}
	          							 toggleCompleted={this.props.toggleCompleted}/>
	          ))}

	        </tbody>
	      </Table>
			</div>
		)
	}
}

export default TaskManagerList;