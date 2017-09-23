import React, {Component} from 'react';
import './../../../node_modules/spectre.css/dist/spectre.min.css';
import './Contacts.css';
import FormContainer from "./../../containers/FormContainer";

class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <h1>React表单提交</h1>
                <FormContainer/>
            </div>
        );
    }
}

export default Contacts;
