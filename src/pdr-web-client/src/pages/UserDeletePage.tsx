import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { GrpcUserService } from "../services/UserService";

type UserDeleteParams = {
    id: string
};

type UserDeleteModel = {
    userId: string,
    userName: string
};

function concatErrors(errors: string[] | undefined): string | undefined {
    if (errors && errors.length > 0) {
        return errors.join(" "); 
    }

    return undefined;
}

export function UserDeletePage() {
    let userId = "";

    const params = useParams<UserDeleteParams>();
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
        getValues,
        formState: { errors, isSubmitted },
      } = useForm<UserDeleteModel>();

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
                            userId: response.userId,
                            userName: response.userName
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
    
    const onSubmit: SubmitHandler<UserDeleteModel> = (data) => {
        userService.delete(data.userId).then((response) => {
            if (response.succeeded) {
                navigate("/users");
                return;
            }

            const combinedErrors = concatErrors(response.errors);
            setError("root.serverError", {
                message: combinedErrors
            });
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

    return (
        <div className="col">
            <div className="row">
                <div className="col">
                    <h1 className="text-slate-600">
                        Update User
                    </h1>
                </div>
                {errors.root && (
                <div className="alert alert-danger" role="alert">
                    {errors.root.message}
                </div>)}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <input type="hidden" id="userId" {...register("userId", { required: true })} />
                        <div className="alert alert-danger" role="alert">
                            Are you sure you wish to delete user {getValues("userName")}?
                        </div>
                        <button type="submit" className="btn btn-primary">Delete</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}