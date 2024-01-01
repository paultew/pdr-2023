import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { users } from "../data/users";

type UserEditParams = {
    id: string
};

type UserEditModel = {
    username: string,
    email: string,
    password: string
};

export function UserEditPage() {
    const params = useParams<UserEditParams>();
    const id = params.id === undefined ? undefined : params.id;
    const existingUser = users.find((user) => user.id === id);
    const [user, setUser] = useState<UserEditModel>({
        username: existingUser?.username ?? "",
        email: existingUser?.email ?? "",
        password: ""
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className="col">
            {existingUser === undefined ? (
                <div className="alert alert-danger">
                    User not found!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="password" value={user.password} onChange={(e) => setUser({...user, email: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setUser({...user, password: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            )}
        </div>
    );
}