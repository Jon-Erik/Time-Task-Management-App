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
			show: false,
			editedTaskName: props.taskName,
			editedTaskEstHrs: props.taskEstHrs,
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
				  onMouseLeave={() => this.setState({show: false})}>

				{this.props.editedID !== this.props.taskID ? (
					<td>
						<input type="checkbox" 
								 title="Click to toggle"
								 defaultChecked={this.props.taskCompleted}
								 id={this.props.taskID}
								 onChange={this.props.toggleCompleted}/>

						{this.state.show ? (
							<Link title="Edit"
								 to="#" 
								 className="list-action-button" 
								 onClick={(event) => {this.props.toggleEditing(this.props.taskID); 
								 											}}>
								<img className="action-icon" src={EditIcon}/>
							</Link>
						) : null}
						
						{this.state.show ? (
							<Link title="Delete" 
										className="list-action-button"
										to="#">
								<img className="action-icon" src={DeleteIcon}/>
							</Link>
						) : null}

						{this.state.show ? (
							<Link title="Archive" 
										className="list-action-button"
										to="#">
								<img className="action-icon" src={ArchiveIcon}/>
							</Link>
						) : null}
					</td>
				) : (
					<td>
						<input type="checkbox" 
									 title="Click to toggle"
									 defaultChecked={this.props.taskCompleted}
									 id={this.props.taskID}
									 onChange={this.props.toggleCompleted}/>						

						{this.state.show ? (
							<Link title="Save"
									  to="#" 
									  className="list-action-button" 
									  onClick={(event) => {this.props.updateTask(this.props.taskID,
								 																						   this.state.editedTaskName,
								 																						   this.state.editedTaskEstHrs);
								 											   this.props.toggleEditing(this.props.taskID); 
								 											   }}>
								<img className="action-icon" src={SaveIcon}/>
							</Link>
						) : null}

						{this.state.show ? (
							<Link title="Discard changes"
									 to="#" 
									 className="list-action-button" 
									 onClick={(event) => {this.props.toggleEditing(this.props.taskID); 
									 											}}>
									<img className="action-icon" src={DiscardIcon}/>
								</Link>
							) : null}
					</td>
				)}

				{this.props.editedID !== this.props.taskID ? (
					<td>{this.props.taskName}</td>
				) : (
					<td className="edit-mode-td">
					<Input className="edit-mode-input" 
								 defaultValue={this.props.taskName}
								 onChange={this.handleInputChange}
								 name="editedTaskName"/>
					</td>
				)}

				{this.props.editedID !== this.props.taskID ? (
					<td>{this.props.taskEstHrs}</td>
				) : (
					<td className="edit-mode-td">
					<Input className="edit-mode-input" 
								 defaultValue={this.props.taskEstHrs}
								 onChange={this.handleInputChange}
								 name="editedTaskEstHrs"/>
					</td>
				)}
			</tr>
		)
	}
}

export default OneTaskList;