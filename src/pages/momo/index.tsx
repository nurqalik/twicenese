import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `She was the only eliminated member of SIXTEEN to be brought back to debut as a member of Twice.`,
  `She loves food, her favorite dish is jokbal and Chinese yam, but not together.`,
  `She is petrified of heights and needles, but she tried to pin needles on her ear when preparing Twicecoaster: Lane 1 album.`,
  `She loves mayonnaise and fizzy drinks but she hates melon and cucumber.`,
  `She made an appearance in a Girls' Generation documentary when she was 15.`,
  `Momo is scared of roller coasters and fireworks.`,
  `Her zodiac sign is Scorpio.`,
  `She has 3 family dogs, who are named Petco, Pudding, and Lucky, they are all females. In May 2020, Momo announced that she now owns another dog named Boo.`,
  `Momo's favorite Pokemon are Psyduck and Zigzagoon.`,
  `She is allergic to dogs. When Momo touches dog fur, she has reactions of itchy skin.`,
  `Her ideal type is someone who eats well (but not overweight); someone who loves jokbal.`,
  `In January 2020, it was announced that Momo is dating Heechul of Super Junior.`,
  `Her waist was measured on Weekly Idol and it was shown to be 22 inches.`,
  `When she received her first paycheck, she ate delicious things.`,
  `When she can't sleep, she watches K-dramas.`,
  `Since she likes dolls and lifesized stuffed toys, her and Jeongyeon's room is filled with them.`,
  `Since she sleeps without drying her hair, Jeongyeon does it for her.`,
  `At one of the MNET Backstage interviews, she forgot how to speak Japanese.`,
  `She said if she was a boy she would date Chaeyoung.`,
  `She likes the color pink.`,
  `Her blood type was unknown for a long period of time, so the rest of the members had a bet on who could guess her blood type. (Twice's Elegant Private Life Ep. 2)`,
  `Momo learned all swimming styles from Mina when they went to Jeju Island. Momo was the fastest from the group to pass the JYP basic routine dance exam, which only took her 3 months.`,
  `She loves Barbie a lot. On her birthday (2017) Chaeyoung gave her a Barbie. (MoChaeng TV EP.06)`,
  `On Knowing Brothers she said that she got dumber after she hit her head to a wall during school days.`,
  `Before debut, Momo was told to lose 7kg (15 pounds) before showcase no matter what, so she lost the weight in one week by having nothing but a cube of ice and exercise for the whole week. She eventually succeeded to lose 7kg in the end then gained 7kg back by eating non-stop for the following week!`,
  `In the show Sixteen, Momo was the only one from her team to not know her own blood type, so when they tested her blood all the members who had the same blood type as her celebrated the discovery.`,
  `Momo wrote the lyrics for the song ''Shot Thru The Heart'' along with Mina and Sana for their Summer Nights special album.`,
  `Momo said that Rain had inspired her dream of becoming a K-pop singer.`,
  `She was dubbed one of the "Foreign K-Pop Idols Who Have Amazing Korean Handwriting" along with the other foreign members, Sana, Mina, & Tzuyu.`,
  `Choreographer Lia Kim chose her as "Most Talented Idol Dancer".`,
  `TMI: “My TMI is that I ate a bowl of boiled rice and eel rice today.”`,
  `Her phone is a Samsung Galaxy S9; she also owns an Apple iPhone XR (Red and a Samsung Galaxy Note 10).`,
  `She owns an Apple iPod Touch, a Macbook Air, a pair of AirPods Pro, and a Nintendo Switch.`,
  `She liked Wiz Khalifa feat. Charlie Puth- See You Again because that was the background music being played when she was eliminated on the final episode, but was saved by JYP. Nayeon and Chaeyoung weren't aware of this fact until 2021.`,
  `In May 07 2022, Momo shared with ONCE that she got her ear pierced. Chaeyoung and Sana accompanied her to have it done.`,
];

