import React from 'react'
import FileItem from '../FileItem/FileItems' ;

import './FileList.css'

const FileList = ({files, removeFiles}) => {
  return (
    <div className='list'>
        <ul>
            {
                files.map((file, index) => {
                    return (
                        <FileItem file={file} removeFiles = {removeFiles} key={index} />
                    );
                })
            }
        </ul>
    </div>
  )
}

export default FileList ;
