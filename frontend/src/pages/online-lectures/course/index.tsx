
import { useLocation, useParams } from "react-router-dom";
import { Sidebar } from "../../../components";
import Layout from "../../../layout";
import { useEffect, useState } from "react";
import { GetDetailCoursesApi } from "../../../api";


const CourseDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const { courseId } = location.state;
  console.log(courseId, "id")


  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<any>([]);

  async function FetchCourses() {
    setLoading(true)
    try {
      let response: any = await GetDetailCoursesApi(courseId);
      if (response.status === 200) {
        setCourse(response?.data?.coursedetails)
        setLoading(false)
      } else {
        alert("something went wrong please check console")
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    FetchCourses()
    return () => {
      setCourse([])
    }
  }, [])



  console.log(course, "course")


  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-800">
          <Layout>
            <div className="bg-white rounded-lg mx-10 mt-10">
              <h2 className="text-xl font-semibold  p-3 text-gray-800   mb-4 px-10">
                {title?.toLocaleUpperCase()}
              </h2>
            </div>
            <div className="grid sm:grid-cols-12 gap-8 m-10">
              <div className="sm:col-span-8">

                {
                  course?.lessons?.map((element:any,index: any)=>{
                    console.log(element)
                    return(
                     <div key={index}>
                        <h2 className="text-white">{element.title}</h2>
                     </div> 
                    )
                  })
                }
                {/* Content for column 1 (full width on small screens, 8 columns on medium screens and above) */}
              </div>
              <div className="sm:col-span-4">
                <div className="border border-gray-500 rounded shadow-lg text-center">
                  <img className="w-48 h-48" src={course?.authorPicture} alt={course?.authorName} />
                  <div className="px-6 py-4">
                    <div className="flex items-center mb-4">
                      <div className="text-sm">
                        <p className="text-white leading-none mb-2">Teacher {course?.authorName}</p>
                        <p className="text-white leading-none mb-2">Department of {course?.authorDept}</p>
                        <p className="text-white leading-none mb-2">Total Lessons {course?.lessons?.length}</p>
                        <p className="text-white leading-none mb-2">Created on {course?.createdAt}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content for column 2 (full width on small screens, 4 columns on medium screens and above) */}
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </>
  )
}

export default CourseDetail;
