// == Import npm
import React, { useState, useEffect } from 'react';
import { sampleText } from '../../sampleText';
import marked from 'marked';

import './style.scss';


// == Composant
const App = () => {
  
  const [text, setText] = useState(sampleText);

  useEffect(() => {
    if (localStorage.getItem("memoire")) {
      setText(localStorage.getItem("memoire"))
    }
  }, [])

  useEffect(() => 
    localStorage.setItem('memoire', text)
  , [text]);


  const handleChange = (evt) => {
    setText(evt.target.value)
  }

  const renderText = text => marked(text, { sanitize: true })
 
return(
  <div className="app">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea  
            onChange={handleChange}
            rows="10" 
            className="form-control"
            value={text}
            >
          </textarea>
        </div>
        <div className="col-sm-6">
          <div>
            <div dangerouslySetInnerHTML={{ __html: renderText(text) }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
// == Export
export default App;
