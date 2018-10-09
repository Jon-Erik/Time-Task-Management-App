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
				completed: true,
				importance: "",
				urgency: "",
				due: "10/12/2018",
				deadline: true,
				tags: ""
			},
			{
				id: 2,
				name: "win a board game",
				estHrs: 1.66,
				completed: false,
				importance: "",
				urgency: "",
				due: "10/12/2018",
				deadline: false,
				tags: ""
			},
			{
				id: 3,
				name: "build a rocket",
				estHrs: 2.75,
				completed: false,
				importance: "",
				urgency: "",
				due: "10/12/2018",
				deadline: false,
				tags: ""
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

	toggleImportance = event => {
		let taskID = event.target.id;
		let selectedTask;
		let taskIndex;
		for (let i = 0; i < this.state.tasks.length; i++) {
			if (this.state.tasks[i].id == taskID) {
				selectedTask = this.state.tasks[i];
				taskIndex = i;
			}
		}

		if (selectedTask.importance === "") {
			selectedTask.importance = "low";
		} else if (selectedTask.importance === "low") {
			selectedTask.importance = "high";
		} else if (selectedTask.importance === "high") {
			selectedTask.importance = "low";
		}

		this.setState({
			tasks: this.state.tasks
		});
	}

	toggleUrgency = event => {
		let taskID = event.target.id;
		let selectedTask;
		let taskIndex;
		for (let i = 0; i < this.state.tasks.length; i++) {
			if (this.state.tasks[i].id == taskID) {
				selectedTask = this.state.tasks[i];
				taskIndex = i;
			}
		}

		if (selectedTask.urgency === "") {
			selectedTask.urgency = "low";
		} else if (selectedTask.urgency === "low") {
			selectedTask.urgency = "high";
		} else if (selectedTask.urgency === "high") {
			selectedTask.urgency = "low";
		}

		this.setState({
			tasks: this.state.tasks
		});
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
				{viewMode == "manage" ? <TaskManagerManage tasks={this.state.tasks}
																									 toggleEditingBool={this.toggleEditingBool}
																									 editingBool={this.state.editing}
																									 toggleImportance={this.toggleImportance}
																									 toggleUrgency={this.toggleUrgency}/> : null }
				{viewMode == "tags" ? <TaskManagerTags /> : null }

			</div>
		)
	}
}

export default TaskManager;