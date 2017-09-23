import React from 'react';
import PropTypes from 'prop-types';

const CheckboxOrRadioGroup = (props) => (
    <div>
        <label className="form-label">{props.title}</label>
        <div className="checkbox-group">
            {props.options.map(option => {
                return (
                    <label key={option} className="form-label capitalize">
                        <input
                            className="form-checkbox"
                            name={props.setName}
                            onChange={props.controlFunc}
                            value={option}
                            checked={props.selectedOptions.indexOf(option) > -1}
                            type={props.type} /> {option}
                    </label>
                );
            })}
        </div>
    </div>
);

// CheckboxOrRadioGroup.propTypes = {
//     title: React.PropTypes.string.isRequired,
//     type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
//     setName: React.PropTypes.string.isRequired,
//     options: React.PropTypes.array.isRequired,
//     selectedOptions: React.PropTypes.array,
//     controlFunc: React.PropTypes.func.isRequired
// };

CheckboxOrRadioGroup.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio']),
    setName: PropTypes.string,
    options: PropTypes.array,
    selectedOptions: PropTypes.array,
    controlFunc: PropTypes.func
};

export default CheckboxOrRadioGroup;