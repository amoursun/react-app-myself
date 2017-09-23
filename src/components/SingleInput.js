import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
    <div className="form-group">
        <label className="form-label">{props.title}</label>
        <input
            className="form-input"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder} />
    </div>
);

// React 15.0 已经放弃使用React.PropTypes, 改为引入prop-types, 使用PropTypes.string
// SingleInput.propTypes = {
//     inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
//     title: React.PropTypes.string.isRequired,
//     name: React.PropTypes.string.isRequired,
//     controlFunc: React.PropTypes.func.isRequired,
//     content: React.PropTypes.oneOfType([
//         React.PropTypes.string,
//         React.PropTypes.number,
//     ]).isRequired,
//     placeholder: React.PropTypes.string
// };

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']),
    title: PropTypes.string,
    name: PropTypes.string,
    controlFunc: PropTypes.func,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    placeholder: PropTypes.string
};

export default SingleInput;