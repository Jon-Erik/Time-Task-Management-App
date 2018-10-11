import React from "react";
import "./TaskManagerList.css";
import API from "../../utils/API";
import Moment from 'react-moment';
import {Table, Input, Button} from "reactstrap";
import OneTaskList from "../OneTaskList"

class TaskManagerList extends React.Component {

	render() {
		const {tasks, editedID, updateTask, toggleCompleted, toggleEditing, deleteTask} = this.props;
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
	        			<form onSubmit={this.props.addTask}>
		        			<Input type="text"
		        			 			 name="newTaskName" 
		        			 			 placeholder="Task Name"
		        			 			 value={this.props.newTaskName}
		        			 			 onChange={this.props.handleInputChange}/>
	        			</form>
	        		</td>
	        		<td className="add-task-input">
		        		<form onSubmit={this.props.addTask}>
		        			<Input type="number"
		        						 min="0" 
		        						 name="newTaskEstHrs" 
		        						 placeholder="Est. Hours (Ex.: 1.25)"
		        						 value={this.props.newTaskEstHrs}
		        						 onChange={this.props.handleInputChange}/>
		        		</form>
	        		</td>
	        	</tr>

	          {Object.keys(tasks).length === 0 ? (
	          	<tr>
	          	 <td><i>No tasks to list.</i></td>
	          	</tr>
	          ) : (
	          	Object.keys(tasks).map(id => (
		          	<OneTaskList key={tasks[id].id}
		          							 taskID={tasks[id].id}
		          							 taskName={tasks[id].name}
		          							 taskEstHrs={tasks[id].estHrs}
		          							 taskCompleted={tasks[id].completed}
		          							 toggleEditing={toggleEditing}
		          							 editedID={editedID}
		          							 updateTask={updateTask}
		          							 deleteTask={deleteTask}
		          							 toggleCompleted={toggleCompleted}/>
		          	)
	          	)
	          )}

	        </tbody>
	      </Table>
			</div>
		)
	}
}

export default TaskManagerList;