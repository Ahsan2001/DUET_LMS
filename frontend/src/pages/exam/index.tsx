import { Sidebar } from "../../components";
import Layout from "../../layout";

const Exam: React.FC = () => {

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
                <Sidebar />
                <div className="flex-1 bg-gray-800">
                    <Layout>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                        <h2 className="min-h-screen text-2xl font-semibold text-center text-white mb-4">There is no ExAM YET !</h2>
                    </Layout>
                </div>
            </div>
        </>
    )
}

export default Exam