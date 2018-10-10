import React from "react";
import "./OneTaskList.css";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import { Link } from "react-router-dom";
import EditIcon from "../../../assets/images/editicon.png"
import DeleteIcon from "../../../assets/images/deleteicon.png"
import ArchiveIcon from "../../../assets/images/archiveicon.png"
import SaveIcon from "../../../assets/images/saveicon.png"
import DiscardIcon from "../../../assets/images/discardicon.png"

class OneTaskList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modeView: "read",
			show: false,
			editedTaskName: props.taskName,
			editedTaskEstHrs: props.taskEstHrs,
		}
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

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		})
	}

	render() {
		const {modeView} = this.state;

		return (
			<tr onMouseEnter={() => this.setState({show: true})}
					onMouseLeave={() => this.setState({show: false})}
			>
				<td>
					{this.props.taskCompleted ? (
						<input type="checkbox" 
									 title="Completed: click to toggle"
									 defaultChecked
									 id={this.props.taskID}
									 onChange={this.props.toggleCompleted}/>		
					) : (
						<input type="checkbox" 
									 title="Incomplete: click to toggle"
									 id={this.props.taskID}
									 onChange={this.props.toggleCompleted}/>
					)}

					{this.state.show && this.state.modeView === "read" ? (
						<Link title="Edit"
							 to="#" 
							 className="list-action-button" 
							 onClick={(event) => {this.props.toggleEditingBool(this.props.taskID); 
							 											this.changeView()}}>
							<img className="action-icon" src={EditIcon}/>
						</Link>
					) : null}

					{this.state.show && this.state.modeView === "edit" ? (
						<Link title="Save"
							 to="#" 
							 className="list-action-button" 
							 onClick={(event) => {this.props.updateTask(this.props.taskID,
							 																						this.state.editedTaskName,
							 																						this.state.editedTaskEstHrs);
							 											this.props.toggleEditingBool(this.props.taskID); 
							 											this.changeView();}}>
							<img className="action-icon" src={SaveIcon}/>
						</Link>
					) : null}

					{this.state.show && this.state.modeView === "edit" ? (
						<Link title="Discard changes"
							 to="#" 
							 className="list-action-button" 
							 onClick={(event) => {this.props.toggleEditingBool(this.props.taskID); 
							 											this.changeView()}}>
							<img className="action-icon" src={DiscardIcon}/>
						</Link>
					) : null}
							
					{this.state.show && this.state.modeView === "read" ?  (
							<Link title="Delete" 
										className="list-action-button"
										to="#">
								<img className="action-icon" src={DeleteIcon}/>
							</Link>
					) : null}

					{this.state.show && this.state.modeView === "read" ? (
							<Link title="Archive" 
										className="list-action-button"
										to="#">
								<img className="action-icon" src={ArchiveIcon}/>
							</Link>
					) : null}
				</td>

				{modeView == "read" ? (
					<td>{this.props.taskName}</td>
				) : null}
				
				{modeView == "edit" ? (
					<td className="edit-mode-td">
						<Input className="edit-mode-input" 
									 defaultValue={this.props.taskName}
									 onChange={this.handleInputChange}
									 name="editedTaskName"/>
					</td>
				) : null}

				{modeView == "read" ? (
					<td>{this.props.taskEstHrs}</td>
				) : null}

				{modeView == "edit" ? (
					<td className="edit-mode-td">
						<Input className="edit-mode-input" 
									 defaultValue={this.props.taskEstHrs}
									 onChange={this.handleInputChange}
									 name="editedTaskEstHrs"/>
					</td>
				) : null}
			</tr>
		)
	}
}

export default OneTaskList;