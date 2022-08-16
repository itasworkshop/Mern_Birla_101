import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function UserPage(props){

    const initialUserState = {
        user: {},
        loading:true,
    }

    const [user, setUser] = useState(initialUserState);

    useEffect(() => {
        const getUser = async() =>{
            const {data} = await axios('https://api.github.com/users/itasworkshop');

            //console.log("props ar "+props.params);
            //const {data} = await axios(`https://api.github.com/users/${props.match.params.id}`);
            setUser(data)
            console.log(user)
        }    

        getUser()
        console.log(user)
    },[]);


    return user.loading ? (
        <div>Loading ...</div>
    ):(
        <div className='container'>
            <h1>{user.id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Bio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}