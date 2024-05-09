import { Routes , Route, Link, NavLink} from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Home from './pages/home';
import Wishlist from './pages/wishlist';
import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const [search , setSearch] = useState('Popular')
  const [data , setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyD93OmTpaH_qED1wdvmowKLYe35oK9aSwc&maxResults=40`)
      const respone = await res.json()
      console.log(respone,' ',search)
      setData(respone)
      
    }
    fetchData()
  },[search])

  return (
      <div className='py-[30px] px-[25px] bg-[#EFE5DA]'>

        <div className='w-[40%] flex items-center justify-between'>
          <span className='font-[600] text-3xl text-[#4E3D2E]'>BOOK APP</span>
          <div className=' flex items-center justify-between bg-[#F5EFE9] py-[6px] px-[10px] border-2 border-[#eee] rounded-[15px]'>
            <IoIosSearch className='mr-3 text-[25px]' />
            <input onChange={(e) => {setSearch(e.target.value)}} className=' w-[270px] outline-none text-[rgba(12,10,10,0.7)] bg-[#F5EFE9] ' type='text' placeholder='Search for name or author ...' />
          </div>
        </div>

        <div className='flex items-start justify-center mt-[30px]'>
           <div className='flex items-start justify-center flex-col w-[15%]'>
              <NavLink to='/' className='inline-block px-3 py-[4px] hover:bg-[#fff] rounded-xl w-[130px] my-1'>
                 <RiHome2Line className='inline-block mr-2 text-[20px] mb-[5px]' />
                 <span>Home</span>
              </NavLink>
              <NavLink to='/wishlist' className='inline-block px-3 py-[4px] hover:bg-[#fff] rounded-xl w-[130px] my-1'>
                 <MdOutlineFavoriteBorder className='inline-block mr-2 text-[20px] mb-[5px]' />
                 <span>Wishlist</span>
              </NavLink>
           </div>
           <div className='w-[85%] bg-[#fff] rounded-lg'>
              <Routes>
                <Route element={<Home bookData={data} value={search} />} path='/'/>
                <Route element={<Wishlist/>} path='/wishlist' />
              </Routes>
           </div>
        </div>  
      </div>
  )
}

export default App
