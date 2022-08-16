import { Component } from "react";
import UserContext, { UserConsumer } from "./UserContext";


class HomePage extends Component{
    static contextType = UserContext

    componentDidMount(){
        const user = this.context

        console.log(user);
    }

    render(){
        return(
            <UserConsumer>
                {(props) => {
                    return <div>{props.name}</div>
                }}
            </UserConsumer>
        )
    }
}

export default HomePage