
import { useLocation, useParams } from "react-router-dom";
import { Sidebar } from "../../components";
import Layout from "../../layout";
import { useEffect, useState } from "react";
import { GetLectureDetailCoursesApi } from "../../api";
import styles from "./styles.module.css";
import { titleCase } from "../../utils/title-case";
import { formatDate } from "../../utils/format-date";


const CourseLectureDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const { courseId } = location.state;
  console.log(courseId, "id")

  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<any>([]);

  async function FetchCourses() {
    setLoading(true)
    try {
      let response: any = await GetLectureDetailCoursesApi(courseId);
      console.log(response?.data)

      if (response.status === 200) {
        setCourse(response?.data)
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

  function handleMessage() {
    window.alert("Message Module is not completed yet")
  }

  console.log(course, "course")
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-800">
          <Layout>
            <h2>{title}</h2>
            <div className="bg-white rounded-lg mx-10 mt-10 flex justify-between item-center">
              {/* <h2 className="text-xl font-semibold  p-3 text-gray-800    px-10">
                {title?.toLocaleUpperCase()}
              </h2>
              <h2 className="text-md font-semibold  p-3 text-gray-800    px-10">
                <span className="text-primary">Created on</span>  {formatDate(course?.createdAt)}
              </h2> */}
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a href="#" className="inline-flex text-xl font-semibold  p-3 text-gray-800 items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                      <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <a href="#" className="text-xl font-semibold  p-3 text-gray-800 ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-primary">Projects</a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <span className="ms-1 text-xl font-semibold  p-3 text-gray-800 text-sm font-medium text-gray-500 md:ms-2 dark:text-primary">Flowbite</span>
                    </div>
                  </li>
                </ol>
              </nav>

            </div>
            <div className="grid sm:grid-cols-12 gap-8 m-10">
              <div className="sm:col-span-9">

                {
                  course?.lessons?.map((element: any, index: any) => {
                    console.log(element)
                    return (
                      <div key={index} className={styles.courses_list}>
                        <h2 className="text-white">
                          <span>Lecture # {element?.chapterNo}</span>
                          {element.title.toLocaleUpperCase()}
                        </h2>
                      </div>
                    )
                  })
                }
              </div>
              <div className="sm:col-span-3">
                <div className={styles.custom_right_wrapper}>
                  <img src={course?.authorPicture} alt={course?.authorName} />
                  <div className={styles.innerContent}>
                    <p>Teacher: <span> {titleCase(course?.authorName)}</span></p>
                    <p>Email:  <span> {course?.authorEmail}</span></p>
                    <p>Department:  <span> {titleCase(course?.authorDept)}</span></p>
                    <p>Total Lectures: <span> {course?.lessons?.length}</span></p>
                    <button onClick={handleMessage}>Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </>
  )
}

export default CourseLectureDetail;
