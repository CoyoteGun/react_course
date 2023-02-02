import {Component} from "react";

export class UserCC extends Component{

    render() {
        const {id, name, username} = this.props.user;
        return(
            <div>
                <h2>{id}</h2>
                <p>{name} - {username}</p>
            </div>
        )
    }
}