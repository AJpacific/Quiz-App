import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const QuestionCountSelector = ({ selectedCount, onCountChange }) => {
  const questionOptions = [
    { 
      value: 5, 
      label: '5 Questions',
      description: 'Quick assessment (~3-5 minutes)'
    },
    { 
      value: 10, 
      label: '10 Questions',
      description: 'Standard quiz (~8-12 minutes)'
    },
    { 
      value: 15, 
      label: '15 Questions',
      description: 'Comprehensive test (~15-20 minutes)'
    }
  ];

  const getEstimatedTime = (count) => {
    const timePerQuestion = 1.2; // minutes
    const totalMinutes = Math.ceil(count * timePerQuestion);
    return `~${totalMinutes} minutes`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Hash" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Number of Questions</h3>
      </div>
      
      <Select
        label="Choose question count"
        description="Select how many questions you'd like to answer"
        options={questionOptions}
        value={selectedCount}
        onChange={onCountChange}
        placeholder="Select number of questions"
        className="w-full"
      />
      
      {selectedCount && (
        <div className="mt-3 p-3 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">Estimated time:</span>
            </div>
            <span className="font-medium text-foreground">
              {getEstimatedTime(selectedCount)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCountSelector;