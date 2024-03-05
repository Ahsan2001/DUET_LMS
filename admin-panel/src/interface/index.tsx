export interface ProtectedRouteProps {
    isAuth: boolean;
    children: any;
}

export interface SigninFormValues {
    email: string;
    password: string;
}