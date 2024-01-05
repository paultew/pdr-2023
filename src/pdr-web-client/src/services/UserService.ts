import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { default as fetch, Headers} from "node-fetch";
import { EmptyRequest, UserCreateReply, UserCreateRequest, UserReply } from "../generated/user";
import { UsersClient } from "../generated/user.client";

interface UserService {
    create(userCreateRequest: UserCreateRequest): Promise<UserCreateReply>;
    getAll(): Promise<UserReply[]>;
}

export class GrpcUserService implements UserService {
    transport: GrpcWebFetchTransport;
    client: UsersClient;
    
    constructor() {
        // fetch polyfill via https://github.com/node-fetch/node-fetch
        globalThis.fetch = fetch as any;
        globalThis.Headers = Headers as any;

        this.transport = new GrpcWebFetchTransport({
            baseUrl: (process.env.REACT_APP_API_BASE_URL as string),
            fetchInit: { mode: "cors" }
        });

        this.client = new UsersClient(this.transport);
    }
    
    create(userCreateRequest: UserCreateRequest): Promise<UserCreateReply> {
        return new Promise((resolve,reject) => {
            this.client.create(userCreateRequest).then((response) => {
                resolve(response.response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    getAll(): Promise<UserReply[]> {
        return new Promise((resolve, reject) => {
            let request = EmptyRequest.fromJson({});
            this.client.getAll(request).then((response) => {
                resolve(response.response.users);
            }).catch((error) => {
                reject(error);
            });
        });
    }

}