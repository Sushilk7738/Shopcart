import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";


const Home = ()=>{
    return(
        <Layout>
            <div>
                <header>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <img 
                                src="/images/f.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                src="/images/f2.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                src="/images/f3.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                src="/images/f4.jpg"
                            />
                        </SwiperSlide>

                    </Swiper>
                </header>
            </div>
        </Layout>
    )
}

export default Home