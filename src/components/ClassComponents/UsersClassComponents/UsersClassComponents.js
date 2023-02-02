import {Component} from "react";
import {usersRequest} from "../../../api/requests/UsersRequest";
import {UserCC} from "../../UserCC/UserCC";


export class UsersClassComponents extends Component {

    constructor (props) {
        super (props);
        this.state = {users:[]}
    }

    componentDidMount() {
        usersRequest.getAll().then(({data}) => this.setState({users:[...data]}))
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <UserCC key={user.id} user={user}/>)}
            </div>
        )
    }
}



