import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";

const Dashboard: React.FC = () => {
    const data = useSelector((state: any) => state?.user);


    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">

            <Sidebar  />

              



                <div className="flex-1 p-8 bg-gray-800">
                    <h2 className="text-2xl font-semibold text-center text-white mb-4">Welcome {data?.username}  to your dashboard!</h2>
                    <p className="text-white-700 text-center text-white">You will be able to view lectures anytime online once they are available on portal</p>

                    <ul>
                        <li style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px"
                        }}
                            className="text-white"
                        >Picture  :  <span className="text-primary"> <img src={data?.picture} alt={data?.username} width={50} height={50} /></span></li>


                        <li className="text-white" >Auth :  <span className="text-primary">{data?.auth.toString()}</span></li>
                        <li className="text-white" >FullName :  <span className="text-primary">{data?.username}</span></li>
                        <li className="text-white" >Department :  <span className="text-primary">{data?.department}</span></li>
                        <li className="text-white" >Email :  <span className="text-primary"> {data?.email}</span></li>
                        <li className="text-white" >Gender :  <span className="text-primary">{data?.gender}</span></li>
                        <li className="text-white" >Phone :  <span className="text-primary">{data?.phone}</span></li>
                        <li className="text-white" >Roll no :  <span className="text-primary">{data?.rollNo}</span></li>
                        <li className="text-white" >Database Id :  <span className="text-primary">{data?._id}</span></li>

                    </ul>



                </div>
            </div>

        </>
    )
}

export default Dashboard