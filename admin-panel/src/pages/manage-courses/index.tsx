// import library 
import { Box, Grid } from "@mui/material";
// import { Link } from "react-router-dom";

// import assets 
import styles from "./styles.module.css";
import { CoursesTable, Sidebar } from "../../components";


export function ManageCourses() {
    return (
        <Box component="section">
            <Grid container>
                <Grid item xs={12}  md={3} lg={2} className={styles.bg_secondary}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} md={9} lg={10} className={styles.bg_primary}>
                    <CoursesTable />
                </Grid>
            </Grid>
        </Box>
    )
}