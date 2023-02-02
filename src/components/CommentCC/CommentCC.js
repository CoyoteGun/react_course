import {Component} from "react";

export class CommentCC extends Component{

    render() {
        const {id, email} = this.props.comment;
        return(
            <div>
                <div>
                    {id}, {email}
                </div>
            </div>
        )
    }
}