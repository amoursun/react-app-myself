import React, {Component} from 'react';



function ListItem(props) {
    return <li onClick={props.changeItem(props.initId)}>{props.value}</li>
};

class GuidanceLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'one'
        };
        this.handleListItemChange = this.handleListItemChange.bind(this);
    };

    handleListItemChange() {
        // this.setState((prevState, props) => ({
        //     id: props.id
        // }))
    }

    render() {
        return (
            <ul className="side-ul">
                {names.map((name) =>
                    <ListItem key={name.id}
                              id={name.id}
                              initId={this.state.id}
                              value={name.name}
                              changeItem={this.handleListItemChange}/>
                )}
            </ul>
        )
    }
}

const names = [
    {name: 'Refs & DOM', id: 'one'},
    {name: '非受控组件', id: 'two'},
    {name: '性能优化', id: 'three'},
    {name: 'Reconciliation', id: 'four'},
    {name: 'Context', id: 'five'},
    {name: 'Web Components', id: 'six'},
    {name: '高阶组件', id: 'seven'},
    {name: '与第三方库协同', id: 'eight'},
    {name: '可访问性', id: 'nine'}
];

class SeniorGuidance extends Component {
    render() {
        return(
            <div className="side-nav">
                <h3>高级指引</h3>
                <GuidanceLists />
            </div>
        )
    }
}

export default SeniorGuidance;


