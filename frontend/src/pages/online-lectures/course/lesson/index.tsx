
import { useLocation, useParams } from "react-router-dom";
import { Sidebar } from "../../../../components";
import Layout from "../../../../layout";
import { useEffect, useState } from "react";
import {  GetLectureDetailCoursesApi } from "../../../../api";
import styles from "./styles.module.css";
import { titleCase } from "../../../../utils/title-case";
import { formatDate } from "../../../../utils/format-date";


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
        setCourse(response?.data?.lesson)
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

//   function handleMessage(){
//     window.alert("Message Module is not completed yet")
//   }

  console.log(course, "course")
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-800">
          <Layout>
            <h2>{title}</h2>
            {/* <div className="bg-white rounded-lg mx-10 mt-10 flex justify-between item-center">
              <h2 className="text-xl font-semibold  p-3 text-gray-800    px-10">
                {title?.toLocaleUpperCase()}
              </h2>
              <h2 className="text-md font-semibold  p-3 text-gray-800    px-10">
                <span className="text-primary">Created on</span>  {formatDate(course?.createdAt)}
              </h2>
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
            </div> */}
          </Layout>
        </div>
      </div>
    </>
  )
}

export default CourseLectureDetail;
