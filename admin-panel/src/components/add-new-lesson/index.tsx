import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import styles from './styles.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddNewLessonApi } from '../../api';
import { toast,Slide as ToastSlides } from 'react-toastify';

export const NewLesson: React.FC = () => {

  const location = useLocation();
  const courseId = location.state ? location.state.courseId : null;

  console.log(courseId , "ahsan ahsan")

  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [lessonVideo, setLessonVideo] = useState('');
  const [lessonNo, setLessonNo] = useState('');

  const navigate = useNavigate();


  const handleSubmit =  async (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', {  lessonTitle, lessonDescription, lessonVideo });



    const apiData = {
      courseId,
      chapterNo: lessonNo, 
      title: lessonTitle, 
      description: lessonDescription, 
      videoPath: lessonVideo
    }
  
    
    const response: any = await AddNewLessonApi(apiData);

    
    if (response.status === 201) {
      toast.success(response?.data?.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: ToastSlides,
      });
    };


    setTimeout(()=>{
      navigate(-1),
      navigate(-1)
    },1000)



  };
  // 

  return (
    <Container >
      <div className={styles.titles}>
        <h2>Add New Lesson</h2>
        <Button variant="contained" onClick={() => navigate(-1)}> Go Back</Button>
      </div>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
        



      <TextField
          className={styles.textField}
          label="Lesson No"
          variant="outlined"
          value={lessonNo}
          onChange={(e) => setLessonNo(e.target.value)}
        />



        <TextField
          className={styles.textField}
          label="Lesson Title"
          variant="outlined"
          value={lessonTitle}
          onChange={(e) => setLessonTitle(e.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Lesson Description"
          variant="outlined"
          multiline
          rows={4}
          value={lessonDescription}
          onChange={(e) => setLessonDescription(e.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Lesson Video URL"
          variant="outlined"
          value={lessonVideo}
          onChange={(e) => setLessonVideo(e.target.value)}
        />
        <Button className={styles.submitButton} variant="contained" color="primary" type="submit">
          Add Lesson 
        </Button>
      </form>
    </Container>
  );
};

