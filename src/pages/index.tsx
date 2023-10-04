import Image from "next/image";
import Link from "next/link";

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
          className="h-[100vh] w-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div
            className="relative h-[317px] w-[58%] overflow-hidden rounded-2xl bg-contain bg-no-repeat text-center"
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
        </div>
      </div>
    </>
  );
}
