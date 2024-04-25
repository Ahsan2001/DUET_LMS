// import library 
import { Box, Grid } from "@mui/material";
// import { Link } from "react-router-dom";

// import assets 
import styles from "./styles.module.css";
import { Sidebar } from "../../components";
import { useSelector } from "react-redux";


 function Dashboard() {
    const data = useSelector((state: any) => state?.user);

    return (
        <Box component="section">
            <Grid container>
                <Grid item xs={12} md={3} lg={2} className={styles.bg_secondary}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} md={9} lg={10} className={styles.bg_primary}>
                    <ul>
                        <li>Picture  :  <span> <img src={data?.picture} alt={data?.username} width={50} height={50} /></span></li>
                        <li>Auth :  <span> {data?.auth.toString()}</span></li>
                        <li>FullName :  <span>{data?.username}</span></li>
                        <li>Department :  <span>{data?.department}</span></li>
                        <li>Email :  <span> {data?.email}</span></li>
                        <li>Gender :  <span>{data?.gender}</span></li>
                        <li>Phone :  <span>{data?.phone}</span></li>
                        <li>Roll no :  <span>{data?.rollNo}</span></li>
                        <li>Database Id :  <span>{data?._id}</span></li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}



export default Dashboard;