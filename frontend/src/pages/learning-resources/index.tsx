import { Sidebar } from "../../components";
import Layout from "../../layout";

const LearningResources: React.FC = () => {

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
                <Sidebar />
                <div className="flex-1 bg-gray-800">
                    <Layout>
                        <div className="bg-white rounded-lg mx-10 mt-10">
                            <h2 className="text-xl font-semibold  p-3 text-gray-800   mb-4 px-10">
                                LEARNING RESOURSES
                            </h2>
                        </div>
                        <div className="m-10 min-h-screen">
                            <div className="grid grid-cols-12 gap-8">
                                <div className="col-span-12 sm:col-span-3 bg-white lg:col-span-2 border border-gray-500 rounded shadow-lg">
                                    <img className="w-full" src="./learning-resourses/version-control.jpg" alt="Cover" />
                                    <div className="px-2 py-2 text-center">
                                        <a href="https://faculty.ksu.edu.sa/sites/default/files/ObjectOrientedProgramminginC4thEdition.pdf" target="_blank"
                                         rel="noreferrer"   className="font-bold text-center text-sm mb-2">Obecjt Oriented Programming In C++</a>
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

export default LearningResources