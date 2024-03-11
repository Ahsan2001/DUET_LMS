class CourseDTO {
    constructor(course){
        this.authorName = course.author.first_name + " " + course.author.last_name;
        this.authorDept = course.author.dept;
        this.authorPicture = course.author.picture;
        this.author = course.author;
        this.coverPhoto = course.coverPhoto;
        this.lessons = course.lessons
        this.createdAt = course.createdAt;
        this.courseId = course._id;
        this.courseName = course.courseName
    }
}

export default CourseDTO;

