import React from 'react'
import FileItem from '../FileItem/FileItems' ;

import './FileList.css'

const FileList = ({files, removeFiles}) => {
  return (
    <div className='list'>
        <ul>
            {
                files.map((file, index) => {
                    console.log(file);
                    return (
                        <FileItem key={index} file={file.currentFile} removeFiles = {removeFiles}/>
                    );
                })
            }
        </ul>
    </div>
  )
}

export default FileList ;
