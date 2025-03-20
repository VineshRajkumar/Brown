import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from '@/conf/conf';
import { useEffect } from 'react';
const RTE = ({
    name,
    //Here "control" will passed as a 
    // reference for some other page 
    // to use this form 
    //This is propety from react hook form
    control,
    label,
    defaultValue = ""
}) => {

  return (
    <div>
       <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
       </div>
       <Controller
       name={name}
       control={control} //control is passed here just 
       // like forward ref so that its parent element 
       // can take control fo this component

       //render this component again whenever 
       // some kind of change happens here
       render={({field : {onChange}}) => (
        <Editor
        apiKey={conf?.tinymceApiKey || "no-api-key"}
        initialValue={defaultValue}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={(content) => onChange(content)}
      />
       )} 
       />
    </div>
  )
}

export default RTE
