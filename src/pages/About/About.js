import React, {Component} from 'react';
import './About.css'


function ListItem(props) {
    const colorStyle = {
        listStyle: 'none',
        backgroundColor: props.value,
        height: '50px',
        lineHeight: '50px'
    };
    return <li style={colorStyle}>{props.value}</li>;
}

function ColorLists(props) {
    const colors = props.colors;
    return (
        <div>
            {colors.map((number, index) =>
                <ListItem key={index} value={number} />
            )}
        </div>
    );
};

function UserGreeting(props) {
    if (props.isChange) {
        return <div>{props.content}</div>;
    }
    else {
        return null;
    }
}

function Blog(props) {
    const change = props.isTrue;
    const Sidebar = props.posts.map((post) =>
        <a key={post.id} id={post.id}  onClick={props.change}>
            <li>
                {post.title}
                <UserGreeting isChange={change} content={post.content}/>
            </li>
        </a>
    );

    return (
        <div>
            <ul>
                {Sidebar}
            </ul>
        </div>
    );
}

const posts = [
    {id: 1, title: 'One', content: 'Welcome One!'},
    {id: 2, title: 'Two', content: 'Welcome Two.'},
    {id: 3, title: 'Three', content: 'Welcome Three!'},
    {id: 4, title: 'Four', content: 'Welcome Four.'},
    {id: 5, title: 'Five', content: 'Welcome Five!'},
    {id: 6, title: 'Six', content: 'Welcome Six.'},
    {id: 7, title: 'Seven', content: 'Welcome Seven!'},
    {id: 8, title: 'Eight', content: 'Welcome Eight.'},
    {id: 9, title: 'Nine', content: 'Welcome Nine!'},
    {id: 10, title: 'Ten', content: 'Welcome Ten.'},
];

const colors = ['red', 'orange', 'yellow', 'purple', 'green', 'blue', '#1a498e', '#daa520'];

class About extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isTrue: false
        };
        this.change = this.change.bind(this);
    };

    change() {
        this.setState((prevState, props) => ({
            isTrue: !prevState.isTrue
        }));
    }

    render() {
        return (
            <div className="about">
                <div className="about-left">
                    <Blog posts={posts} isTrue={this.state.isTrue} change={this.change}/>
                </div>
                <div className="about-right">
                    <ColorLists colors={colors}/>
                </div>
            </div>
        );
    }
}

export default About;
