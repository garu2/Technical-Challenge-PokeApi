import { useEffect, useState } from 'react'

const Item = ({ item }) => {
  const [dataPoke, setDataPoke] = useState({}) // [1
  const [popupData, setPopupData] = useState({}) // [2
  const [activePopup, setActivePopup] = useState(false) // [3
  const APIDES = item.url;

  async function callInfo() {
    const response = await fetch(APIDES);
    const data = await response.json();
    //console.log(data);
    setDataPoke(data)
  }

  const openDescription = (id) => {
    console.log('id: ', id)
    setActivePopup(true)
    setPopupData(dataPoke)
  }

  useEffect(() => {
    callInfo();
  }, []);

  return (
    <>
      <li onClick={()=>openDescription(dataPoke.id)}>
        <img src={dataPoke.sprites?.front_default} alt={dataPoke.name} />
        <h3>{dataPoke.name}</h3>
        <p>#{dataPoke.id}</p>
      </li>
      { activePopup && 
      <div className='popup'>
        <img src={popupData?.sprites?.front_default} alt={popupData.name} />
        <div>
          <h3>{popupData?.name}</h3>
          <span>#{popupData?.id}</span>
          <div>height Type</div>
          <div>weight Abilities</div>
        </div>
        <button onClick={()=>setActivePopup(false)}>close</button>
      </div>
      }
    </>
  )
}

export default Item