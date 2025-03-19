//THIS COMPOENET IS MADE JUST FOR KNOWING 
//HOW TO MAKE COMPONETS BUT I AM NOT USING 
//THIS AS FOR UI I AM USING SHADCN 

/*
How to use this compoenet in any other file 

import Select from './components/Select'

<Select 
      options={["Apple", "Banana", "Blueberry"]}  
      label = "Fruits"
      className = "text-xl"
      placeholder = "Select a fruit"
     
      />

*/

import React from 'react'
import { useId } from 'react'
import { forwardRef } from "react";

const Select =  forwardRef(({
    //These are the properties/props 
    //that will be passed into this component
    options=[],
    label,
    className = "", //default value is ""

    ...props  //These are for additional 
            // anyother properties that user can pass
    //ref will be using forward ref :-
    //Forward Ref is speacil type of 
    //hook which is used to give 
    //reference of the component 
}, ref) => {
    const id = useId()
  return (
    <div className='w-full'>

        {label && <label htmlFor={id} className=''></label>}

        <select 
        {...props}
        id={id}
        ref={ref}
        className={`${className}`}
        >
            {
                options?.map((option)=>(
                    <option key={option} value={option} className="focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2">
                        {option}
                    </option>
                ))
            }
        </select>
      
    </div>
  )
})

//sending forwardRef is necessary or else it wornt 
//give its reference and that wont work
// export default React.forwardRef(Select);

Select.displayName = "Select"; 

export { Select };