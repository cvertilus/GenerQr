import React, { useRef, useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code';

function App() {

  const qrRef = useRef(null);
  const [text, setText] = useState("");

  
  const handleChange = () => {
    const value = qrRef.current.value;
    setText(value.trim());
  };

  return (
    <div className='Card'>
      <h2 className='Card-header'>Generar QR</h2>
      <hr />
      <input type="text" placeholder='Ingrese el texto o URL' className='Card-input'  ref={qrRef} required autoFocus onChange={handleChange} />
      <div className='Card-body'>
      {
       text.length > 0 &&  (
          
          <QRCode
          size={256}
          style={{ height: "150px", maxWidth: "100%", width: "100%" }}
          value={text}
          viewBox={`0 0 256 256`}
        />
      
        )
      }
        
        
      </div>
      
    </div>
  );
}

export default App
