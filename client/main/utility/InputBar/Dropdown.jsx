/**
 * ************************************
 *
 * @module  Drowdown
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - A Dropdown for use with InputBar
 * 
 * ************************************
 */

import React from 'react';
import DropdownItem from './DropdownItem';

const onFocus = (entries, setFocused) => {
  if (!entries.length) return;
  setFocused(true);
};

const Dropdown = ({label, className, entries})=>{
  const [focused, setFocused] = React.useState(false);
  
  const items = [];

  for (const entry of entries){
    items.push(<DropdownItem key={Math.random()} label={entry[0]} onClickFunc={entry[1]}/>);
  }

  return (
    <button onFocus={()=>onFocus(entries, setFocused)} onBlur={() => setFocused(false)} className={`first:rounded-l-lg last:rounded-r-lg relative border-2 border-custom-darktan text-custom-darkgreen bg-custom-darktan hover:text-custom-darktan hover:bg-custom-darkgreen focus:ring-2 focus:outline-none focus:ring-brown-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-brown-800 ${className}`} type='button'>
      { label }
      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
      <div className={`absolute top-full left-0 z-10 ${focused ? 'block' : 'hidden' } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {items}
        </ul>
      </div>
    </button>
  );
};

export default Dropdown;