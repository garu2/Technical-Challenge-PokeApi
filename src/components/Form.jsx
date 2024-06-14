import {useState} from 'react'


const Form = () => {
  const [image, setImage] = useState({}); 
  const [id, setId] = useState(0); 
  const [name, setName] = useState(''); 
  const [type, setType] = useState(''); 
  const [tamanio, setTamanio] = useState(''); 
  const [genero, setGenero] = useState(''); 
  
  const [error, setError] = useState(false);
  


  const hadleForm = (e) => {
    e.preventDefault();
    /* const data = Object.fromEntries(
      new FormData(e.target)
    ); */

    if(!id || !name || !type){
      setError(true);
      return;
    }
    const data = {
      image,
      id,
      name,
      type,
      tamanio,
      genero
    }
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push(data);
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(data);
    setId(0);
    setName('');
    setType('');
    setTamanio('');
    setGenero('');
  }

  return (
    <form onSubmit={hadleForm}>
      <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      <input type="number" placeholder='id*' onChange={(e)=>setId(e.target.value)} value={id}/>
      <input type="text" placeholder='Name*' onChange={(e)=>setName(e.target.value)} value={name}/>
      <input type="text" placeholder='Type*' onChange={(e)=>setType(e.target.value)} value={type}/>
      <input type="text" placeholder='tamanio' onChange={(e)=>setTamanio(e.target.value)}value={tamanio}/>
      <input type="text" placeholder='genero' onChange={(e)=>setGenero(e.target.value)} value={genero}/>
      <div>
        <button>Cancelar</button>
        <input type="submit" value="Submit" />
      </div>
      {error && <p className='error'>Campos Obligatorios</p> }
    </form>
  )
}

export default Form