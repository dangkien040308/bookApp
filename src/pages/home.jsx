import ToggleHeart from "../component/toggleHeart"


export default function Home({bookData , value}) {
  console.log(bookData)
  if (!bookData || !bookData.items) {
    return <div>Loading ....</div>
  }

  const firstChar = (value && value[0].toUpperCase() ) 
  const restChars = (value && value.slice(1,value.length + 1) ) 
  const newString = (value ? firstChar + restChars : 'Empty')

  return (
    <>
     <div className="p-5 mr-5 text-6xl text-[blue] font-[600]">{newString}</div>
     <div className="flex justify-between flex-wrap p-5 gap-2">
       {bookData.items?.map((item,key) => (
        <div key={key} className="w-[20%] flex items-center justify-start flex-col p-2 hover:bg-[#D3E7ED] border-2 border-[#fff] hover:border-[#77B5C8] cursor-pointer rounded-lg">
            <img className="h-[200px] object-cover rounded-2xl" src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : '' } />
            <span className="block mt-2 text-xl font-[600] text-center text-[#375288]">{item.volumeInfo.title && item.volumeInfo.title}</span>
            <div className="flex items-center justify-between w-[80%] mt-2">
              <span className="block italic text-center mr-2 ">{item.volumeInfo.authors ? item.volumeInfo.authors[0] : '' }</span>
              <ToggleHeart item={item} />
            </div>  
           
         </div>
       ))}
     </div>
    </>
    
  )
}