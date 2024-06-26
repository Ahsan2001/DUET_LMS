
import { Link, useLocation, useParams } from "react-router-dom";
import { Sidebar } from "../../components";
import Layout from "../../layout";
import { useEffect, useState } from "react";
import { GetLectureDetailCoursesApi } from "../../api";
import styles from "./styles.module.css";
import { titleCase } from "../../utils/title-case";
import ReactPlayer from 'react-player/youtube'

const CourseLectureDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const { courseId, pageTitle } = location.state;
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<any>([]);


  async function FetchCourses() {
    setLoading(true)
    try {
      let lessonResponse: any = await GetLectureDetailCoursesApi(courseId);
      console.log(lessonResponse)
      if (lessonResponse.status === 200) {
        setCourse(lessonResponse?.data?.data)
        setLoading(false)
      } else {
        alert("something went wrong please check console")
        console.log(lessonResponse)
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


  function handleMessage() {
    window.alert("Message Module is not completed yet")
  }



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

                  <li className="inline-flex items-center">
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <div className="ms-3 inline-flex items-center text-gray-400 hover:text-primary text-sm font-semibold">
                        {pageTitle?.toLocaleUpperCase()}
                      </div>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <span className="text-sm font-semibold p-2 text-gray-800">{title?.toLocaleUpperCase()}</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="grid sm:grid-cols-12 gap-8 m-10">
              <div className="sm:col-span-9">
                {
                  (course?.lessons?.map((element: any, index: any) => {
                    return (
                      <div key={index}>
                        <div className="mt-10">
                          <ReactPlayer url={element?.videoPath} width="100%" />
                        </div>
                        <div className={` ${styles.course_list} w-full mt-6`}>
                          <h5 className="text-white ">{element.title}</h5>
                          <p>{element.description}</p>
                        </div>
                      </div>
                    )
                  }))}
           

              </div>
              <div className="sm:col-span-3">
                <div className={styles.custom_right_wrapper}>
                  <img src={course?.authorPicture} alt={course?.authorName} />
                  <div className={styles.innerContent}>
                    <p>  {titleCase(course?.authorName)}</p>
                    <button onClick={handleMessage}>Send Message</button>
                  </div>
                </div>
              </div>
            </div >
          </Layout>
        </div>
      </div>
    </>
  )
}

export default CourseLectureDetail;
