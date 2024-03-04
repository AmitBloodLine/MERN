'use client';
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./todolist/page";
import EventHandling from "./eventhandling/page";

const Template = ({children}) => {
  
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Template;
