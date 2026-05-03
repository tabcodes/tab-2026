
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { SiLaravel, SiMysql, SiPhp, SiPostgresql, SiRubyonrails, SiSidekiq, SiTailwindcss } from "react-icons/si";
import { DiJsBadge, DiRuby } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { FaPython, FaGitSquare, FaFlask, FaReact } from "react-icons/fa";

const IconSlider = (): React.ReactNode => {

    const IconSet: React.ReactNode[] = [
        <SiLaravel className="text-center mx-auto text-6xl text-slate-700" />,
        <SiPhp className="text-center mx-auto text-6xl text-slate-700" />,
        <DiRuby className="text-center mx-auto text-6xl text-slate-700" />,
        <SiRubyonrails className="text-center mx-auto text-6xl text-slate-700" />,
        <FaPython className="text-center mx-auto text-6xl text-slate-700" />,
        <RiNextjsLine className="text-center mx-auto text-6xl text-slate-700" />,
        <BsTypescript className="text-center mx-auto text-6xl text-slate-700" />,
        <DiJsBadge className="text-center mx-auto text-6xl text-slate-700" />,
        <FaGitSquare className="text-center mx-auto text-6xl text-slate-700" />,
        <FaFlask className="text-center mx-auto text-6xl text-slate-700" />,
        <SiSidekiq className="text-center mx-auto text-6xl text-slate-700" />,
        <SiMysql className="text-center mx-auto text-6xl text-slate-700" />,
        <SiTailwindcss className="text-center mx-auto text-6xl text-slate-700" />,
        <SiPostgresql className="text-center mx-auto text-6xl text-slate-700" />,
        <FaReact className="text-center mx-auto text-6xl text-slate-700" />
    ]
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={5}
            loop={true}
            speed={1500}
            autoplay={{
                delay: 750,
                disableOnInteraction: false,
            }}
        >
            {IconSet.map((icon, index) => (
                <SwiperSlide key={index}>
                    {icon}
                </SwiperSlide>
            ))}
        </Swiper>

    )

}

export default IconSlider;