import React, { useRef, useState, useCallback, useEffect } from 'react';
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';

const CropImage = (props) => {
  const { src, completedCrop, setCompletedCrop, previewCanvasRef } = props;
  const initialCrop = {
    unit: '%',
    width: 50,
    x: 25,
    aspect: 1 / 1,
  };
  const imgRef = useRef(null);
  const [crop, setCrop] = useState(initialCrop);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  return (
    <>
      <ReactCrop
        src={src}
        crop={crop}
        onChange={(crop, percentCrop) => setCrop(percentCrop)}
        keepSelection={true}
        onImageLoaded={onLoad}
        onComplete={(crop) => setCompletedCrop(crop)}
      />
      <canvas
        ref={previewCanvasRef}
        style={{
          width: Math.round(completedCrop?.width ?? 0),
          height: Math.round(completedCrop?.height ?? 0),
        }}
      />
    </>
  );
};

export default CropImage;
