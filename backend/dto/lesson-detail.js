class LessonDetailDTO {
    constructor(course){
        this.createdAt = course?.createdAt;
        this.courseId = course?._id;
        this.authorName = course?.author?.first_name + " " + course?.author?.last_name;
        this.authorDept = course?.author?.dept;
        this.authorEmail = course?.author?.email;
        this.authorPicture = course?.author?.picture;
        this.courseName = course?.courseName;
        this.coverPhoto = course?.coverPhoto;
        this.lessons= course?.lessons;
    }
}

export default LessonDetailDTO;

