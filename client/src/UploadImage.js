import React, { useRef, useState } from 'react';
import CropImage from './CropImage';

const UploadImage = () => {
  const previewCanvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    if (!crop || !canvas) {
      return;
    }

    const formData = new FormData();
    canvas.toBlob(
      async (blob) => {
        formData.append('image', blob, 'image.png');
        const requestOptions = {
          method: 'POST',
          body: formData,
        };
        try {
          await fetch('http://localhost:3001/image', requestOptions);
        } catch (err) {
          console.error(err);
        }
      },
      'image/png',
      1
    );
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setImageSrc(reader.result));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <h1>File upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Crop image:
          <input
            type='file'
            name='image'
            accept='image/*'
            onChange={onSelectFile}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <CropImage
        src={imageSrc}
        completedCrop={completedCrop}
        setCompletedCrop={setCompletedCrop}
        previewCanvasRef={previewCanvasRef}
      />
    </>
  );
};

export default UploadImage;
