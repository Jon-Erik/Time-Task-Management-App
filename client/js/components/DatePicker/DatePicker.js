import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
import React from "react";

class DatePicker extends React.Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  handleNewDate = event => {
    console.log(event)
  }

  render() {
    const { date } = this.state;
    return (
      <Flatpickr data-enable-time
        value={date}
        onChange={date => { this.setState({date}) }} />
    )
  }
}

export default DatePicker;