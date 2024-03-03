class CourseDTO {
    constructor(course){
        this.title = course.title;
        this.description = course.description;
        this.videoPath = course.videoPath;
        this.author = course.author;
        this.coverPhoto = course.coverPhoto;
        this.createdAt = course.createdAt;
        this.courseId = course._id;
    }
}

export default CourseDTO;

