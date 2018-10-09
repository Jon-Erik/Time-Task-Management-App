import React from "react";
import "./TaskManager.css";
// import AddTask from "../components/AddTask";
// import TaskList from "../components/TaskList";
import TaskManagerList from "../components/TaskManagerList";
import TaskManagerManage from "../components/TaskManagerManage";
import TaskManagerTags from "../components/TaskManagerTags";
import {Button, ButtonGroup} from "reactstrap";

class TaskManager extends React.Component {
	state = {
		tasks: [
			{
				id: 1,
				name: "go to bank",
				estHrs: 1.75,
				completed: true
			},
			{
				id: 2,
				name: "win a board game",
				estHrs: 1.66,
				completed: false
			},
			{
				id: 3,
				name: "build a rocket",
				estHrs: 2.75,
				completed: false
			},
		],
		viewMode: "entry",
		editing: false,
		editedID: 0
	}

	changeView = (event) => {
		let buttonName = event.target.name;
		this.setState({
			viewMode: buttonName
		})
	}

	printName = () => {
		console.log(this.state.viewMode)
	}

	toggleEditingBool = (taskID) => {
		if (this.state.editing === false) {
			this.setState({
				editing: true,
				editedID: taskID
			})
		} else if (this.state.editing === true && taskID !== this.state.editedID) {
			alert("You may only edit one task at a time.")
		} else if (this.state.editing === true && taskID === this.state.editedID) {
			this.setState({
				editing: false,
				editedID: 0
			});
		}
	}

	render() {
		const {viewMode} = this.state;
		return (
			<div className="container">
				<h1>Task Manager</h1>
				<ButtonGroup>
					<Button color="primary"
									onClick={this.changeView}
									name="entry">
						Entry
					</Button>
					<Button color="primary"
									onClick={this.changeView}
									name="manage">
						Manage
					</Button>
					<Button color="primary"
									onClick={this.changeView}
									name="tags">
						Tags
					</Button>
				</ButtonGroup>
				
				{viewMode == "entry" ? <TaskManagerList tasks={this.state.tasks}
																								toggleEditingBool={this.toggleEditingBool}
																								editingBool={this.state.editing}/> : null }
				{viewMode == "manage" ? <TaskManagerManage /> : null }
				{viewMode == "tags" ? <TaskManagerTags /> : null }

			</div>
		)
	}
}

export default TaskManager;