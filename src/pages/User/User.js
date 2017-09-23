import React, {Component} from 'react';
import './User.css'
import UserSelect from './../../pagesSub/User/UserSlect';
import CommentApp from './../../pagesSub/User/Comment/CommentApp';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="user">
                <UserSelect />
                <CommentApp />
            </div>
        );
    }
}

export default User;
