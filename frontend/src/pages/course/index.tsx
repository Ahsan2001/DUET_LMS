
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../../components";
import Layout from "../../layout";
import { useEffect, useState } from "react";
import { GetDetailCoursesApi } from "../../api";
import styles from "./styles.module.css";
import { formatDate } from "../../utils/format-date";
import moment from "moment"

const CourseDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const { courseId } = location.state;



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


  const navigate = useNavigate();
  const handleNavigate = (pageTitle: string, id: string) => {
    navigate(`/online-lectures/${title}/${encodeURIComponent(pageTitle.replace(/\s+/g, '-'))}`,
    { state: { 
        courseId: id,
        pageTitle:title }
    });
  }

  // console.log(course, "course")


  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-800">
          <Layout>
            <div className="bg-white rounded-lg mx-10 mt-10 flex justify-between item-center">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <Link to="/online-lectures" className="ms-10 inline-flex items-center text-gray-400 hover:text-primary text-sm font-semibold">
                       ONLINE LECTURES
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <span className="text-sm font-semibold p-2 text-gray-800  ">{title?.toLocaleUpperCase()}</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h2 className="text-md font-semibold  p-2 text-gray-800  px-10">
                <span className="text-primary text-sm">Created on</span>  {formatDate(course?.createdAt)}
              </h2>
            </div>
            <div className="grid sm:grid-cols-12 gap-8 m-10">
              <div className="sm:col-span-12">
                {
                  course?.lessons?.map((element: any, index: any) => {
                    console.log(element)
                    return (
                      <div key={index} className={styles.courses_list} >
                        <h2 className="text-white cursor-pointer" onClick={() => handleNavigate(element?.title, element?._id)}>
                          <span>Lecture # {element?.chapterNo}</span>
                          {element.title.toLocaleUpperCase()}

                          <span className="text-gray-400 text-align-right float-right" >{moment(element?.createdAt).fromNow()}</span>
                        </h2>
                      </div>
                    )
                  })
                }
              </div>
            
            </div>
          </Layout>
        </div>
      </div>
    </>
  )
}

export default CourseDetail;
