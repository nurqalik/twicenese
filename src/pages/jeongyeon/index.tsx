import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  "She auditioned for JYP when she was young, but failed to become a trainee. She tried again at JYP Entertainment’s 6th Open Audition on March 1, 2010 and this time succeeded. Jeongyeon was accepted by both SM and JYP Entertainment on the same day, but chose to join JYP.",
  `Jeongyeon trained to become a K-pop idol for five years.`,
  `She officially changed her name to "Yoo Jeong-yeon" in the third grade because she was teased for her birth name "Yoo Kyung-wan" being too masculine.`,
  `She is the younger sister of the actress Gong Seung-yeon. Her sister appeared in the show Sixteen meeting with Jeongyeon and giving her advices.`,
  `Since her hiatus last year, she moved in with Seungyeon. Seungyeon is also a homebody.`,
  `Jeongyeon and KARD's Somin are cousins. Jeongyeon is the niece of Somin's father's younger brother's wife.`,
  `She loves to play with Legos, she has a Lego collection at her dorm.`,
  `Her zodiac sign is Scorpio.`,
  `She is in charge of cleaning the dorm since she likes cleaning.`,
  `Her ideal type is someone who makes her feel comfortable; someone funny who can amuse her.`,
  `Chaeyoung and her are called the No Jam Brothers, because they always make the coldest jokes.`,
  `She officially became a Twice member on October 20, 2015.`,
  `Her favourite instrument is the saxophone.`,
  `Her favourite food is: Tteokbokki, meat, and golbangee muchim.`,
  `Her favourite colours are black and purple.`,
  `Jeongyeon's favorite Pokemon is Bulbasaur.`,
  `She loves watching videos of people eating food while chatting to the camera or with another person.`,
  `She doesn't like affection as much as the rest of the members.`,
  `She likes jump roping and running.`,
  `It took Jeongyeon 3 years to pass the JYP basic routine dance exam.`,
  `She worked in a bakery shop after the disbandment of 6mix`,
  `She loves her bakery job so much that she thought of opening her own bakery shop.`,
  `She also worked as a barista in her friend's café during her second hiatus. While working as a barista nobody recognized her.`,
  `She wrote the lyrics of the song ''Love Line'', from their first full-length alboum Twicetagram. She said the song was about a guy from her elementary school.`,
  `She also wrote the song ''Sweet Talker'' along with Chaeyoung, from their mini-album What Is Love?`,
  `Somin from KARD revealed on an interview about her special relationship with Jeongyeon, which she is in fact the niece of Somin's father's younger brother's wife.`,
  `She shares a memory of her grandmother on “Eat In Style”`,
  `She and Bona of WJSN were linking arms and having quite a serious conversation towards the end of the 2017 Seoul Music Awards ceremony.`,
  `Jeongyeon is distinguished for her short hair and girl crush vibe, she is known to attract female fans to Twice.`,
  `Her favourite foods are ddeokbokki, meat, and golbangee muchim. She doesn't like lotus, though.`,
  `She shares a room with Momo.`,
  `Jeongyeon's favourite number is 0.`,
  `Jeongyeon is ambidextrous, meaning that she can write with both her left and right hand.`,
  `Jeongyeon was voted in second place, after Jihyo, to become Twice's leader.`,
  `The happiest part of Jeongyeon's day is taking off her contact lenses.`,
  `She bought all of her members matching necklaces for their 3rd anniversary which each cost 580,000 KRW ($515).`,
  `In a VLive in August 2020 with Jihyo, she revealed that she is very sentimental, and have kept every letter that the members have written even since their trainee days.`,
  `She is known for scolding everyone especially Momo who was in charge of emptying the dehumidifier but she filled it with water instead and Sana for putting a toner so loud.`,
  `Min Kyung-hoon said that he likes Jeongyeon. She sat with him twice in the show Knowing Bros.`,
  `She likes Jang Hoon so much that he picked her twice but when Sana asked him a question, he answered and he made a choice to pick Sana instead of Jeongyeon. She then pulled a prank later on by pretending to cry in the studio and left. She returned with a hand letter that said "This was a candid-camera for Jang Hoon" causing everyone to celebrate.`,
  `Jeongyeon remembered that she was surprised by a passenger with a kid while she flushed the toilet. She stated the she was rushed but she forgot to lock the bathroom door.`,
  `She once took a picture of every room's mess and send it throughout their group chat and forced them to clean their messy room. Nayeon remembered that she gave them a list of their places to be cleaned and called them for an urgent meeting at 8:00pm in their living room.`,
  `A long time Apple user, she switched to using a Samsung Galaxy Flip 3 and S21+ during her second hiatus, but still uses them on her return in 2022.`,
];

