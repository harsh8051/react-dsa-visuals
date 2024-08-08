import React from 'react';
import { Route } from 'react-router-dom';
import Section from './Section';

// Define the types for the component configuration
type CompConfigWithComponent = {
  name: string;
  url: string;
  ComponentName: React.ComponentType;
};

type CompConfigWithString = {
  name: string;
  url: string;
  ComponentName: string;
};

type CompConfig = CompConfigWithComponent | CompConfigWithString;

 
const renderPageComponent = (comp: CompConfig,index:number): JSX.Element => {
  // Check if ComponentName is a function or a string
  
    return (
      <Route 
        path={comp.url} 
        key={comp.name} 
        element={
          <Section colorid={index}>
            <comp.ComponentName/>
          </Section>
        } 
      />
    );
  
};

export default renderPageComponent;
