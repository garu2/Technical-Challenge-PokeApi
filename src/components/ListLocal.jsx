import React from 'react'
import Form from './Form'

const ListLocal = ({ data }) => {
  console.log('data: ', data)

  
  return (
    <>
      <div className='list-content'>
        <ul className='main-list'>
          {
            data?.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>#{item.id}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <Form />
    </>
  )
}

export default ListLocal