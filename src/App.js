import { useContext, useEffect, useState } from 'react';
import { Area } from './components/Area/Area';
import { Header } from './components/Header/Header';
import Note from './components/Note/Note';
import FirebaseContext from './contexts/FirebaseContext';

function App() {

  const { firebase, FieldValue } = useContext(FirebaseContext);
  console.log(firebase);
  


  const initialData = [
    {
      title: 'Test',
      content: 'Hello World!',
      id:'3rsdfe'
    },
    {
      title: 'Test 2',
      content: 'Awww, looks Beautiful',
      id:'sdf42xdf'
    }
  ]
  
  const [notes, setNotes] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("notes"));
    return localData.length === 0 ? initialData : localData;
  });
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  const addNote = (newNote) => {
    setNotes(prevValue => {
      return [...prevValue , newNote]
    })
  }

  const handleDelet = (id) => {
     const filter = notes.filter(note => {
      return note.id !== id
     })
    setNotes(filter)
  }

 
  return (
    <div >
      <Header />
      <div className="container ">
        <Area onAdd={addNote} />
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              handleDelet={handleDelet}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
