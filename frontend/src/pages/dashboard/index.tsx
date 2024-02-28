import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
    const data = useSelector((state:any) => state?.user);
    return(
        <>
            <h1>Welcome {data?.username} to dashboard</h1> 
            <br /> <br /> <br />
                <ul>
                    <li>Auth :{data?.auth.toString()}</li>
                    <li>FullName :{data?.username}</li>
                    <li>Department :{data?.department}</li>
                    <li>Email : {data?.email}</li>
                    <li>Gender :{data?.gender}</li>
                    <li>Phone :{data?.phone}</li>
                    <li>Roll no :{data?.rollNo}</li>
                    <li>Database Id :{data?._id}</li>
                    <li style={{display: "flex"}}>Picture  : <img src={data?.picture} alt={data?.username} width={50} height={50} /></li>
                
                </ul>
        </>
    )
}

export default Dashboard