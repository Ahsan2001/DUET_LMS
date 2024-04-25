import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';


export const NewLesson: React.FC = () => {
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [lessonVideo, setLessonVideo] = useState('');
  const navigate = useNavigate();


  const handleSubmit = () => {
    console.log('Form submitted:', {  lessonTitle, lessonDescription, lessonVideo });
  };


  return (
    <Container >
      <div className={styles.titles}>
        <h2>Add New Lesson</h2>
        <Button variant="contained" onClick={() => navigate(-1)}> Go Back</Button>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        
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

