import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `She studied ballet for 11 years before joining Urizip Dance School for more modern dance training.`,
  `Mina was born in Texas but she moved to Japan when she was a toddler. She holds both US and Japanese passports, but must give one up before she turns 22. Otherwise, it will be prohibited from entering Japan for five years When she went back to Hyogo, Japan, she didn't know how to speak Japanese despite it being where she grew up. She also never learnt to speak in Kansai Dialect until she met Momo and Sana in Korea.`,
  `Her English name is Sharon Myōi.`,
  `She was scouted by a JYP Entertainment staff member while shopping with her mother and was invited to join JYP global in 2013.`,
  `She auditioned and joined the trainee program in 2014.`,
  `Mina's favorite Pokemon is Piplup, also a water-type penguin Pokemon.`,
  `She loves Heinz ketchup, it is one of her treasured items.`,
  `She loves to eat eggs with ketchup.`,
  `She is a big fan of CNBlue.`,
  `Her dream was to become a ballerina but it changed when she realized how fun it was to dance to K-pop.`,
  `She is scared of roller coasters.`,
  `Her zodiac sign is Aries.`,
  `She dislikes Plum Blossom and Natto.`,
  `When she relieves stress, she cries.`,
  `When she can't sleep, she goes on her phone.`,
  `She loves the Harry Potter series. Her favorite character is Hermione.`,
  `She cannot eat Beondaegi or Silkworm Pupae.`,
  `She once gave Jeongyeon socks on her birthday.`,
  `According to Jeongyeon on VLive, Tzuyu, Dahyun and Mina debuted without doing the dance routine choreography test where every trainee needs to pass.`,
  `Mina's religion is Catholic.`,
  `One of the reason she is called a penguin is her feet points outward when she walks because of her ballet habit.`,
  `Her fans call her ''Queen of Bridges'' because she sings the bridge of most title tracks and side tracks.`,
  `Mina wrote the lyrics for the song ''Shot Thru The Heart'' along with Momo and Sana for their Summer Nights special album.`,
  `Mina said that she had been introduced to K-pop by a close friend who was a fan of Girls’ Generation. Mina explained, “I didn’t understand what any of the lyrics meant, but I liked the music. Dancing [to their songs] made me feel happy.”`,
  `She was dubbed one of the "Foreign K-Pop Idols Who Have Amazing Korean Handwriting" along with the other foreign members, Momo, Sana, & Tzuyu.`,
  `TMI: “I already started. I’m already knitting in the waiting rooms.”`,
  `Within the Fandom, Mina is part of the Snake Trinity with Sana and Nayeon.`,
  `Her phone is a Silver Iphone 11 Pro, just like Jeongyeon (before 2022) and Tzuyu.`,
  `She also owns a Nintendo Switch, just like Jihyo, Momo, Nayeon, and Jeongyeon.`,
  `Mina loves gaming.`,
  `Whenever she has the time, she plays a lot of games.`,
  `She plays Elsword, Sudden Attack and Minecraft.`,
  `She used to own a Nintendo DS, where she have played Mario Kart a lot.`,
  `She is also a fan of the TV show Stranger Things.`,
  `She has a dachshund dog called Ray.`,
  `Mina said she wanted to collaboration with Ariana Grande.`,
  `Mina's dream car is Aston Martin DB11 She said it's pretty and cool.`,
  `Mina is the only member where Nayeon can't joke around.`,
  `Although being tested as ISFP-T by 16 Personalities, Nayeon noted that she seeks stability, even more so than Jeongyeon, and she also prefers having plans handed to her, so her true type could be the same as Jeongyeon: ISFJ.`,
];

