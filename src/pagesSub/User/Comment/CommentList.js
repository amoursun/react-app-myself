import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.clickItem = this.clickItem.bind(this); //方法三
    }

    clickItem() { //方法三需要这个函数方法
        this.props.close(this.props.id);
    }

    render () {
        const comment = this.props.comment;
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                    <span>{moment(comment.date).format('DD-MMM-YY HH:mm:ss')}</span>
                </div>
                <div className="comment-content">
                    {comment.content}
                </div>
                {/*(方法一)*/}
                {/*<span className="position" onClick={(e) => this.props.close(this.props.id)}><i>x</i></span>*/}
                {/*(方法二)*/}
                {/*<span className="position" onClick ={this.props.close.bind(this,this.props.id)}><i>x</i></span>*/}
                {/*(方法三)*/}
                <span className="position" onClick={this.clickItem}><i>x</i></span>
            </div>
        )
    }
}

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close(index) {
        if (this.props.onClose) {
            this.props.onClose({
                i: index
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} id={i} close={this.close}/>
                )}
            </div>
        )
    }
}

// class CommentList extends Component {
//     render() {
//         const comments = [
//             {username: 'Jerry', content: 'Hello'},
//             {username: 'Tomy', content: 'World'},
//             {username: 'Lucy', content: 'Good'}
//         ]
//
//         return (
//             <div>
//                 {comments.map((comment, i) => {
//                     return (
//                         <div key={i}>
//                             {comment.username}：{comment.content}
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CommentList;