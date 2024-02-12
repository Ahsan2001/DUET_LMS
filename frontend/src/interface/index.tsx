export interface HeaderProps {
    title: string;
}

export interface FooterProps {
    title: string;
}


export interface LayoutProps {
    children: React.ReactNode;
}


export interface PrivateRouteProps {
    isAuth: boolean;
    children: any;
}


export interface SignupFormValues {
    first_name: string;
    last_username: string;
    email: string;
    rollNo: number;
    dept: string;
    phone: number;
    picture: string;
    gender: string;
    address: string;
    password: string;
    confirmPassword: string;
}
  

export interface SigninFormValues {
    email: string;
    password: string;
}
