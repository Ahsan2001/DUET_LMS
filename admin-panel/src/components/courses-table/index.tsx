// import library 
// import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { Slide, toast } from "react-toastify";
// import { Link } from "react-router-dom";

// import assets 
import styles from "./styles.module.css";
import { CoursesData } from "../../interface";
import { DeleteCoursesApi, GetAllCoursesApi } from "../../api";
import { Toast } from "../toast";
import { Spinner } from "../spinner";

export function CoursesTable() {

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<CoursesData[]>([]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteID] = useState(0);

  const handleOpen = (id: number) => {
    setOpen(true);
    setDeleteID(id);
  };

  const handleClose = () => setOpen(false);

  async function fetchCourses() {
    setLoading(true); 
    try {
      const response: any = await GetAllCoursesApi();
      if (response.status === 200) {
        setCourses(response.data.coursesDato);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    const response: any = await DeleteCoursesApi(deleteId);
    if (response.status === 200) {
      toast.success(response?.data?.message, {
        position: 'bottom-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide,
      });
    } else {
      toast.error('Something went wrong. Please try again.');
    }
    handleClose();
  }

  useEffect(() => {
    fetchCourses();
  }, []); 

  if(loading) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }

  return (
    <>

      <table className={styles.courses_table} aria-label="simple table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Course Title</th>
            <th>Cover Photo</th>
            <th>Total Lesson</th>
            <th>Edit Course</th>
            <th>Delete Course</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((element, index) => {
            return (
              <tr key={index}>
                <td className={styles.authorField}> <img src={element?.authorPicture} alt={element?.authorName} />{element?.authorName}</td>
                <td>{element?.courseName}</td>
                <td className={styles.coverPhoto}><img src={element?.coverPhoto} alt={element?.authorName} /></td>
                <td>{element?.lessons?.length}</td>
                <td className={styles.editBtn}><Button variant="outlined" startIcon={<EditIcon />}> Edit </Button></td>
                <td className={styles.deleteBtn}><Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=> {handleOpen(element?.courseId)}}> Delete </Button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ color: "red" }}>
              Warning
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 2 }}>
              You are about to delete the course. Once deleted, it cannot be undone or recovered
            </Typography>
            <Button variant="contained" startIcon={<DeleteIcon />} color="secondary" onClick={handleDelete}> Confirm Delete</Button>
            <Button variant="contained" sx={{ mx: 2 }} onClick={handleClose}> Cancel</Button>
          </Box>
        </Fade>
      </Modal>

      <Toast />

    </>

  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};