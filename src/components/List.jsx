import React from 'react'
import Item from './Item'

const List = ({ data }) => {
  return (
    <div className='list-content'>
      <ul className='main-list'>
        {
          data.results?.map((item, index) => (
            <Item key={index} item={item} />
          ))
        }
      </ul>
    </div>
  )
}

export default List