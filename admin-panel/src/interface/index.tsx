export interface ProtectedRouteProps {
    isAuth: boolean;
    children: any;
}

export interface SigninFormValues {
    email: string;
    password: string;
}

export interface TitleProps {
    title: string;
}








interface Lesson {
    chapterNo: number;
    title: string;
    description: string;
    videoPath: string;
    _id: string;
}


export interface CoursesData {
    authorName: string;
    authorDept: string;
    authorPicture: string;
    coverPhoto: string;
    lessons: Lesson[];
    createdAt: string;
    courseId: number;
    courseName: string;
}
