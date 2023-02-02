import {Component} from "react";
import {commentsRequest} from "../../../api/requests/CommentsRequest";
import {CommentCC} from "../../CommentCC/CommentCC";

export class CommentsClassComponents extends Component{

    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        commentsRequest.getAll().then(({data}) => this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {
                    this.state.comments.map(comment => <CommentCC key={comment.id} comment={comment}/>)
                }
            </div>
        )
    }
}