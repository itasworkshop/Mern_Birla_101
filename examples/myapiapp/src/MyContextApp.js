import HomePage from "./MyContextHomePage"
import { UserProvider } from "./UserContext"


function App(){
    const user ={name:'Rajesh',loggedIn:true}

    return(
        <UserProvider value={user}>
            <HomePage />
        </UserProvider>
    )
}

export default App