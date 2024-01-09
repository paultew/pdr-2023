import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { GrpcUserService } from "../services/UserService";
import { UserUpdateRequest } from "../generated/user";

type UserEditParams = {
    id: string
};

type UserEditModel = {
    username: string,
    email: string,
    oldPassword: string,
    newPassword: string
};

function concatErrors(errors: string[] | undefined): string | undefined {
    if (errors && errors.length > 0) {
        return errors.join(" "); 
    }

    return undefined;
}

export function UserEditPage() {
    let userId = "";

    const params = useParams<UserEditParams>();
    if (params.id) {
        userId = params.id;
    }

    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitted },
      } = useForm<UserEditModel>();
    const [formSubmitted, setFormSubmitted] = useState(false);

    var userService = new GrpcUserService();

    let userFound = false;
    useEffect(() => {
        let cancel = false;

        if (userId) {
            userService.getById(userId).then((response) => {
                if (!cancel) {
                    if (response) {
                        userFound = true;
                        reset({
                            username: response.userName,
                            email: response.email,
                            oldPassword: "",
                            newPassword: ""
                        });
                        setIsLoading(false);
                    }
                }
            })
            .catch((error) => {
                console.log(Object.assign({},error));
                setError("root.serverError", {
                    type: "400",
                    message: error
                });
            });
            }

        return () => {
            cancel = true;
        }
    }, []);
    
    const onSubmit: SubmitHandler<UserEditModel> = (data) => {
        const userUpdateRequest: UserUpdateRequest = { userId: userId, userName: data.username, email: data.email, oldPassword: data.oldPassword, newPassword: data.newPassword };

        userService.update(userUpdateRequest).then((response) => {
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

            let oldPasswordError = concatErrors(response.errors?.oldPassword);
            if (oldPasswordError) {
                setError("oldPassword", { type: "manual", message: oldPasswordError });
            }

            let newPasswordError = concatErrors(response.errors?.newPassword);
            if (newPasswordError) {
                setError("newPassword", { type: "manual", message: newPasswordError });
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

    if (isLoading) {
        return (
            <div className="w-96 mx-auto mt-6">
                Loading...
            </div>
        );
    }

    if (userFound) {
        return (
            <div className="col">
                <div className="alert alert-danger">
                    User not found!
                </div>
            </div>
        );
    }

    return (
        <div className="col">
            <div className="row">
                <div className="col">
                    <h1 className="text-slate-600">
                        Update User
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
                        <input type="email" id="email" className={` ${errors.username ? "form-control is-invalid" : "form-control"} `} {...register("email", { required: true })} />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="oldPassword" className="form-label">Old Password</label>
                        <input type="password" id="oldPassword" className={` ${errors.oldPassword ? "form-control is-invalid" : "form-control"} `} {...register("oldPassword", { required: false })} />
                        {errors.oldPassword && <div className="invalid-feedback">{errors.oldPassword.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" id="newPassword" className={` ${errors.newPassword ? "form-control is-invalid" : "form-control"} `} {...register("newPassword", { required: false })} />
                        {errors.newPassword && <div className="invalid-feedback">{errors.newPassword.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </fieldset>
            </form>
        </div>
    );
}