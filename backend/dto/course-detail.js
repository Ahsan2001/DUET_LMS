class CourseDetailDTO {
    constructor(course){
        this.title = course.title;
        this.description = course.description;
        this.videoPath = course.videoPath;
        this.coverPhoto = course.coverPhoto;
        this.createdAt = course.createdAt;
        this.courseId = course._id;
        this.authorName = course.author.first_name + " " + course.author.last_name;
        this.authorDept = course.author.dept;
        this.authorPicture = course.author.picture;

    }
}

export default CourseDetailDTO;

