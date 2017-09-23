import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
    firstName: 'Gan',
    lastName: 'Yanlin',
    description: 'is the most handsome'
};
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName + ' ' + user.description;
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function AppHeader(props) {
    return (
        <div className="AppHeader">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}

function Greet(props) {
    const isChange = props.isChange;
    if (isChange) {
        return (
            <div>
                <h1> Hello, {formatName(user)}!</h1>
                <Welcome name="this is first props"/>
                <Welcome name="this is second props"/>
                <Welcome name="this is third props"/>
                <Comment date={comment.date} text={comment.text} author={comment.author}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1> Hello, {formatName(user)}! + another</h1>
                <Welcome name="this is another first props"/>
                <Welcome name="this is another second props"/>
                <Welcome name="this is another third props"/>
                <Comment date={comment.date} text={comment.text + 'another'} author={comment.author}/>
            </div>
        );
    }
}

function Content(props) {
    return (
        <div>
            <h1>Hello, world! It is {props.date}</h1>
            <button onClick={props.clickMin}>点击 -</button>
            <input type="text" className="input" value={props.value}/>
            <button onClick={props.clickAdd}>点击 +</button>
            <button>{props.isToggle ? '加' : '减'}</button>
        </div>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0,
            isToggle: true
        };
        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    countUp() {
        this.setState((prevState, props) => ({
            count: ++prevState.count,
            isToggle: true
        }));
    }
    countDown() {
        this.setState((prevState, props) => ({
            count: --prevState.count,
            isToggle: false
        }));
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="App">
                <AppHeader/>
                <Content date={this.state.date.toLocaleTimeString()}
                         clickAdd={this.countUp}
                         clickMin={this.countDown}
                         value={this.state.count}
                         isToggle={this.state.isToggle}/>
                <Greet isChange={this.state.isToggle}/>
            </div>
        );
    }
}

export default App;
