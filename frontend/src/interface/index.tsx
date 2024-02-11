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
  