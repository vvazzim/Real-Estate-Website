import { useState } from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const PropertyThumbnailSlider = ({photos}) => {
     const [thumbsSwiper,setThumbsSwiper]=useState(null);

    return (
 <Swiper
                 style={{
                "--swiper-navigation-color":"#fff",
                 "--swiper-pagination-color":"#fff"}}
                 loop={true}
                 navigation={true}
                 thumbs={{swiper:thumbsSwiper && !thumbsSwiper.destroyed?thumbsSwiper:null}}
                 modules={[FreeMode,Navigation,Thumbs]}     
                 className="mySwiper2"            >

    </Swiper>
     );
};
 
export default PropertyThumbnailSlider;