import React from "react";
import "./AddTask.css";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class AddTask extends React.Component {

	render() {
		return (
			<div>
				<Form inline>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0 add-class-formgroup">
	          <Label className="mr-sm-2">New Task</Label>
	          <Input type="text" name="newTask" placeholder="Enter task name"/>
	        </FormGroup>
	        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 add-class-formgroup">
	          <Label className="mr-sm-2">Est. Hours</Label>
	          <Input type="text" name="newTask" placeholder="Ex.: 1.25"/>
	        </FormGroup>
	        <Button className="add-task-button">+ Add Task</Button>
        </Form>
			</div>
		)
	}
}

export default AddTask;