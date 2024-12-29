import React from 'react';

// Define the type for the props
interface FormTopBarProps {
  heading: string;
  paragraph: string;
}

export const FormTopBar: React.FC<FormTopBarProps> = ({ heading, paragraph }) => {
  return (
    <div className='text-center space-y-3 mb-[45px]'>
      <p className='font-bold font-inter text-h1 text-EerieBlack'>{heading}</p>
      <p className='font-inter font-medium  text-h5  text-ZinnwalditeBrown  ' style={{ }}>{paragraph}</p>
    </div>
  );
}
