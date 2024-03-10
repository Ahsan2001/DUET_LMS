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
                <Grid item xs={12} md={4} lg={3} className={styles.bg_secondary}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} md={8} lg={9} className={styles.bg_primary}>
                    <CoursesTable />
                </Grid>
            </Grid>
        </Box>
    )
}