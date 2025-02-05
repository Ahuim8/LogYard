/**
 * ************************************
 *
 * @module  InputBar
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Creates a horizontal bar for collecting inputs
 * 
 * ************************************
 */

import React from 'react';
import Dropdown from './Dropdown';
import ButtonInput from './ButtonInput';
import TextInput from './TextInput';
import ButtonInputAuth from './ButtonInputAuth';

const InputBar = ({ children, className })=>{
  
  return (
    <div className={`flex items-stretch rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export { Dropdown, ButtonInput, ButtonInputAuth, TextInput };
export default InputBar;