const Mina = () => {
  return (
    <div className="flex">
      <div className="mb-24 mt-10 flex h-full w-full items-center justify-center overflow-y-auto px-24">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Link href={"/"}>
            <Image
              src={"/logo/light.png"}
              alt="Home"
              width={0}
              height={0}
              sizes="100"
              className="mb-10 h-8 w-8"
            />
          </Link>
          <Image
            src={"/Mina/head1.png"}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="h-[480px] w-[720px] rounded-xl object-cover object-left"
          />
          <div
            className="flex flex-col items-center justify-center gap-y-4 text-center"
            id="bio"
          >
            <div className="font-montserrat text-3xl font-bold">Mina</div>
            <p className="font-roboto text-sm font-light">
              Mina Myoui (Hangul: 묘이 미나, Japanese: 名井南 / みょういみな),
              commonly known as Mina (Hangul: 미나), is a Japanese singer. She
              is a member of Twice as a sub-vocalist and a dancer.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Sharon Myoui (American)</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Myoui Mina (名井 南)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>March 24, 1997 (age 26)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>San Antonio, Texas, United States</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>165cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>45.5kg</td>
                </tr>
                <tr>
                  <td>Years active</td>
                  <td className="px-2">:</td>
                  <td>2015 - Present</td>
                </tr>
                <tr>
                  <td>Blood type</td>
                  <td className="px-2">:</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>MBTI</td>
                  <td className="px-2">:</td>
                  <td>ISFP-T</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Main Dancer, Sub-Vocalist</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#51ceb2]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#51ceb2]">Mively</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🐧</td>
                </tr>
                <tr>
                  <td>Instrument(s)</td>
                  <td className="px-2">:</td>
                  <td>Vocals</td>
                </tr>
                <tr>
                  <td>Agency</td>
                  <td className="px-2">:</td>
                  <td>JYP Entertainment</td>
                </tr>
                <tr>
                  <td>Associated acts</td>
                  <td className="px-2">:</td>
                  <td>Twice</td>
                </tr>
                <tr>
                  <td>Signature</td>
                  <td className="px-2">:</td>
                  <td>
                    <Image
                      src={"/signature/MN.png"}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100"
                      className="h-[216px] w-[344px]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-24 flex flex-col gap-y-4" id="career">
              <div className="font-montserrat text-3xl font-bold">
                Life and career
              </div>
              <p className="text-left font-roboto text-sm font-light leading-relaxed">
                Mina Myoui was born to a Japanese couple in San Antonio, Texas,
                USA on March 24, 1997, and she grew up in Kobe, Japan. She has
                one older brother named Kai Myoui.
                <br />
                <br />
                <span>
                  {" "}
                  Mina studied ballet for eleven years before joining Urizip
                  Dance School for more modern dance training. In 2013, she was
                  scouted by a JYP Entertainment staff member while shopping
                  with her mother and was invited to join JYP Entertainment
                  Global. She auditioned in a JYP audition in Japan and joined
                  the trainee program in South Korea on January 2, 2014. In
                  2014–2015, she appeared in the music videos of Got7&apos;s
                  &quot;Stop Stop It&quot;, Junho&apos;s &quot;Feel&quot;,
                  Wooyoung&apos;s &quot;R.O.S.E&quot;, and Miss A&apos;s
                  &quot;Only You&quot;.
                </span>
              </p>
            </div>
            <div className="mt-24 flex flex-col" id="filmograph">
              <div className="mb-4 font-montserrat text-3xl font-bold">
                Filmography
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Television Shows
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li>Sixteen (Mnet)</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Music video appearances
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=QHOePrycK8g"}
                        target="_blank"
                        className="hover:text-[#51ceb2]"
                      >
                        Junho - &quot;Feel&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=zO9RzrhYR-I"}
                        target="_blank"
                        className="hover:text-[#51ceb2]"
                      >
                        miss A - &quot;Only You&quot; (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#51ceb2]"
                      >
                        Park Jin Young - &quot;Fire&quot; (feat. Conan
                        O&apos;Brien, Steven Yeun, & Jimin Park) (2016)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-24 flex flex-col" id="discograph">
              <div className="mb-4 font-montserrat text-3xl font-bold">
                Discography
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Vocal Covers
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/cAvMGWLZCHA?si=omVvcJSsYozo1yJd"
                        }
                        target="_blank"
                        className="hover:text-[#51ceb2]"
                      >
                        MINA MELODY PROJECT &quot;Snowman (Sia)&quot; Cover by
                        MINA (2021.12.19)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/woKq2sD8xho?si=6zKTvocnc9WhqAyE"
                        }
                        target="_blank"
                        className="hover:text-[#51ceb2]"
                      >
                        MISAMO &quot;Do not touch&quot;
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/gAFgaI5D3Gc?si=v6IpzluNEAQMoQKC"
                        }
                        target="_blank"
                        className="hover:text-[#51ceb2]"
                      >
                        MISAMO &quot;Marshmallow&quot;
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-24 flex flex-col gap-y-2" id="pets">
              <div className="mb-4 font-montserrat text-3xl font-bold">
                Pets
              </div>
              <p className="font-roboto text-sm font-light">
                Mina has an adorable male dachshund named &quot;Ray&quot; and
                this is the caption and photo in 2016 for Ray&apos;s 10th bday
                🎂
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8 mt-2">
                <Image
                  src={"/Mina/ray.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-48 w-48 rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="mt-24 flex flex-col gap-y-2" id="funfacts">
              <div className="mb-4 font-montserrat text-3xl font-bold">
                Fun Facts
              </div>
              <div className="flex flex-col gap-y-2 text-left font-roboto text-base font-light">
                {funfact.map((i, index) => (
                  <div key={index}>
                    {index + 1}. {i}
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <SideNav />
    </div>
  );
};

export default Mina;
