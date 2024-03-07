class CourseDTO {
    constructor(course){
        this.author = course.author;
        this.coverPhoto = course.coverPhoto;
        this.lessons = course.lessons
        this.createdAt = course.createdAt;
        this.courseId = course._id;
        this.courseName = course.courseName
    }
}

export default CourseDTO;