const Jeongyeon = () => {
  return (
    <div className="flex">
      <div className="mb-24 mt-10 flex h-full w-full items-center justify-center overflow-y-auto px-16 md:px-24">
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
            src={"/Jeongyeon/head1.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="h-40 w-auto md:h-[480px] md:w-[720px] rounded-xl object-cover"
          />
          <div
            className="flex flex-col items-center justify-center gap-y-4 text-center section"
            id="bio"
          >
            <div className="font-montserrat text-3xl font-bold">Jeongyeon</div>
            <p className="font-roboto text-sm font-light">
              Yoo Jeong-yeon (Hangul: 유정연, originally named Yoo Kyung-wan)
              better known by her first name, Jeongyeon (Hangul: 정연) is a
              South Korean singer. She is a member of the girl group, Twice, as
              a lead vocalist of the group.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Chinese: 俞定延, Japanese: ジョンヨン</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Yoo Kyung-wan (유경완)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>November 1, 1996 (age 26)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>Suwon, South Korea</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>168cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>50kg</td>
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
                  <td>Lead Vocalist</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#abbc6a]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#abbc6a]">Jeongvely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🐶</td>
                </tr>
                <tr>
                  <td>Instrument(s)</td>
                  <td className="px-2">:</td>
                  <td>Trumpet, Saxophone, Recorder</td>
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
                      src={"/signature/JY.png"}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100"
                      className="h-24 w-auto md:h-[216px] md:w-[344px]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-40 flex flex-col gap-y-4 section" id="career">
              <div className="font-montserrat text-3xl font-bold">
                Life and career
              </div>
              <p className="text-left font-roboto text-sm font-light leading-relaxed">
                Jeongyeon was born on November 1, 1996 in Suwon, South Korea and
                was given the name Kyung-wan, at birth, due to being teased as a
                child, for this sounding like a boy&apos;s name, she legally
                changed her name to Jeong-yeon in the third grade. Her father is
                Yoo Chang-joon, who works as a chef for former president Kim
                Dae-jung, her mother&apos;s identity has not been revealed to
                the public. Jeongyeon has two older sisters, the eldest one is
                known professionally as Gong Seung-yeon and is an actress, the
                second eldest is named Yoo Seo-yeon and is an office worker.{" "}
                <br />
                <br />
                <span>
                  {" "}
                  Jeongyeon trained to become a singer from a young age, and
                  also learnt to play the trumpet and saxophone.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  Jeongyeon joined JYP Entertainment in JYP Entertainment&apos;s
                  6th Open Audition on March 1, 2010. Like Nayeon, Jihyo and
                  Sana, JYP originally planned her to become a member of a girl
                  group named 6Mix, but their debut was unfortunately cancelled.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  Jeongyeon made her breakthrough in 2015 as a contestant on the
                  reality girl group survival show Sixteen and was finally
                  chosen as a member of Twice.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  In 2014, she appeared with Nayeon in the music video of
                  Got7&apos;s &quot;Girls Girls Girls&quot; and, in 2015,
                  appeared in miss A&apos;s &quot;Only You&quot; music video.
                  She and her sister were the hosts of Inkigayo from July 3,
                  2016 to January 22, 2017. Jeongyeon won the Female Rookie
                  Award at the 2016 SAF SBS Entertainment Awards.
                </span>
              </p>
            </div>
            <div className="mt-40 flex flex-col section" id="filmograph">
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
                        href={"https://www.youtube.com/watch?v=2sAoKmg7qPI"}
                        target="_blank"
                        className="hover:text-[#abbc6a]"
                      >
                        GOT7 - Girls Girls Girls
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=5rAfyWWP2Ps"}
                        target="_blank"
                        className="hover:text-[#abbc6a]"
                      >
                        Jun. K - No Love
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=zO9RzrhYR-I"}
                        target="_blank"
                        className="hover:text-[#abbc6a]"
                      >
                        miss A - Only You
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#abbc6a]"
                      >
                        Park Jin Young - Fire (ft. Conan O&apos;Brien, Steven
                        Yeun, & Jimin Park)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-40 flex flex-col section" id="discograph">
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
                    <li className="py-2">
                      Gong Seung Yeon + Jeongyeon - Like A Star (&quot;My Dream
                      Class&quot; movie)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-40 flex flex-col gap-y-8 section" id="pets">
              <div className="font-montserrat text-3xl font-bold">
                Pets
              </div>
              <p className="font-roboto text-sm font-light">
                Jeongyeon has 3 pets being all different breeds named, Bbosong,
                Nanan & Bami. While Bbosong is a is an adorable frosty little
                white pomeranian 🤍, Nanan is a member of the Puddle family and
                Bami a Scottish Fold 🏴󠁧󠁢󠁳󠁣󠁴󠁿🐱
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-6 mt-2">
                <Image
                  src={"/Jeongyeon/bbosong.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-64 w-64 rounded-xl object-cover"
                />
                <Image
                  src={"/Jeongyeon/nanan.jpeg"}
                  alt="nereri"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-64 w-64 rounded-xl object-cover"
                />
                <Image
                  src={"/Jeongyeon/bami.jpeg"}
                  alt="nereri"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-64 w-64 rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="mt-40 flex flex-col gap-y-2 section" id="funfacts">
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

export default Jeongyeon;
