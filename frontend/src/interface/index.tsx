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
    last_name: string;
    email: string;
    rollNo: string;
    dept: string;
    phone: string;
    picture?: string;
    gender: string;
    address: string;
    password: string;
    confirmPassword: string;
}
  

export interface SigninFormValues {
    email: string;
    password: string;
}


export interface ForgetFormValues {
    email: string;
}


export interface SidebarProps {
    title: string;
}