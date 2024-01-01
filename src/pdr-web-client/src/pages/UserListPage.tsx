import { Link } from "react-router-dom";
import { users } from "../data/users";
export function UserListPage() {
    return (
        <div className="col">
            <div className="row">
                <h2 className="text-xl font-bold text-slate-600">
                    Users
                </h2>
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
                                <tr key={user.id}>
                                    <td><Link to={`/users/edit/${user.id}`}>{user.id}</Link></td>
                                    <td>{user.username}</td>
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