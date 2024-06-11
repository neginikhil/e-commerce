import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 6 },
    };
    const slidePrev = ()=> setActiveIndex(activeIndex-1);
    const slideNext = ()=> setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({item})=>setActiveIndex(item);

    const items = [1,1,1,1,1,1,1,1,1,1].map((item)=><HomeSectionCard />)
  return (
    <div className="relative px-4 lg:px-8 border">
    <div className='relative p-5'>
      <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
        disableDotsControls
        onSlideChange={syncActiveIndex}
        activeIndex={activeIndex}
    />
    {activeIndex!==items.length-5 && 
    <Button className='z-50' onClick={slideNext} variant='conatined' sx={{position:"absolute", top:"8rem", right:"0rem", transform:"translateX(35%) rotate(90deg)"}} aria-label='next'>
    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
    </Button>}

    {activeIndex!== 0 && 
    <Button className='z-50' onClick={slidePrev} variant='conatined' sx={{position:"absolute", top:"8rem", left:"0rem", transform:"translateX(-35%) rotate(-90deg)"}} aria-label='next'>
    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
    </Button>}
    </div>
    </div>
  )
}

export default HomeSectionCarousel
