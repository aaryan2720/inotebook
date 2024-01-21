import { useContext } from 'react';
import React from "react";
import noteContext from '../context/notes/noteContext';


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
  const { note,updateNote} = props;
  return (
      <div className="col-md-3 my -3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Tag: {note.tag }
            </h6>
            <p className="card-text">{ note.description}</p>
            <i className="fa-solid fa-trash-can mx-1" title="Delete Note" onClick={()=>{deleteNote(note._id);props.showAlert("Note Deleted Successfully" , "success");}}></i>
             <i className="fa-solid fa-marker mx-2  "title="Edit Note" onClick={()=>{updateNote(note)}} ></i>
          </div>
        </div>
    </div>
  );
};

export default Noteitem;
