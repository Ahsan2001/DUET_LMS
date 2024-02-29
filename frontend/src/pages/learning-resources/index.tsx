import { Sidebar } from "../../components";

const LearningResources: React.FC = () => {

    return (
        <>
        <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar  />

            <div className="flex-1 p-8 bg-gray-800">
                <h2 className="text-2xl font-semibold text-center text-white mb-4">Welcome  to  Learning Resources Page</h2>
                <p className="text-white-700 text-center text-white">You will be able to view lectures anytime online once they are available on portal</p>
            </div>
        </div>
        </>
    )
}

export default LearningResources