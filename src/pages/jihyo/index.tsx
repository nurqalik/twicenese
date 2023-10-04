import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `Jihyo revealed that she was born in Sutaek-dong of Guri because it was incorrectly stated as Inchang-dong in Namuwiki.`,
  `She was originally set to debut in the girl group 6mix, along with Nayeon and Jeongyeon. Sana was later added to the group.`,
  `She is left-handed but she writes and draws with her right hand. She is actually ambidextrous.`,
  `In 2022, she also learns to play golf with right-handed clubs.`,
  `She joined JYPE on the same day as Sunmi, who was in Wonder Girls, but is 3 years older than her.`,
  `She was criticized for her weight during trainee days.`,
  `Jihyo had been a trainee under JYP for over 10 years (10 years and 2 months), but she was initially training to be an actress, just like Dahyun.`,
  `Almost all JYP members that entered the company before 2015 saw her grow.`,
  `Jihyo’s favorite Pokemon is Jigglypuff. She claims that Jigglypuff is another doppelgänger of hers.`,
  `She has two younger sisters.`,
  `She legally changed her name from Ji-soo to Ji-hyo before Sixteen.`,
  `She has the loudest voice in the group.`,
  `Due to her pineapple allergy, she doesn’t eat pineapple.`,
  `Her stress relief is karaoke.`,
  `She participated in the "Eye Eye Eyes" from the mini-album Signal with Chaeyoung in writing lyrics`,
  `She wrote the lyrics for "24/7" with Nayeon for the Twicetagram album.`,
  `She wrote the lyrics for the song ''HO!'' from their mini-album What Is Love?`,
  `Her zodiac sign is Aquarius.`,
  `Her favorite color is red.`,
  `She cannot eat raw foods.`,
  `Her hobbies are web-surfing and reading webtoons.`,
  `Her ideal type is someone who she can show her true self to; someone she can be most comfortable with.`,
  `Being the main vocalist, she has had several collaborations and special stages showcasing her abilities.`,
  `She does not (as much) like giving or receiving affection to other members.`,
  `She had an injury to, and arthroscopic surgery on her knees during her promotion in Knock Knock era which halted all her activities with her members, that included the trip to Switzerland with the group.`,
  `She is close with Yerin from GFriend.`,
  `She is also close with Kim Sejeong.`,
  `She was in a relationship with Kang Daniel between August 2019 and November 2020.`,
  `It was also revealed they were introduced through 2AM's Seulong.`,
  `KARD's Jiwoo went to high school with Jihyo.`,
  `TMI: “Can I really share too much information? I’ve prepared yarn at our dorm to knit this winter too.” `,
  `Jihyo says she was often mistaken as a foreigner when she was young.`,
  `People said that Jihyo looks like Thomas the Tank Engine.`,
  `Jihyo revealed that she was the only girl in her town back when she was 4 and she revealed that she peed in the walls in the neighborhood along with 3 other boys making her mother laugh.`,
  `Although she was tested as ISFP-T by 16 personalities, she could well be mistyped despite being socially introverted. By cognitive functions: She would had great problems getting things done, but she is actually very results driven. She further suggested the point when she revealed on 2wice that she is quite adventurous by going out alone and learning to play golf and to ski in winter.`,
  `She is also ultra-competitive.`,
  `She has a mole on the tip of her nose.`,
  `South Korean dance troupe "La Chica" frequently praise Jihyo when reacting to the TWICE dances they've choreographed. Member Rian even cites Jihyo as her favorite female idol dancer, saying she dances with power while still retaining detailed movements.`,
  `Even as of 2022, she is the only member to had competed in King of Masked Singer.`,
  `As of 2022, she is the only member to had LASIK surgery to correct her vision.`,
];