const Momo = () => {
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
            src={"/Momo/head1.jpeg"}
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
            <div className="font-montserrat text-3xl font-bold">Momo</div>
            <p className="font-roboto text-sm font-light">
              Momo Hirai (Hangul: 히라이 모모, Japanese: 平井もも／ひらいもも
              Hirai Momo), better known as Momo (Hangul: 모모), is a Japanese
              rapper and dancer, active in South Korea. She is the third oldest
              member of the K-pop girl group, Twice, as the main dancer, rapper
              and vocalist.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Chinese: 平井桃, Japanese: モモ</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Hirai Momo (平井もも)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>November 9, 1996 (age 26)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>Kyoto, Japan</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>163cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>49kg</td>
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
                  <td>INFP-T</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Main Dancer, Sub-Vocalist, Sub-Rapper</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#FF8DA1]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#FF8DA1]">Movely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🦝</td>
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
                      src={"/signature/MM.png"}
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
                Early life and career Beginnings
              </div>
              <p className="text-left font-roboto text-sm font-light leading-relaxed">
                Momo was born on November 9, 1996 in Kyotanabe, Kyoto, Japan.
                Her family consists of her parents and older sister by two
                years, Hana Hirai. <br />
                <br />
                <span>
                  {" "}
                  Momo started dancing at a very young age and decided to become
                  a singer because of Amuro Namie and got into K-pop after
                  watching Rain and Lee Hyori. Throughout her young life, she
                  trained at the Step Out Dance Studio and was scouted by JYP
                  Entertainment after they saw a dance video of her and her
                  older sister. Momo and her sister were invited to the 2011 JYP
                  Japan Audition which were held in Osaka (19/11/2011) and Tokyo
                  (25/11/2011). Momo passed the audition, her sister did not.
                  Subsequently, she moved to South Korea to start her JYP
                  traineeship on April 13, 2012 together with TWICE&apos;s Sana.
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
                <br />
                <br />
                <span>
                  {" "}
                  In 2014, she appeared in the music video of Got7&apos;s
                  &quot;Stop Stop It&quot; and the Japanese MV of Junho&apos;s
                  &quot;Feel&quot;. In the following year, s &quot;R.O.S.E&quot;
                  and miss A&apos;s &quot;Only You.&quot;
                </span>
                <br />
                <br />
                <span>
                  {" "}
                  In 2015, Momo became a contestant on the reality girl group
                  survival show, Sixteen. Originally, eliminated in the sixth
                  episode of the series, she was brought back by JYP in the
                  show&apos;s finale, due to him believing that her skills in
                  dance and rapping would complete his girl group, which was
                  named Twice.
                </span>
              </p>
              <div className="font-montserrat text-3xl font-bold">Career</div>
              <p className="text-left font-roboto text-sm font-light leading-relaxed">
                Momo was given the roles of a supporting vocalist, sub-rapper
                and a main dancer in Twice. In October 2015, Twice made their
                debut with the single &quot;Ooh-Aah&quot;, and rose to the title
                of &apos;The Nation&apos;s Girl Group&apos;.
                <br />
                <span>
                  {" "}
                  In the fall of 2016, Super Junior&apos;s Kim Hee-chul and Buzz
                  singer Min Kyung-hoon released a digital single, &quot;Sweet
                  Dream&quot;, under SM Entertainment, with the music video
                  starring Momo and the rest of the Knowing Bros cast.
                </span>
              </p>
              <div className="font-montserrat text-3xl font-bold">
                Personal Life
              </div>
              <p className="text-left font-roboto text-sm font-light leading-relaxed">
                On January 2, 2020, JYPE confirmed that Momo was dating Super
                Junior&apos;s Heechul.
                <br />
                <br />
                <span>
                  {" "}
                  On July 8, 2021, it was confirmed by both JYP Entertainment
                  and Label SJ that the couple had broken up due to busy
                  schedules.
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
                        href={"https://www.youtube.com/watch?v=R_DX64EwH9M"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        GOT7 - &quot;Stop Stop It&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=QHOePrycK8g"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        Junho - &quot;Feel&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=zO9RzrhYR-I"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        miss A - &quot;Only You&quot; (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=9CiqGvRcmbc"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        Wooyoung - &quot;R.O.S.E.&quot; (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        Park Jin Young - Fire (ft. Conan O&apos;Brien, Steven
                        Yeun, & Jimin Park)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=5JbVVlqrreE"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        Heechul X Min Kyung Hoon - &quot;Sweet Dream&quot;
                        (2016)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://youtu.be/95HxqXOUytI"}
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
                      >
                        yukaDD - &quot;Superhero&quot; (2021)
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
                    Soundtrack
                  </div>
                  <ul className="font-roboto text-sm font-normal">
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
                        href={
                          "https://youtu.be/woKq2sD8xho?si=6zKTvocnc9WhqAyE"
                        }
                        target="_blank"
                        className="hover:text-[#FF8DA1]"
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
                        className="hover:text-[#FF8DA1]"
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
                Momo&apos;s original 3 dogs were named Petco, Pudding & Lucky
                🍀, Petco, Pudding & Lucky are all Jack Russell&apos;s are ALL
                Jack Russell&apos;s. MOMO&apos;S NEW ADOPTED DOGS- BOO & DOBBY,
                Both Boo and Dobby are Norwich Terriers 😊 and live in
                TWICE&apos;s dorm ❤️
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8">
                <Image
                  src={"/Momo/lucky.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-48 w-48 rounded-xl object-cover"
                />
                <Image
                  src={"/Momo/petco.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-48 w-48 rounded-xl object-cover"
                />
                <Image
                  src={"/Momo/pudding.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-48 w-48 rounded-xl object-cover"
                />
                <Image
                  src={"/Momo/boodobby.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-48 w-48 rounded-xl"
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

export default Momo;
