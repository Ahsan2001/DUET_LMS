import { Sidebar } from "../../components";
import Layout from "../../layout";

const OnlineLectures: React.FC = () => {
    const coverPhotoUrl = 'https://via.placeholder.com/400x200';
    const authorImageUrl = 'https://via.placeholder.com/50';
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
                        <div className="m-10">
                            <div className="grid grid-cols-12 gap-8">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-500 rounded shadow-lg">
                                    <img className="w-full" src={coverPhotoUrl} alt="Cover" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Video Title</div>
                                        <div className="flex items-center mb-4">
                                            <img className="w-10 h-10 rounded-full mr-4" src={authorImageUrl} alt="Author" />
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Author Name</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-500 rounded shadow-lg">
                                    <img className="w-full" src={coverPhotoUrl} alt="Cover" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Video Title</div>
                                        <div className="flex items-center mb-4">
                                            <img className="w-10 h-10 rounded-full mr-4" src={authorImageUrl} alt="Author" />
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Author Name</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-500 rounded shadow-lg">
                                    <img className="w-full" src={coverPhotoUrl} alt="Cover" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Video Title</div>
                                        <div className="flex items-center mb-4">
                                            <img className="w-10 h-10 rounded-full mr-4" src={authorImageUrl} alt="Author" />
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Author Name</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-500 rounded shadow-lg">
                                    <img className="w-full" src={coverPhotoUrl} alt="Cover" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Video Title</div>
                                        <div className="flex items-center mb-4">
                                            <img className="w-10 h-10 rounded-full mr-4" src={authorImageUrl} alt="Author" />
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Author Name</p>
                                            </div>
                                        </div>
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

export default OnlineLectures