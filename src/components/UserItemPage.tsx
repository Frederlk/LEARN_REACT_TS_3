import { FC, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { IUser } from "../types/types";

// interface UserItemPageParams {
//     id: string;
// }

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>(
                "https://jsonplaceholder.typicode.com/users/" + params.id
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <Link to="/users" />
            <button>Back</button>
            <h1>Page of user {user?.name}</h1>
            <div>{user?.email}</div>
        </>
    );
};

export default UserItemPage;
