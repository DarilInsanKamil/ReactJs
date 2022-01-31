import React from 'react';
import { Home } from './Page/Home';
import { Hello } from './Blog/Hello'
import { Router, Route } from 'react-router-dom';
import { Project } from './Page/Project';
export const Routers = () => {
  return (
    <>
      <Home />
      <Project />
    </>
  )
};
