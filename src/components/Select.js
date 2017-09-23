import React from 'react';
import PropTypes from 'prop-types'

const Select = (props) => (
    <div className="form-group">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}
            className="form-select">
            <option value="">{props.placeholder}</option>
            {props.options.map(opt => {
                return (
                    <option
                        key={opt}
                        value={opt}>{opt}</option>
                );
            })}
        </select>
    </div>
);

// Select.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     options: React.PropTypes.array.isRequired,
//     selectedOption: React.PropTypes.string,
//     controlFunc: React.PropTypes.func.isRequired,
//     placeholder: React.PropTypes.string
// };

Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    selectedOption: PropTypes.string,
    controlFunc: PropTypes.func,
    placeholder: PropTypes.string
};

export default Select;
