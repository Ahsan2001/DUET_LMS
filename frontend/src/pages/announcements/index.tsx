import { Sidebar } from "../../components";
import Layout from "../../layout";

const Announcements: React.FC = () => {

    return (
        <>
        <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar  />

            <div className="flex-1 bg-gray-800">
                <Layout>
                    <h2 className="text-2xl min-h-screen font-semibold text-center text-white mb-4">There is no announcement YET !</h2>
                </Layout>
            </div>
        </div>
        </>
    )
}

export default Announcements