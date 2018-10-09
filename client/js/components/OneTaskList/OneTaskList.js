import React from "react";
import "./OneTaskList.css";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
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

					{this.state.show ? (
						<a title="Edit" 
							 className="list-action-button" 
							 onClick={(event) => {this.props.toggleEditingBool(this.props.taskID); this.changeView()}}>
							<img className="action-icon" src={EditIcon}/>
						</a>
					) : null}
							
					{this.state.show ? (
							<a title="Delete" className="list-action-button">
								<img className="action-icon" src={DeleteIcon}/>
							</a>
					) : null}

					{this.state.show ? (
							<a title="Archive" className="list-action-button">
								<img className="action-icon" src={ArchiveIcon}/>
							</a>
					) : null}
				</td>

				{modeView == "read" ? (
					<td>{this.props.taskName}</td>
				) : null}
				
				{modeView == "edit" ? (
					<td className="edit-mode-td">
						<Input className="edit-mode-input" value={this.props.taskName}/>
					</td>
				) : null}

				{modeView == "read" ? (
					<td>{this.props.taskEstHrs}</td>
				) : null}

				{modeView == "edit" ? (
					<td className="edit-mode-td">
						<Input className="edit-mode-input" value={this.props.taskEstHrs}/>
					</td>
				) : null}
			</tr>
		)
	}
}

export default OneTaskList;