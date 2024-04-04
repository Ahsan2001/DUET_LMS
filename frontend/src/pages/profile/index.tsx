import { Sidebar,ImageUpload } from "../../components";
import Layout from "../../layout";
import {useSelector} from "react-redux"

const Profile: React.FC = () => {

  const data = useSelector((state: any) => state?.user);
  console.log(data , "data")

  const nameParts = data?.username.split(" ");
  console.log(nameParts[0] ,nameParts[1] )

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-800">
          <Layout>
            <div className="bg-white rounded-lg mx-10 mt-10">
              <h2 className="text-xl font-semibold  p-3 text-gray-800   mb-4 px-10">
                PROFILE SETTING
              </h2>
            </div>
            <div className="grid gap-4  sm:grid-cols-4  mt-16">
              <div className=" text-white sm:col-span-1 ">
                <ImageUpload />
              </div>
              <div className="bg-green sm:col-span-3">
                <form>
                  <div className="grid gap-6 mx-10 mb-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 text-white">First name</label>
                      <input type="text" id="first_name" value={nameParts[0]} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 text-white">Last name</label>
                      <input type="text" id="last_name" value={nameParts[1]} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="rollNo" className="block mb-2 text-sm font-medium text-gray-900 text-white">Roll No</label>
                      <input type="text" id="rollNo" value={data?.rollNo} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"  />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 text-white">Phone number</label>
                      <input type="tel"  id="phone" value={data?.phone} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="dept" className="block mb-2 text-sm font-medium text-gray-900 text-white">Department</label>
                      <input type="text" id="dept" value={data?.department} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-white">Email address</label>
                      <input type="email" id="email" value={data?.email} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white rounded-lg mt-16 mx-10">
              <h2 className="text-xl font-semibold  p-3 text-gray-800   mb-4 px-10">
                CHANGE PASSWORD
              </h2>
            </div>
            <div className="grid gap-6  mx-10 mt-10 sm:grid-cols-3">
              <form className="sm:col-span-1">
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-white">Current Password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-white">New Password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 text-white">Confirm password</label>
                  <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Save Changes</button>
              </form>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Profile;
