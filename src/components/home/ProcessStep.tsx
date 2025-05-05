
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 rounded-full bg-agri-primary text-white flex items-center justify-center">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-agri-dark">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
