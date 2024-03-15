
import { useParams } from "react-router-dom";
import { Sidebar } from "../../../components";
import Layout from "../../../layout";


const CourseDetail: React.FC = () => {

  // const navigate = useNavigate();
  const param = useParams<{ title: string }>();
  const titleCourse = param.title;

  console.log(titleCourse)
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-800">
          <Layout>
            <div className="bg-white rounded-lg mx-10 mt-10">
              <h2 className="text-xl font-semibold  p-3 text-gray-800   mb-4 px-10">
                {titleCourse?.toLocaleUpperCase()}
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-8 m-10">
              {titleCourse
                // loading ?
                //     <CourseLoading count={6} />
                //     : course.length > 0 ? course.map((course, index) => <CourseCard key={index} course={course} />)
                //         : <div> <h1>No courses Found </h1></div>
              }
            </div>
          </Layout>
        </div>
      </div>
    </>
  )
}

export default CourseDetail;
