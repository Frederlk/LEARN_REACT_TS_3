import { FC, useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import EventsExample from "./EventsExample";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <EventsExample />
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem onClick={() => navigate(`/users/${user.id}`)} user={user} key={user.id} />
                )}
            />
            ;
        </>
    );
};

export default UserPage;
