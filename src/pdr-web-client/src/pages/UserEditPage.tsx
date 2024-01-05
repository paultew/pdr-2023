import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { users } from "../data/users";

type UserEditParams = {
    id: string
};

type UserEditModel = {
    username: string,
    email: string,
    oldPassword: string,
    newPassword: string
};

export function UserEditPage() {
    const params = useParams<UserEditParams>();
    const id = params.id === undefined ? undefined : params.id;
    const existingUser = users.find((user) => user.id === id);
    const [user, setUser] = useState<UserEditModel>({
        username: existingUser?.username ?? "",
        email: existingUser?.email ?? "",
        oldPassword: "",
        newPassword: ""
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
                    <fieldset>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" id="username" className="form-control" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="oldPassword" className="form-label">Old Password</label>
                            <input type="password" id="oldPassword" className="form-control" onChange={(e) => setUser({...user, oldPassword: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" id="newPassword" className="form-control" onChange={(e) => setUser({...user, newPassword: e.target.value})} />
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </fieldset>
                </form>
            )}
        </div>
    );
}