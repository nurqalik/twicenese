import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const twice = [
  {
    name: "Nayeon",
    image: "/Twicenese/NY.png",
    href: "/nayeon",
  },
  {
    name: "Jeongyeon",
    image: "/Twicenese/JY.png",
    href: "/jeongyeon",
  },
  {
    name: "Momo",
    image: "/Twicenese/MM.png",
    href: "/momo",
  },
  {
    name: "Sana",
    image: "/Twicenese/SN.png",
    href: "/sana",
  },
  {
    name: "Jihyo",
    image: "/Twicenese/JH.png",
    href: "/jihyo",
  },
  {
    name: "Mina",
    image: "/Twicenese/MN.png",
    href: "/mina",
  },
  {
    name: "Dahyun",
    image: "/Twicenese/DH.png",
    href: "/dahyun",
  },
  {
    name: "Chaeyoung",
    image: "/Twicenese/CY.png",
    href: "/chaeyoung",
  },
  {
    name: "Tzuyu",
    image: "/Twicenese/TZ.png",
    href: "/tzuyu",
  },
  
]

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={"/Twicenese/BG.png"}
          alt=""
          width={0}
          height={0}
          sizes="100"
          className="hidden md:flex h-[100vh] w-full object-cover"
        />
        <Image
          src={"/Twicenese/BG3.png"}
          alt=""
          width={0}
          height={0}
          sizes="100"
          className="flex md:hidden h-[100vh] w-full object-cover object-bottom"
        />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full md:items-center md:justify-center overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
            <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: true
            }}
            pagination={{clickable: true, dynamicBullets: true}}
            modules={[Pagination, Autoplay]}
            loop={true}
            
            className="flex md:hidden relative top-40 h-[285px]">
              {twice.map((person, index) => {
                return(
                  <>
                  <SwiperSlide key={index}>
                    <div className="md:hidden font-montserrat text-lg font-thin text-center mb-4 text-white">{person.name}</div>
                    <Link href={person.href} className="flex items-center justify-center">
                      <Image src={person.image} alt="" width={0} height={0} sizes="100" className="md:hidden w-auto h-48 mb-14"/>
                    </Link>
                  </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          <div
            className="hidden md:flex absolute h-[317px] w-[58%] overflow-hidden rounded-2xl bg-contain bg-no-repeat text-center"
            style={{ backgroundImage: `url('/Twicenese/BG2.jpg')` }}
          >
            <Link href={"/jeongyeon"}>
              <Image
                src={"/Twicenese/JY.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[44px] top-[75px] h-[104px] w-[69px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/dahyun"}>
              <Image
                src={"/Twicenese/DH.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[124px] top-[70px] h-[110px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/mina"}>
              <Image
                src={"/Twicenese/MN.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[203px] top-[69px] h-[110px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/jihyo"}>
              <Image
                src={"/Twicenese/JH.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[283px] top-[63px] h-[111px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/nayeon"}>
              <Image
                src={"/Twicenese/NY.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[359px] top-[40px] h-[121px] w-[75px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/momo"}>
              <Image
                src={"/Twicenese/MM.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[441px] top-[62px] h-[111px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/sana"}>
              <Image
                src={"/Twicenese/SN.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[520px] top-[69px] h-[111px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/chaeyoung"}>
              <Image
                src={"/Twicenese/CY.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[600px] top-[69px] h-[111px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
            <Link href={"/tzuyu"}>
              <Image
                src={"/Twicenese/TZ.png"}
                alt=""
                width={0}
                height={0}
                sizes="100"
                className="absolute left-[678px] top-[75px] h-[110px] w-[71px] cursor-pointer brightness-75 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-100 hover:duration-500"
              />
            </Link>
          </div>
            <Image src={'/logo/dark.png'} alt="" width={0} height={0} sizes="100" className="md:hidden w-8 h-8 absolute top-28 left-[200px]" />
            <div className="font-montserrat font-light text-sm absolute bottom-0 text-white md:hidden left-[175px]">&copy;Roe 2023</div>
        </div>
      </div>
    </>
  );
}
