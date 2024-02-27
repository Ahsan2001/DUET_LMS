


import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {

    const data = useSelector((state:any) => state?.user);

    console.log(data, "data")
    
    return(
        <h1>Welcome {data?.username} to dashboard</h1>
    )
}

export default Dashboard