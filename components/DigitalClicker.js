const React = require('react');

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0
        }

        this.handleDigitalClick = this.handleDigitalClick.bind(this);
    }

    handleDigitalClick() {
        let counter = this.state.timesClicked + 1;

        this.setState({
            timesClicked: counter
        });
    }

    render() {
        return (
            <button onClick={this.handleDigitalClick}>{this.state.timesClicked}</button>
        )
    }
}

module.exports = DigitalClicker;
