import { TitleProps } from "../interface";

export const PageTitle: React.FC<TitleProps> = (props) => {
    document.title = props.title;
    return null;
};
