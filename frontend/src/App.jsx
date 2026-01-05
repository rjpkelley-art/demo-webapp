import React, {useEffect, useState} from 'react';

export default function App(){
  const [msg, setMsg] = useState('loading...');
  useEffect(()=>{
    fetch('/api/hello').then(r=>r.json()).then(d=>setMsg(d.message)).catch(()=>setMsg('failed'));
  },[]);
  return (
    <div style={{fontFamily:'Arial'}}>
      <h1>Hello from demo-webapp frontend</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}
