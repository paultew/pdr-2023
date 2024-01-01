/* eslint-disable */
import DataLoader from "dataloader";
import hash from "object-hash";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "user";

export interface EmptyRequest {
}

export interface EmptyReply {
}

export interface UserCreateRequest {
  userName: string;
  email: string;
  password: string;
}

export interface UserCreateReply {
  succeeded: boolean;
  errors: string[];
  user: UserReply | undefined;
}

export interface UserFindRequest {
  userId: string;
}

export interface UserReply {
  userId: string;
  userName: string;
  email: string;
}

export interface UsersReply {
  users: UserReply[];
}

export interface UserUpdateRequest {
  userId: string;
  userName: string;
  email: string;
  password: string;
}

function createBaseEmptyRequest(): EmptyRequest {
  return {};
}

export const EmptyRequest = {
  encode(_: EmptyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EmptyRequest {
    return {};
  },

  toJSON(_: EmptyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EmptyRequest>, I>>(base?: I): EmptyRequest {
    return EmptyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmptyRequest>, I>>(_: I): EmptyRequest {
    const message = createBaseEmptyRequest();
    return message;
  },
};

function createBaseEmptyReply(): EmptyReply {
  return {};
}

export const EmptyReply = {
  encode(_: EmptyReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EmptyReply {
    return {};
  },

  toJSON(_: EmptyReply): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EmptyReply>, I>>(base?: I): EmptyReply {
    return EmptyReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmptyReply>, I>>(_: I): EmptyReply {
    const message = createBaseEmptyReply();
    return message;
  },
};

function createBaseUserCreateRequest(): UserCreateRequest {
  return { userName: "", email: "", password: "" };
}

export const UserCreateRequest = {
  encode(message: UserCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateRequest {
    return {
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: UserCreateRequest): unknown {
    const obj: any = {};
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserCreateRequest>, I>>(base?: I): UserCreateRequest {
    return UserCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserCreateRequest>, I>>(object: I): UserCreateRequest {
    const message = createBaseUserCreateRequest();
    message.userName = object.userName ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseUserCreateReply(): UserCreateReply {
  return { succeeded: false, errors: [], user: undefined };
}

export const UserCreateReply = {
  encode(message: UserCreateReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.succeeded === true) {
      writer.uint32(8).bool(message.succeeded);
    }
    for (const v of message.errors) {
      writer.uint32(18).string(v!);
    }
    if (message.user !== undefined) {
      UserReply.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.succeeded = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errors.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = UserReply.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateReply {
    return {
      succeeded: isSet(object.succeeded) ? globalThis.Boolean(object.succeeded) : false,
      errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e: any) => globalThis.String(e)) : [],
      user: isSet(object.user) ? UserReply.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: UserCreateReply): unknown {
    const obj: any = {};
    if (message.succeeded === true) {
      obj.succeeded = message.succeeded;
    }
    if (message.errors?.length) {
      obj.errors = message.errors;
    }
    if (message.user !== undefined) {
      obj.user = UserReply.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserCreateReply>, I>>(base?: I): UserCreateReply {
    return UserCreateReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserCreateReply>, I>>(object: I): UserCreateReply {
    const message = createBaseUserCreateReply();
    message.succeeded = object.succeeded ?? false;
    message.errors = object.errors?.map((e) => e) || [];
    message.user = (object.user !== undefined && object.user !== null) ? UserReply.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUserFindRequest(): UserFindRequest {
  return { userId: "" };
}

export const UserFindRequest = {
  encode(message: UserFindRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: UserFindRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindRequest>, I>>(base?: I): UserFindRequest {
    return UserFindRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindRequest>, I>>(object: I): UserFindRequest {
    const message = createBaseUserFindRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseUserReply(): UserReply {
  return { userId: "", userName: "", email: "" };
}

export const UserReply = {
  encode(message: UserReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserReply {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
    };
  },

  toJSON(message: UserReply): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserReply>, I>>(base?: I): UserReply {
    return UserReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserReply>, I>>(object: I): UserReply {
    const message = createBaseUserReply();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUsersReply(): UsersReply {
  return { users: [] };
}

export const UsersReply = {
  encode(message: UsersReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      UserReply.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsersReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(UserReply.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UsersReply {
    return {
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => UserReply.fromJSON(e)) : [],
    };
  },

  toJSON(message: UsersReply): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => UserReply.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UsersReply>, I>>(base?: I): UsersReply {
    return UsersReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UsersReply>, I>>(object: I): UsersReply {
    const message = createBaseUsersReply();
    message.users = object.users?.map((e) => UserReply.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserUpdateRequest(): UserUpdateRequest {
  return { userId: "", userName: "", email: "", password: "" };
}

export const UserUpdateRequest = {
  encode(message: UserUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateRequest {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: UserUpdateRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUpdateRequest>, I>>(base?: I): UserUpdateRequest {
    return UserUpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUpdateRequest>, I>>(object: I): UserUpdateRequest {
    const message = createBaseUserUpdateRequest();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

export interface Users<Context extends DataLoaders> {
  GetAll(ctx: Context, request: EmptyRequest): Promise<UsersReply>;
  GetById(ctx: Context, request: UserFindRequest): Promise<UserReply>;
  Create(ctx: Context, request: UserCreateRequest): Promise<UserCreateReply>;
  Update(ctx: Context, request: UserUpdateRequest): Promise<UserReply>;
  Delete(ctx: Context, request: UserFindRequest): Promise<EmptyReply>;
}

export const UsersServiceName = "user.Users";
export class UsersClientImpl<Context extends DataLoaders> implements Users<Context> {
  private readonly rpc: Rpc<Context>;
  private readonly service: string;
  constructor(rpc: Rpc<Context>, opts?: { service?: string }) {
    this.service = opts?.service || UsersServiceName;
    this.rpc = rpc;
    this.GetAll = this.GetAll.bind(this);
    this.GetById = this.GetById.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetAll(ctx: Context, request: EmptyRequest): Promise<UsersReply> {
    const dl = ctx.getDataLoader("user.Users.GetAll", () => {
      return new DataLoader<EmptyRequest, UsersReply, string>((requests) => {
        const responses = requests.map(async (request) => {
          const data = EmptyRequest.encode(request).finish();
          const response = await this.rpc.request(ctx, "user.Users", "GetAll", data);
          return UsersReply.decode(_m0.Reader.create(response));
        });
        return Promise.all(responses);
      }, { cacheKeyFn: hash, ...ctx.rpcDataLoaderOptions });
    });
    return dl.load(request);
  }

  GetById(ctx: Context, request: UserFindRequest): Promise<UserReply> {
    const dl = ctx.getDataLoader("user.Users.GetById", () => {
      return new DataLoader<UserFindRequest, UserReply, string>((requests) => {
        const responses = requests.map(async (request) => {
          const data = UserFindRequest.encode(request).finish();
          const response = await this.rpc.request(ctx, "user.Users", "GetById", data);
          return UserReply.decode(_m0.Reader.create(response));
        });
        return Promise.all(responses);
      }, { cacheKeyFn: hash, ...ctx.rpcDataLoaderOptions });
    });
    return dl.load(request);
  }

  Create(ctx: Context, request: UserCreateRequest): Promise<UserCreateReply> {
    const data = UserCreateRequest.encode(request).finish();
    const promise = this.rpc.request(ctx, this.service, "Create", data);
    return promise.then((data) => UserCreateReply.decode(_m0.Reader.create(data)));
  }

  Update(ctx: Context, request: UserUpdateRequest): Promise<UserReply> {
    const data = UserUpdateRequest.encode(request).finish();
    const promise = this.rpc.request(ctx, this.service, "Update", data);
    return promise.then((data) => UserReply.decode(_m0.Reader.create(data)));
  }

  Delete(ctx: Context, request: UserFindRequest): Promise<EmptyReply> {
    const data = UserFindRequest.encode(request).finish();
    const promise = this.rpc.request(ctx, this.service, "Delete", data);
    return promise.then((data) => EmptyReply.decode(_m0.Reader.create(data)));
  }
}

interface Rpc<Context> {
  request(ctx: Context, service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
