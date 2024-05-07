import React, {FC, useEffect, useState } from "react";
import IUserModel from "../../models/IUserModel";
import UserComponent from "../user/UserComponent";
import {getAllUsers} from "../../services/userService/user.api.service";

type IPropsType = {lift:(userId:number) => void}

const UsersComponent:FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        // @ts-ignore
        getAllUsers().then(({data}) => setUsers(data.users));
    }, []);

    return(
        <div>
            {users?.map((user) => (<UserComponent key={user.id} user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent;