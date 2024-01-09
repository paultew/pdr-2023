import { useState } from "react";
import  { useNavigate } from 'react-router-dom';
import { GrpcUserService } from "../services/UserService";
import { UserCreateRequest } from "../generated/user";
import { SubmitHandler, useForm } from "react-hook-form";

type UserCreateModel = {
    username: string,
    email: string,
    password: string
};

function concatErrors(errors: string[] | undefined): string | undefined {
    if (errors && errors.length > 0) {
        return errors.join(" "); 
    }

    return undefined;
}

export function UserCreatePage() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitted },
      } = useForm<UserCreateModel>();
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const onSubmit: SubmitHandler<UserCreateModel> = (data) => {
        const userCreateRequest: UserCreateRequest = { userName: data.username, email: data.email, password: data.password };

        var userService = new GrpcUserService();
        userService.create(userCreateRequest).then((response) => {
            if (response.succeeded) {
                navigate("/users");
                return;
            }
            
            setFormSubmitted(true);
            let userNameError = concatErrors(response.errors?.userName);
            if (userNameError) {
                setError("username", { type: "manual", message: userNameError });
            }

            let emailError = concatErrors(response.errors?.email);
            if (emailError) {
                setError("email", { type: "manual", message: emailError });
            }

            let passwordError = concatErrors(response.errors?.password);
            if (passwordError) {
                setError("password", { type: "manual", message: passwordError });
            }
        })
        .catch((error) => {
            console.log(Object.assign({},error));
            setError("root.serverError", {
                type: "400",
                message: error
            });
        });
    };
    
    return (
        <div className="col">
            <div className="row">
                <div className="col">
                    <h1 className="text-slate-600">
                        Create User
                    </h1>
                </div>
            </div>
            {errors.root && (
            <div className="alert alert-danger" role="alert">
                {errors.root.message}
            </div>)}
            <form onSubmit={handleSubmit(onSubmit)} className={`
                ${ formSubmitted ? "was-validated" : "" }
            `}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" id="username" className={` ${errors.username ? "form-control is-invalid" : "form-control"} `} {...register("username", { required: true })} />
                        {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className={` ${errors.email ? "form-control is-invalid" : "form-control"} `} {...register("email", { required: true })} />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className={` ${errors.password ? "form-control is-invalid" : "form-control"} `} {...register("password", { required: true })} />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </fieldset>
            </form>
        </div>
    );
}