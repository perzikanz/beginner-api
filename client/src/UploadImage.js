import React from 'react';

const UploadImage = () => {
  // const inputImage = React.createRef();
  // const requestOptions = {
  //   method: 'POST',
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('image', inputImage.current.files[0]);
  //   try {
  //     const response = await fetch('http://localhost:3001/image', {
  //       ...requestOptions,
  //       formData,
  //     });
  //     console.log(formData);
  //     console.log(response.status);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <form
      action='http://localhost:3001/image'
      method='post'
      enctype='multipart/form-data'
    >
      <label>
        Upload image:
        <input type='file' name='image' />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};
export default UploadImage;
