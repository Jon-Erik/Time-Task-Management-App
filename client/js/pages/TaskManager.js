import React from "react";
import "./TaskManager.css";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

class TaskManager extends React.Component {
	state = {

	}

	render() {
		return (
			<div className="container">
				<h1>Task Manager</h1>
					<AddTask />
					<br />
					<TaskList />
			</div>
		)
	}
}

export default TaskManager;