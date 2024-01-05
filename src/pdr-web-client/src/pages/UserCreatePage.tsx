import { FormEvent, useState } from "react";

type UserCreateModel = {
    username: string,
    email: string,
    password: string
};

export function UserCreatePage() {
    let validationMessages = new Array<string>();
    const [user, setUser] = useState<UserCreateModel>({
        username: "",
        email: "",
        password: ""
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    
    return (
        <div className="col">
            {validationMessages.length > 0 && (
            <div className="alert alert-danger" role="alert">
                {validationMessages.map((message) => (
                    <p>{message}</p>
                ))}
            </div>)}
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
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control" onChange={(e) => setUser({...user, password: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </fieldset>
            </form>
        </div>
    );
}