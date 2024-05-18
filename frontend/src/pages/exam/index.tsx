import { Sidebar } from "../../components";
import Layout from "../../layout";

const Exam: React.FC = () => {

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
                <Sidebar />
                <div className="flex-1 bg-gray-800">
                    <Layout>
                        <h2 className="min-h-screen text-2xl font-semibold text-center text-white mb-4">EXAM FEATURE IS NOT COMPLETED YET !</h2>
                    </Layout>
                </div>
            </div>
        </>
    )
}

export default Exam