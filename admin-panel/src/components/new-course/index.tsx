import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { CreateCoursesApi } from '../../api';
import { useSelector } from 'react-redux';


export const NewCourse: React.FC = () => {
  const [courseName, setCourseName] = useState('');

  // const [selectedImage, setSelectedImage] = useState<File | null>(null);


  const [image, setImage] = useState<string | null>(null);


  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [lessonVideo, setLessonVideo] = useState('');
  const navigate = useNavigate();
  const data = useSelector((state: any) => state?.user);




  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    const apiData = {
      courseName,
      coverPhoto: image, 
      title: lessonTitle, 
      description: lessonDescription, 
      author: data?._id,
      videoPath: lessonVideo
    }

    const response: any = await CreateCoursesApi(apiData);

    console.log(response, "response");
  };




  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <Container >
      <div className={styles.titles}>
        <h2>Create New Course</h2>
        <Button variant="contained" onClick={() => navigate(-1)}> Go Back</Button>
      </div>
      <form className={styles.formContainer} onSubmit={(e) =>handleSubmit(e)}>
        
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
          {image && (
            <div>
              <img src={image} alt="Selected" style={{ maxWidth: '300px', marginTop: '16px' }} />
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

