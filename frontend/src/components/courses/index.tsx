import { useNavigate } from "react-router-dom";
import { CourseCardProps } from "../../interface";

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const navigate = useNavigate();
    const handleNavigate = (title: string, id: string) => {
        navigate(`/online-lectures/${encodeURIComponent(title.replace(/\s+/g, '-'))}`,
            { state: { courseId: id } });
    }

    // console.log(course?.lessons?.length, "hshshshsh")
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-500 rounded bg-white shadow-lg"
            onClick={() => handleNavigate(course?.courseName, course?.courseId)}>
            <img className="w-full h-48" src={course?.coverPhoto} alt={course?.courseName} />
            <div className="px-6 py-4 border-t-2	">
                <div className="font-bold text-black  mb-4 flex justify-between">{course?.courseName}  </div>
                <div className="flex items-center mb-4">
                    <img className="w-10 h-10 rounded-full mr-4 border border-gray-500" src={course?.authorPicture} alt="Author" />
                    <div className="text-sm">
                        <p className="text-black leading-none mb-2">{course?.authorName}</p> 
                        <p className="text-black leading-none mb-2"> Total Lesson ({course?.lessons?.length}) </p> 
                    </div>
                </div>

            </div>
        </div>
    );
};


export default CourseCard;