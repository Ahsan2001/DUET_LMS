class CourseDTO {
    constructor(course){
        this.title = course.title;
        this.description = course.description;
        this.videoPath = course.videoPath;
        this.author = course.author;
        this.coverPhoto = course.coverImage;
    }
}

export default CourseDTO;

