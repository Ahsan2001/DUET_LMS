import { Sidebar } from "../../components";

const Profile: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-white mb-4">
            Welcome to Profile Page
          </h2>
          <p className="text-white-700 text-center text-white">
            You will be able to view lectures anytime online once they are
            available on portal
          </p>

          <div className="grid gap-4  sm:grid-cols-3  ">
            <div className="bg-black text-white sm:col-span-1 text-center">
              <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
                className="rounded-full w-24 m-4  mx-auto text  base"
              />
              <h4 className="m-4  text-2xl font-semibold  border-gray-100 ">
                Anika Visser
              </h4>{" "}
              <hr />
              <button className="bg-gray-100 w-full rounded-lg py-2  mt-2.5   px-1 text-blue-600 font-semibold  text-xl">
                Upload picture{" "}
              </button>
            </div>
            <div className="bg-black sm:col-span-2">
            <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox" checked />
                      <span className="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
