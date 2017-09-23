import React, {Component} from 'react';

function OptionsList(props) {

    return (
        <div>
            <label>
                <select value={props.initValue} onChange={props.optionChange}>
                    {
                        props.form.options.map((option) =>
                            <option value={option.optionName} key={option.id}>{option.optionName}</option>
                        )
                    }
                </select>
            </label>
        </div>
    );
};

const form = {
    options: [
        {id: 0, optionValue: 'Select', optionName: '请选择'},
        {id: 1, optionValue: 'Shanghai', optionName: '上海'},
        {id: 2, optionValue: 'Beijing', optionName: '北京'},
        {id: 3, optionValue: 'Tianjin', optionName: '天津'},
        {id: 4, optionValue: 'Xian', optionName: '西安'},
        {id: 5, optionValue: 'Chongqing', optionName: '重庆'},
        {id: 6, optionValue: 'Lanzhou', optionName: '兰州'},
        {id: 7, optionValue: 'Nanjing', optionName: '南京'},
        {id: 8, optionValue: 'Hangzhou', optionName: '杭州'},
        {id: 9, optionValue: 'Xuzhou', optionName: '徐州'},
        {id: 10, optionValue: 'Chengdu', optionName: '成都'}
    ],
    userName: '哈哈哈'

};

class UserSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: form.options[0].id,
            optionValue: form.options[0].optionValue,
            optionName: form.options[0].optionName,
            name: form.userName
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleSelectChange(e) {
        this.setState({
            optionName: e.target.value
        });
    }

    handleSubmit(e) {
        if (this.state.optionName !== '请选择') {
            alert(this.state.name + ', Your favorite flavor is: ' + this.state.optionName);
        }
        else {
            alert('Warning: ' + this.state.name + ', please select your favorite city');
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="user-left">
                <h3>UserName: {form.userName || this.props.params.name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <OptionsList form={form} optionChange={this.handleSelectChange} initValue={this.state.optionName}/>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default UserSelect;
