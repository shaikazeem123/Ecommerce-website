
import './CSS/ItemCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Items from '../components/Items/Items'
const ItemCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  // console.log(all_product);
  return (
    <div className='shop-category'>
      <img className='itemcategory-banner'      src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
       <p>
        <span>Showing 1-12</span> out of 36 products
       </p>
       <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
       </div>
      </div>
      <div className="shopcategory-products">
        {/* {console.log(all_product)} */}
      {all_product?.map((items,i)=>{
       if(props.category===items.category){
       return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
       }else {
        return null; 
      }
      })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ItemCategory