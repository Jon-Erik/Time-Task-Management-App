import React from "react";
import "./TaskManager.css";
import TaskManagerList from "../components/TaskManagerList";
import TaskManagerManage from "../components/TaskManagerManage";
import TaskManagerTags from "../components/TaskManagerTags";
import {Button, ButtonGroup} from "reactstrap";

class TaskManager extends React.Component {
	state = {
			tasks: {
				1: {
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
				2: {
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
				3: {
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
			},
			viewMode: "entry",
			editedID: 0,
			newTaskName: "",
			newTaskEstHrs: "",
			idCounter: 4
		}

	changeView = (event) => {
		let buttonName = event.target.name;
		this.setState({
			viewMode: buttonName
		})
	}

	toggleEditing = (taskID) => {
		if (this.state.editedID === 0) {
			this.setState({
				editing: true,
				editedID: taskID
			})
		} else if (taskID !== this.state.editedID) {
			alert("You may only edit one task at a time. Please save or discard your changes before proceeding.")
		} else if (taskID === this.state.editedID) {
			this.setState({
				editing: false,
				editedID: 0
			});
		}
	}

	addTask = event => {
		event.preventDefault();

		if (this.state.newTaskName === "") {
			alert("You must enter a name.")
		} else {
			let newTask = {
				id: this.state.idCounter,
				name: this.state.newTaskName,
				estHrs: this.state.newTaskEstHrs,
				completed: false,
				importance: "",
				urgency: "",
				due: "",
				deadline: false,
				tags: ""
			}
			
			if (newTask.estHrs === "" || newTask.estHrs < 0) {
				newTask.estHrs = 0;
			}

			let tasks = Object.assign({}, this.state.tasks)
			tasks[newTask.id] = newTask

			this.setState({
				idCounter: this.state.idCounter + 1,
				tasks: tasks,
				newTaskName: "",
				newTaskEstHrs: ""
			})
		}
	}

	handleInputChange = event => {
		let {name, value} = event.target;

		this.setState({
			[name]: value
		})
	}

	toggleImportance = event => {
		let taskID = event.target.id;
		let tasks = Object.assign({}, this.state.tasks)

		if (tasks[taskID].importance === "") {
			tasks[taskID].importance = "low";
		} else if (tasks[taskID].importance === "low") {
			tasks[taskID].importance = "high";
		} else if (tasks[taskID].importance === "high") {
			tasks[taskID].importance = "low";
		}

		this.setState({
			tasks: tasks
		}, console.log(task[taskID]));
	}

	toggleUrgency = event => {
		let taskID = event.target.id;
		let tasks = Object.assign({}, this.state.tasks)

		if (task[taskID].urgency === "") {
			task[taskID].urgency = "low";
		} else if (task[taskID].urgency === "low") {
			task[taskID].urgency = "high";
		} else if (task[taskID].urgency === "high") {
			task[taskID].urgency = "low";
		}

		this.setState({
			tasks: tasks
		});
	}

	toggleCompleted = event => {
		let taskID = event.target.name;
		let tasks = Object.assign({}, this.state.tasks)

		if (tasks[taskID].completed === true) {
			tasks[taskID].completed = false;
		} else {
			tasks[taskID].completed = true;
		}

		this.setState({
			tasks: tasks
		});
	}

	updateTask = (taskID, taskName, taskEstHrs) => {
		let tasks = Object.assign({}, this.state.tasks)

		tasks[taskID].name = taskName;
		tasks[taskID].estHrs = taskEstHrs;

		this.setState({
			tasks: tasks
		});

		this.toggleEditing(taskID);
	}

	deleteTask = event => {
		let taskID = event.currentTarget.name;
		let tasks = Object.assign({}, this.state.tasks)

		delete tasks[taskID];

		this.setState({
			tasks: tasks
		});
	}

	render() {
		const {viewMode} = this.state;
		return (
			<div className="container">
				<h1>Task Manager</h1>
				<ButtonGroup>

				{this.state.viewMode === "entry" ? (
					<Button color="success"
									onClick={this.changeView}
									name="entry">
						Entry
					</Button>
				) : (
					<Button color="info"
									onClick={this.changeView}
									name="entry">
						Entry
					</Button>
				)}

				{this.state.viewMode === "manage" ? (
					<Button color="success"
									onClick={this.changeView}
									name="manage">
						Manage
					</Button>
				) : (
					<Button color="info"
									onClick={this.changeView}
									name="manage">
						Manage
					</Button>
				)}

				{this.state.viewMode === "tags" ? (
					<Button color="success"
									onClick={this.changeView}
									name="tags">
						Tags
					</Button>
				) : (
					<Button color="info"
									onClick={this.changeView}
									name="tags">
						Tags
					</Button>
				)}
					
				</ButtonGroup>
				
				{viewMode == "entry" ? <TaskManagerList tasks={this.state.tasks}
																								toggleEditing={this.toggleEditing}
																								editedID={this.state.editedID}
																								updateTask={this.updateTask}
																								deleteTask={this.deleteTask}
																								toggleCompleted={this.toggleCompleted}
																								handleInputChange={this.handleInputChange}
																								addTask={this.addTask}
																								newTaskName={this.state.newTaskName}
																								newTaskEstHrs={this.state.newTaskEstHrs}/> : null }
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