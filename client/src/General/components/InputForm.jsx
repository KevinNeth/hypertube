import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DynLabel from '../../General/components/DynLabel';

class InputForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
            textEmpty: true
        }
        this.updateInputValue = this.updateInputValue.bind(this);
	}

    updateInputValue = (evt) => {
		evt.preventDefault();
		if (evt.target.value) {
			this.setState({
				textEmpty: false,
			});
		} else {
			this.setState({
				textEmpty: true,
			});
		}
	};

    render() {
        return (
            <div className={this.props.containerClass}>
                <DynLabel 
                    isEmpty={this.state.textEmpty}
                    textValue={this.props.textValue}
                />
                <input
                    type={this.props.type}
                    className={this.props.inputClass}
                    onChange={this.updateInputValue}
                />
            </div>
        );
    }
}

InputForm.propTypes = {
    containerClass: PropTypes.string,
    textValue: PropTypes.string,
    type: PropTypes.string,
    inputClass: PropTypes.string
}

export default InputForm;