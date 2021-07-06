import React, { useRef, useEffect } from 'react';

const UploadImage = () => {
  const refForm = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(refForm.current);
    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    try {
      await fetch('http://localhost:3001/image', requestOptions);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refForm.current.focus();
  }, []);

  return (
    <>
      <h1>File upload</h1>
      <form onSubmit={handleSubmit} ref={refForm}>
        <label>
          Upload image:
          <input type='file' name='image' accept='image/*' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default UploadImage;
