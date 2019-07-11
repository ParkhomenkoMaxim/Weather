import React from 'react';
import { Tooltip } from 'reactstrap';

 class ToolTip extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const main = this.props.main;
    const tooltipInfo = this.props.tooltipInfo;
    const bsColor = this.props.bsColor
    return (
      <div>
        <span className ={bsColor} href="#" id="tooltipMain">{main}</span>
        <Tooltip placement="auto" isOpen={this.state.tooltipOpen} target="tooltipMain" toggle={this.toggle}>
          {tooltipInfo}
        </Tooltip>
      </div>
    );
  }
}


export default ToolTip;