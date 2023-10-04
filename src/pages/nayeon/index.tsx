import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `Nayeon was originally set to debut in the girl group 6mix with Jeongyeon, Jihyo and Sana.`,
  `She's one of the most popular members in Korea.`,
  `When she was a kid, Nayeon entered a child model contest and got cast by JYP. At the time, her mom refused to let her attend the audition, but 10 years later, in 2010, instead of entering a cram school to study harder, Nayeon secretly attended JYP Entertainment's 7th Open Audition and became a trainee.`,
  `She was the first Sixteen member to be announced and also the first member to be confirmed in Twice.`,
  `She is cheerful and always tries to stay positive.`,
  `She is able to remember dances and songs very quickly.`,
  `However: She struggles with remembering lyrics and scripts.`,
  `Nayeon's favorite Pokemon is Squirtle. She also claims the she looks like Squirtle.`,
  `Her zodiac sign is Virgo.`,
  `She has a younger sister named Im Seo-Yoon.`,
  `She has the largest hands and feet relative to her height.`,
  `Her favorite songs are “When I Was Your Man” by Bruno Mars and “Just A Little Bit of Your Heart” by Ariana Grande.`,
  `Her favorite colors are beige, sky blue, and khaki.`,
  `She is called by fans a "fake maknae".`,
  `She is scared of fireworks.`,
  `She is close friends with BLACKPINK’s Jisoo and Jennie since predebut.`,
  `Both Nayeon and Jisoo can understand English well, even though they can't speak fluently.`,
  `Her left leg is weak due to her being in a car accident when she was still in her childhood days.`,
  `She cannot eat sushi that isn’t salmon sushi and also cannot eat chicken feet.`,
  `She like sweet foods.`,
  `One of her hobbies is to collect lipsticks and she has a collection of them. Hence her nickname, "lipstick holic" gained during her SIXTEEN days.`,
  `When Nayeon got her first paycheck, she gave it all to her parents.`,
  `She is a big fan of Girls Generation's Taeyeon, F(x)'s Krystal, and IU.`,
  `Despite her MBTI being tested ISTP, she is not good with tools in hand. She once cut strawberries with the back of a paring knife, leading to wastage and poor presentation.`,
  `She is the only "Thinker" in the group (XXTX).`,
  `She sleeps with her eyes open.`,
  `Her favourite sport is badminton.`,
  `She would like to babysit one day.`,
  `She says whatever is on her mind.`,
  `She currently attends Konkuk University.`,
  `During her special live on her birthday, Red Velvet's Yeri called her.`,
  `Her dog was named Kukkukk by Chaeyoung.`,
  `She wrote the song ''24/7'' along with Jihyo from their full-length album Twicetagram.`,
  `She loves to talk with dolls. Like a lot. Members love to make fun of it.`,
  `During an encore of TWICE’s song “Likey,” Nayeon and Yeri were spotted cutely rocking the choreography on stage together.`,
  `TMI: “I put my hair short. It was originally attached with a long length, but it was always the same, so I put it a little shorter.”`,
  `Her favorite movie is Eternal Sunshine Of The Spotless Mind, having seen it multiple times`,
  `In the Fandom, Nayeon is part of the Snake Trinity with Sana and Mina`,
  `Her phone is an Iphone 11 (Purple)`,
  `Nayeon owns a Nintendo Switch, just like Momo, Jihyo, Jeongyeon and Mina`,
  `She has a dog named Kookeu`,
  `She is really good at Chinese whispers by lip-reading.`,
  `According to Jeongyeon: She suffers from rhinitis. It gets really bad at times.`,
  `She likes oil, so much so that she would eat butter right from the block, or slurp olive oil right from the bottle.`,
  `She also likes anything with kimchi.`,
  `She can fold her tongue into flower shape.`,
  `Even before 2WICE's Date with Tzuyu in 2022, she had never eaten out with only one other member, even when she had spent time with another member alone doing other things.`,
  `She prefers wine over spirits, or cocktails containing them, as she was seen spitting cocktails during award shows before.`,
  `She shared the same name as Kim Nayeon, aka SAdness Manager, who was the group's manager from debut until 2018.`,
  `Her eyesight is -2.5`,
];

