import React from 'react'
import './NewCollections.css';
import new_collections from '../Assets/new_collections'
import Items from '../Items/Items';
const NewCollections = () => {
  return (
    <div className='Newcollections'>
     <h1>NEW COLLECTIONS</h1>
     <hr />
     <div className="collections">
     {new_collections.map((items,i)=>{
        return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
     })}
     </div>
    </div>
  )
}

export default NewCollections