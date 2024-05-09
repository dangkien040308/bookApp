import { useState } from "react"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const wishLists = []
export default function ToggleHeart({item}) {
  const [heartSolid,setHeartSolid] = useState(false)
  const [wishLists , setWishLists] = useState([])
  console.log(wishLists)
  return (
    <div className="" 
      onClick={ (item) => {
        setHeartSolid(!heartSolid)
        if (heartSolid) {
          setWishLists(prev =>{ return [item,...prev] })
        } else {
          setWishLists(prev => { if(prev){ prev.shift() } })
        }
      }
    }>
       {heartSolid ? <FaHeart className="text-[green] text-[25px]" /> : <FaRegHeart className="text-[green] text-[25px]"/>}
    </div>
  )
}

