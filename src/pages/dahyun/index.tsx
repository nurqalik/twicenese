import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `She participated in the writing of the song ''Missing U'' from their first full-length album Twicetagram, along with Chaeyoung.`,
  `Dahyun gained attention when a video of her dancing in church became viral in 2011, earning her the nickname "Eagle Dance Church Sister." On 29 June, 2018, the dance was added to the popular video game Fortnite as a purchasable emote.`,
  `In middle school, she performed a solo in a youth dance festival and was scouted by JYP Entertainment. She passed the audition on July 7, 2012, and officially became a trainee.`,
  `She was one of the most popular contestants during Sixteen.`,
  `She said if she was a boy, she would date Sana because she has a lot of aegyo.`,
  `She is afraid of dogs and cats.`,
  `At her first trainee assessment, she shook so much while singing that she failed.`,
  `Dahyun's favorite Pokemon is Charmander.`,
  `She loves chocolate, especially choco-pie.`,
  `She is the most flexible member.`,
  `She has very pale skin, hence the nickname Dubu.`,
  `She can touch her nose with her tongue. She can also touch her elbow with her tongue.`,
  `She plays piano very well and did various covers of songs.`,
  `Her zodiac sign is Gemini.`,
  `She has one older brother. `,
  `She loves the piano.`,
  `Her favourite colours are red, pink and white.`,
  `She also loves swimming.`,
  `She does not like horror movies and being alone in the dark. She is scared of it.`,
  `She takes the longest in the shower. She usually finishes up to 1 or 2 hours.`,
  `She likes jumping rope.`,
  `Her religion is Christianity.`,
  `On July 7, 2018, Dahyun did not throw her first pitch for LG Twins due to the rain, so she did a slip and slide action at the court instead.`,
  `According to Jeongyeon on VLive, Tzuyu, Dahyun and Mina debuted without doing the dance routine choreography test where every trainee needs to pass.`,
  `During the 2018 Idol Star Athletic Championships, Dahyun got a hug from Dreamcatcher's Gahyeon and Momolands's Taeha.`,
  `TMI: “I dyed my hair yesterday. That’s TMI. I’m going to see ONCE often, so I tried to look pretty for them. I would do anything they like.”`,
  `Dahyun made a surprise appearance on JTBC News on June 2, 2020 as the weather girl. She delivered local weather news and had an interview with the presenter. She also promoted the title track "More & More" on the news channel.`,
  `She has a maltese dog named Ari.`,
  `Dahyun self-taught to play guitar and prepared a cover to surprise ONCE on her birthday. She released the cover 기다리다 (eng:Waiting) by 패닉(eng:Panic) on May 28, 2021.`,
  `Her mother is the same age as JYP.`,
  `Dahyun has poor eyesight and wears -5.5 prescription glasses.`,
  `She has a well known talent for spotting cameras despite this.`,
  `A long time Apple user, she switched to using a Samsung Galaxy Flip 3 and S21+ during her second hiatus, but still uses them on her return in 2022.`,
];

const Dahyun = () => {
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
            src={"/Dahyun/head1.jpeg"}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="h-[480px] w-[720px] rounded-xl object-cover"
          />
          <div
            className="flex flex-col items-center justify-center gap-y-4 text-center"
            id="bio"
          >
            <div className="font-montserrat text-3xl font-bold">Dahyun</div>
            <p className="font-roboto text-sm font-light">
              Kim Da-hyun (Hangul: 김다현), better known by her first name,
              Dahyun (Hangul: 다현), is a South Korean singer, rapper, and
              songwriter. She is a vocalist and the lead rapper of the group.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Dubu (Tofu)</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Kim Da-Hyun (김다현)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>May 28, 1998 (age 25)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>
                    Ginkgo-dong, Jungwon-gu, Seongnam, Gyeonggi-do, South Korea
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>161cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>44kg</td>
                </tr>
                <tr>
                  <td>Years active</td>
                  <td className="px-2">:</td>
                  <td>2015 - Present</td>
                </tr>
                <tr>
                  <td>Blood type</td>
                  <td className="px-2">:</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>MBTI</td>
                  <td className="px-2">:</td>
                  <td>ISFJ-T</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Lead Rapper, Sub-Vocalist</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-gray-100" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-gray-400">Davely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🦅, 🍫</td>
                </tr>
                <tr>
                  <td>Instrument(s)</td>
                  <td className="px-2">:</td>
                  <td>Piano, Guitar</td>
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
                      src={"/signature/DH.png"}
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
                Dahyun was born on May 28, 1998 in Seongnam, Gyeonggi-do, South
                Korea.
                <br />
                <br />
                <span>
                  {" "}
                  Dahyun first gained attention in sixth grade after a video of
                  her at church performing a &quot;head-banging, wing-flapping,
                  and thoroughly irrepressible dance&quot; to Hillsong&apos;s
                  &quot;The Power of Your Love&quot; went viral on YouTube in
                  2011 and earned her the moniker &quot;Eagle Dance Church
                  Sister.&quot; In middle school, she performed a solo in a
                  youth dance festival and was scouted by JYP Entertainment. She
                  auditioned for the company on July 7, 2012, and officially
                  became a trainee. She later appeared in the music video of
                  Got7&apos;s &quot;Stop Stop It&quot; as the main story
                  character and Wooyoung&apos;s &quot;R.O.S.E&quot;. She
                  graduated from Hanlim Multi Art School in February 2017.
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
                    Variety shows
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li>Weekly Idol (2016) - Co-host</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Music video appearances
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=R_DX64EwH9M"}
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        GOT7 - &quot;Stop Stop It&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=9CiqGvRcmbc"}
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        Wooyoung - &quot;R.O.S.E.&quot; Japanese Version (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/on2HSs_uXSw?si=8fA5V3ymAvulOI6M"
                        }
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        Young K (Day6) - &quot;Nothing but(이것밖에는
                        없다)&quot; (2023)
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
                        href={"https://www.youtube.com/watch?v=J3KA6WDAYPM"}
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        Dahyun - &quot;Feel Special&quot; piano (2020.05.28)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=RZQO_e3KVTE"}
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        Dahyun - &quot;기다리다 (패닉)&quot; Vocal & Guitar
                        Cover (2021.05.28)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/watch?v=SY2kZjVEd54&ab_channel=TWICE"
                        }
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        DAHYUN MELODY PROJECT &quot;Monsters (Katie Sky)&quot;
                        Cover by DAHYUN (2022.05.28)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/watch?v=1S-4d1nRUis&ab_channel=TWICE"
                        }
                        target="_blank"
                        className="hover:text-gray-400"
                      >
                        DAHYUN MELODY PROJECT &quot;Good Mood (Adam
                        Levine)&quot; Cover by DAHYUN (2023.05.28)
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
                Dahyun has a cute lil maltese breed dog named Ari~
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8">
                <Image
                  src={"/Dahyun/ari.jpeg"}
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

export default Dahyun;
