import React from 'react';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="form-label">{text}</label>;
};

export default Label;