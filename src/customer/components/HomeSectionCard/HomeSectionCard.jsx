import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
            <img className="object-top object-cover h-full w-full" src="https://imagescdn.peterengland.com/img/app/product/3/39671502-13600981.jpg?auto=format&w=390" alt="" />
        </div>
        <div className ="p-4">
            <h3 className='text-lg font-medium text-gray-900'>Peter England</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Cream Textured Formal Kurta</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
