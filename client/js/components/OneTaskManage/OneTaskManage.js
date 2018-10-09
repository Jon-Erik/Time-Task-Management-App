import React from "react";
import "./OneTaskManage.css";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import { Link } from "react-router-dom";
import EditIcon from "../../../assets/images/editicon.png"
import DeleteIcon from "../../../assets/images/deleteicon.png"
import ArchiveIcon from "../../../assets/images/archiveicon.png"

class OneTaskList extends React.Component {
	state = {
		modeView: "read",
		show: false
	}

	changeView = (event) => {
		if (this.props.editingBool === false) {
			this.setState({
				modeView: "edit"
			});
		} else {			
			this.setState({
				modeView: "read"
			});
		}
	}

	render() {
		const {modeView} = this.state;

		return (
			<tr onMouseEnter={() => this.setState({show: true})}
					onMouseLeave={() => this.setState({show: false})}
			>
				<td>
					{this.props.taskCompleted ? (
						<input type="checkbox" title="Completed: click to toggle" defaultChecked/>		
					) : (
						<input type="checkbox" title="Incomplete: click to toggle"/>
					)}
				</td>

				{modeView == "read" ? (
					<td className="manage-name-td">{this.props.taskName}</td>
				) : null}
				
				{modeView == "edit" ? (
					<td className="manage-edit-mode-td manage-name-td">
						<Input className="manage-edit-mode-input" value={this.props.taskName}/>
					</td>
				) : null}

				{modeView == "read" ? (
					<td>{this.props.taskEstHrs}</td>
				) : null}

				{modeView == "edit" ? (
					<td className="edit-mode-td">
						<Input className="manage-edit-mode-input" value={this.props.taskEstHrs}/>
					</td>
				) : null}

				<td>
					{this.props.taskImportance === "high" ? (
						<Button color="danger" 
										onClick={this.props.toggleImportance} 
										id={this.props.taskID}
										className="importanceButton"
										title="Click to toggle">
							High
						</Button>
					) : null}

					{this.props.taskImportance === "low" ? (
						<Button color="primary" 
										onClick={this.props.toggleImportance} 
										id={this.props.taskID}
										className="importanceButton"
										title="Click to toggle">
							Low
						</Button>
					) : null}
					
					{this.props.taskImportance === "" ? (
						<Button color="secondary" 
										onClick={this.props.toggleImportance} 
										id={this.props.taskID}
										className="importanceButton"
										title="Click to toggle">
							None
						</Button>
					) : null}
				</td>

				<td>
					{this.props.taskUrgency === "high" ? (
						<Button color="danger" 
										onClick={this.props.toggleUrgency} 
										id={this.props.taskID}
										className="importanceButton"
										title="Click to toggle">
							High
						</Button>
					) : null}

					{this.props.taskUrgency === "low" ? (
						<Button color="primary" 
										onClick={this.props.toggleUrgency} 
										id={this.props.taskID}
										className="importanceButton"
										title="Click to toggle">
							Low
						</Button>
					) : null}
					
					{this.props.taskUrgency === "" ? (
						<Button color="secondary" 
										onClick={this.props.toggleUrgency} 
										id={this.props.taskID}
										className="importanceButton"
										title="Click to toggle">
							None
						</Button>
					) : null}
				</td>
			</tr>
		)
	}
}

export default OneTaskList;