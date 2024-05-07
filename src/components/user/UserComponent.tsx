import React, {FC} from "react";
import IUserModel from "../../models/IUserModel";
import {userInfo} from "node:os";

interface IProps {
    user: IUserModel;
}

type IPropsType = IProps & {children?: React.ReactNode} & {lift?:(userId: number) => void};

const UserComponent: FC<IPropsType> = ({user, lift}) => {
    const onClickHandler = () => {
        if (lift) {
            lift (user.id);
        }
    };
    return (
        <div className={'userBlock'}>
            <h3>{user.id} <br/>
            {user.firstName} {user.lastName} <br/>
            Age: {user.age} <br/>
                Gender: {user.gender} <br/>
                Phone: {user.phone} <br/>
                Username: {user.username}
        </h3>
            <div>
                <button onClick={onClickHandler}>Show posts of current user</button>
            </div>
        </div>
    );
};

export default UserComponent;