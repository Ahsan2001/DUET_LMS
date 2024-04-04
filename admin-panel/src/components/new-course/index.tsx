import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import styles from './styles.module.css';


export  const NewCourse: React.FC = () => {
  const [courseName, setCourseName] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [lessonVideo, setLessonVideo] = useState('');
  const dummyImage = ''; // Dummy image URL

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { courseName, selectedImage, lessonTitle, lessonDescription, lessonVideo });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);
    }
  };


  return (
    <Container>
      <h2>
        Create New Course
      </h2>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <TextField
          className={styles.textField}
          label="Course Name"
          variant="outlined"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      <div className={styles.imageInput}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="imageInput"
          />
          {selectedImage && (
            <div>
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '300px', marginTop: '16px' }} />
            </div>
          )}
          <label htmlFor="imageInput">
            <Button component="span" variant="contained" color="primary">
              Upload Course Cover Photo
            </Button>
          </label>
        </div>
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
          Create Course
        </Button>
      </form>
    </Container>
  );
};

