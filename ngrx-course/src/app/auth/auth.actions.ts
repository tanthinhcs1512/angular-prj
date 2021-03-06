import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
    "[Login Page] User Login",
    props<{user: User}>()
);

export const logout = createAction(
    "[Logout Page] User Logout",
);

// export const newLoginAction = login({user: User});