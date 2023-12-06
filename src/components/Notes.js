import React from "react";
import { useContext, useEffect,useRef,useState} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./Addnote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id ,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  };
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id:'', etitle: '', edescription: '', etag: '' });

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id,note.etitle, note.edescription, note.etag);
    refClose.current.click();

  };

  const onChange= (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        type="button" ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
         Edit note 
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form className="container my-4">
          <div className="form-group my-3">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              placeholder="Enter title"
              required
              minLength={5}
              value={note.etitle}
              onChange={onChange} // corrected to use onChange instead of onchange
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              placeholder="Enter description"
              required
              minLength={5}
              value={note.edescription}
              onChange={onChange} // corrected to use onChange instead of onchange
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">#Tags:</label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              placeholder="Enter Tags"
              value={note.etag}
              onChange={onChange} // corrected to use onChange instead of onchange
            />
          </div>
        </form>
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row my-3">
          <h1>Your Notes</h1>
          <div className="container mx-2">
          <b>{notes.length === 0 && "No notes to Display 🙁....Why Don't You add One 😉??"}</b></div>
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
