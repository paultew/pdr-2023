import { Link } from "react-router-dom";
import { users } from "../data/users";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { UsersClient } from "../generated/user.client";
import { EmptyRequest, UserReply } from "../generated/user";
import {default as fetch, Headers} from "node-fetch";

export function UserListPage() {
    let userList = new Array<UserReply>();

    // fetch polyfill via https://github.com/node-fetch/node-fetch
    globalThis.fetch = fetch as any;
    globalThis.Headers = Headers as any;

    let transport = new GrpcWebFetchTransport({
        baseUrl: "https://localhost:7024",
        fetchInit: { mode: "cors" }
    });
    /*mode: "cors" */

    let request = EmptyRequest.fromJson({});
    let client = new UsersClient(transport);
    //const enableDevTools = (window as any).__GRPCWEB_DEVTOOLS__;
    //enableDevTools([
    //  client,
    //]);

    client.getAll(request).then((response) => {
        userList = response.response.users
    }).catch((error) => {
        console.log(error);
    });

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
                            {userList.map((user) => (
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