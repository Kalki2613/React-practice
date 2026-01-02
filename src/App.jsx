import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Joker from './Joker.jsx';
import Counter from './Counter.jsx';
import Form from './Form.jsx';
import Comment from './Comment.jsx';
import CommentsForm from './CommentsForm.jsx';


function App() {
  

  return (
    <>
     <Comment />
     <Counter />
     <Joker />
    </>
  )
}

export default App