const Nayeon = () => {
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
            src={"/Nayeon/head1.jpeg"}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="h-[480px] w-[720px] rounded-xl object-cover object-right"
          />
          <div
            className="flex flex-col items-center justify-center gap-y-4 text-center"
            id="bio"
          >
            <div className="font-montserrat text-3xl font-bold">Nayeon</div>
            <p className="font-roboto text-sm font-light">
              Im Na-yeon (Hangul: 임나연, Japanese: イム ナヨン), better known
              by her stage name, Nayeon (Hangul: 나연, Japanese: ナヨン) is a
              South Korean singer. She is the oldest member, lead vocalist and
              face of the girl group Twice. Nayeon is the first member of TWICE
              to debut as a solo artist. Her solo debut was on June 24, 2022.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Chinese: 林娜璉, Japanese: ナヨン</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Im Na-yeon (임나연)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>September 22, 1995 (age 28)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>Seoul, South Korea</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>163cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>48kg</td>
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
                  <td>ISTP-A</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Lead Dancer, Lead Vocalist, Center</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#5BC2E7]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#5BC2E7]">Navely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🐰</td>
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
                      src={"/signature/NY.png"}
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
                On September 22, 1995 in Seoul, South Korea, Nayeon was born
                into a Christian family that consists of her parents and younger
                sister by three years, Im Seo-yoon. <br />
                <br />
                <span>
                  {" "}
                  Nayeon secretly tried out and passed JYP Entertainment&apos;s
                  7th Open Audition and became a trainee on September 15, 2010.
                  In 2013, she was cast as a member of 6mix, a JYP girl group
                  that was planned but never debuted. Prior to Sixteen and her
                  debut as a member of Twice, she appeared in few television
                  advertisements and in several music videos of her label mates,
                  including Jun. K&apos;s &qout;No Love&qout;, Got7&apos;s
                  &qout;Girls Girls Girls&qout; and miss A&apos;s &qout;Only
                  You.&qout; She also made a cameo appearance in the second
                  episode of KBS2&apos;s 2012 Korean drama Dream High 2. In
                  2017, she, along with Nichkhun, starred in the music video of
                  Jun. K&apos;s &qout;Your Wedding&qout;.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  On May 19, 2022, a teaser photo was posted on TWICE&apos;s
                  social media accounts announcing that Nayeon will be making
                  her solo debut with her first mini album, Im Nayeon, on June
                  24, 2022.
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
                    TV Drama
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li>Dream High 2 - Ep 2 as cameo student (pre-debut)</li>
                  </ul>
                </div>
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
                        href={
                          "https://youtu.be/8TeeJvcBdLA?si=z39eLAnvfQOtqEgB"
                        }
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Miss A - &qout;Bad Girl, Good Girl&qout; backup dancers
                        (2010)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=KyhNRnABBCM"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        San E - &qout;Please Don&apos;t Go&qout; (2011)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=2sAoKmg7qPI"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        GOT7 - &qout;Girls Girls Girls&qout; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=5rAfyWWP2Ps"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Jun. K - &qout;No Love&qout; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=zO9RzrhYR-I"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        miss A - &qout;Only You&qout; (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Park Jin Young - Fire (ft. Conan O&apos;Brien, Steven
                        Yeun, & Jimin Park)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=ykLspPsNYtY"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Jun. K - &qout;Your Wedding&qout; (2017)
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
                    Mini Albums
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={
                          "https://open.spotify.com/album/0wqjfojWuTcbEvwaizvTMw?si=lB28z7ACSrahJ33b5lWKGw"
                        }
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        &qout;Im Nayeon&qout;(2022)
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Soundtrack
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=Cnex1TJzqAc"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        &qout;Daring Women&qout; (with Nayeon, Chaeyoung and
                        Tzuyu) (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      Participated in JYP Nation concert theme song - ENCORE.
                      (2016)
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Vocal Covers
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=K_wlWUtbyAY"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Nayeon - Only Longing Grows 그리움만 쌓이네 (For Once
                        and Mina&apos;s Birthday present)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=XO9GiPOLd3I"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Nayeon - Santa Tell Me by Ariana Grande
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://youtu.be/e54YjIvHV8k"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Nayeon - I LOVE... by Official HIGE DANdism Cover Vocals
                        Only
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://youtu.be/zKdT6KHT1jM"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Nayeon - Falling by Harry Styles Cover Vocals Only
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=K4I2bTD7Fh0"}
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        Nayeon - Love Is Everything by Ariana Grande
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Collaborations
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/7ns79MgJJQY?si=-fcjFWRsUmrHth1v"
                        }
                        target="_blank"
                        className="hover:text-[#5BC2E7]"
                      >
                        &qout;I&apos;LL SHOW YOU&qout; - K/DA (With Nayeon,
                        Jihyo, Chaeyoung, Bekuh Boom and Annika Wells)
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
                Nayeon has an adorable light with white-golden haired sunny ☀️
                pomeranian named Kookeu
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8">
                <Image
                  src={"/Nayeon/kookeu.jpeg"}
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

export default Nayeon;
