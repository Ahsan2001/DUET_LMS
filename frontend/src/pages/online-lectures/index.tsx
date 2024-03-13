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
                        <div className="container mx-auto">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                        </div>
                    </Layout>
                </div>
            </div>
        </>
    )
}

export default OnlineLectures