import React, {Component} from 'react';


class ContentLists extends Component {
    render() {
        return(
            <div className="nav-item">
                哈哈哈哈哈哈哈哈哈哈哈哈(2333333333333333333)
            </div>
        )
    }
}

class GuidanceContent extends Component {
    render() {
        return(
            <div className="nav-content">
                <h2>高级指引内容</h2>
                <ContentLists />
            </div>
        )
    }
}

export default GuidanceContent;