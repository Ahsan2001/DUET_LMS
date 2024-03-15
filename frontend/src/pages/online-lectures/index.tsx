import { useEffect, useState } from "react";
import { GetCoursesApi } from "../../api";
import { CourseCard, CourseLoading, Sidebar } from "../../components";
import Layout from "../../layout";

const OnlineLectures: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [course, setCourse] = useState([]);

    async function FetchCourses() {
        setLoading(true)
        try {
            let response: any = await GetCoursesApi();
            if (response.status === 200) {
                setCourse(response?.data?.coursesDato)
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

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
                <Sidebar />
                <div className="flex-1 bg-gray-800">
                    <Layout>
                        <div className="bg-white rounded-lg mx-10 mt-10">
                            <h2 className="text-xl font-semibold  p-3 text-gray-800   mb-4 px-10">
                                ONLINE LECTURES
                            </h2>
                        </div>
                        <div className="grid grid-cols-12 gap-8 m-10">
                            {
                                loading ?
                                    <CourseLoading count={6} />
                                    : course.length > 0 ? course.map((course, index) => <CourseCard key={index} course={course} />)
                                        : <div> <h1>No courses Found </h1></div>
                            }
                        </div>
                    </Layout>
                </div>
            </div>
        </>
    )
}

export default OnlineLectures