const Jihyo = () => {
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
            src={"/Jihyo/head1.jpg"}
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
            <div className="font-montserrat text-3xl font-bold">Jihyo</div>
            <p className="font-roboto text-sm font-light">
              Park Ji-hyo (Hangul: 박지효, born as Park Ji-soo), better known by
              her first name, Jihyo (Hangul: 지효), is a South Korean singer and
              dancer, she is the leader and main vocalist of Twice. Jihyo is the
              2nd member of TWICE who debuted as a soloist, following Nayeon who
              debut in 2022.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Chinese: 朴志效, Japanese: ジヒョ</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Park Ji Soo (박지수)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>February 1, 1997 (age 26)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>Sutaek-dong, Guri, Gyeonggi-do, South Korea</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>160cm</td>
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
                  <td>O</td>
                </tr>
                <tr>
                  <td>MBTI</td>
                  <td className="px-2">:</td>
                  <td>ISFP-T</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Leader, Main Vocalist</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#ffc56e]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#ffc56e]">Jively</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🦄</td>
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
                      src={"/signature/JH.png"}
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
                Jihyo was born on February 1, 1997 in Guri, Gyeonggi, South
                Korea with her birth name, Park Ji-soo. She legally changed her
                given name to Ji-hyo when she was 18 years old. Her family
                consists of her parents and two younger sisters, Seoyeon and
                Jiyoung. <br />
                <br />
                <span>
                  {" "}
                  When Jihyo was a third grader, she participated in a contest
                  on Junior Naver for a child role. After she won second place,
                  she was scouted by JYP Entertainment. She officially joined
                  the company on July 15, 2005, and was a trainee for over 10
                  years. Jihyo was known mostly pre-debut as the face of
                  Innisfree&apos;s teen line &quot;TN&quot; with boy band
                  Boyfriend and later with future group mate Nayeon. She was set
                  to debut in the girl group 6mix along with future group mate
                  Nayeon, Jeongyeon and Sana and some ex-trainees, prior to
                  competing on Sixteen, but the project was cancelled.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  On August 18, 2023, Jihyo released her first debut album,
                  Zone. She received her first music show win for Killin&apos;
                  Me Good on August 25.
                </span>{" "}
                <br />
                <br />
                <div className="mb-4 text-center font-montserrat text-3xl font-bold">
                  Personal Life
                </div>
                <span>
                  {" "}
                  On August 5, 2019, JYPE had confirmed that Jihyo was currently
                  dating Kang Daniel. It was also revealed that 2AM member
                  Seulong introduced him and Jihyo to each other.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  On November 10, 2020, JYPE confirmed that the couple had
                  broken up due to busy schedules.
                </span>{" "}
                <br />
                <br />
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
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#ffc56e]"
                      >
                        Park Jin Young - Fire (ft. Conan O&apos;Brien, Steven
                        Yeun, & Jimin Park)
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
                          "https://open.spotify.com/album/1GIkapvyAw5lwdNw66hI44?si=r3oLeD72RQuJ8LK_Udoi6A"
                        }
                        target="_blank"
                        className="hover:text-[#ffc56e]"
                      >
                        Zone(2023)
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
                        className="hover:text-[#ffc56e]"
                      >
                        &quot;Daring Women&quot; (with Nayeon, Chaeyoung and
                        Tzuyu) (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/oVN5jiwby1A?si=KaRhFKjl61fTNpxt"
                        }
                        target="_blank"
                        className="hover:text-[#ffc56e]"
                      >
                        &quot;Stardust Love Song&quot; (Twenty-Five Twenty-One
                        OST) (2022)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/l4qYo13TSdY?si=tffiiuHhpDQihJ5_"
                        }
                        target="_blank"
                        className="hover:text-[#ffc56e]"
                      >
                        &quot;I Fly&quot; (Today&apos;s Webtoon OST) (2022)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/eREbRbw2MJc?si=5U66r9sJ6SQ0mHU8"
                        }
                        target="_blank"
                        className="hover:text-[#ffc56e]"
                      >
                        &quot;A Strange Day&quot; (Summer Strike OST) (2022)
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
                      &quot;Inkigayo Music Crush Part.1&quot; (with Ben, Jeong
                      Eun Ji) (2016)
                    </li>
                    <li className="py-2">
                      Inkigayo - All for You - REPLY 1997 OST (With NCT U
                      Doyoung) (2016)
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/7ns79MgJJQY?si=-fcjFWRsUmrHth1v"
                        }
                        target="_blank"
                        className="hover:text-[#ffc56e]"
                      >
                        &quot;I&apos;LL SHOW YOU&quot; - K/DA (With Nayeon,
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
                Jihyo doesn&apos;t appear to have any pets of her own
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8 mt-2"></div>
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

export default Jihyo;
