import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserReply } from "../generated/user";
import { GrpcUserService } from "../services/UserService";

export function UserListPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<UserReply[]>([]);

    useEffect(() => {
        let cancel = false;

        var userService = new GrpcUserService();
        userService.getAll().then((userList) => {
            if (!cancel) {
                setUsers(userList);
                setIsLoading(false);
            }
        })
        .catch((error) => {
            console.log(error);
        });

        return () => {
            cancel = true;
        }

    }, []);

    if (isLoading) {
        return (
            <div className="w-96 mx-auto mt-6">
                Loading...
            </div>
        );
    }

    return (
        <div className="col">
            <div className="row">
                <div className="col-lg-auto my-auto">
                    <h2 className="text-slate-600 pr-5">
                        Users
                    </h2>
                </div>
                <div className="col my-auto">
                    <Link to='/users/create' className="btn btn-primary">Create</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.userId}>
                                    <td><Link to={`/users/edit/${user.userId}`}>{user.userId}</Link></td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}