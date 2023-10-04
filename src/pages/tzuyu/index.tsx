import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `She is one of the members who was added after eliminations to the final line-up of Twice, alongside with Momo.`,
  `She was seen by entertainment scouts at the MUSE Performing Arts.`,
  `Tzuyu used to go to dog cafes a lot when she was a trainee.`,
  `She is the tallest member in Twice and she is also the calmest member.`,
  `She talks the most with Twice members and friends who are close to her.`,
  `Tzuyu’s favorite Pokemon is Eevee.`,
  `Her favourite number is 25.`,
  `She doesn't take a lot of selfies because others take photos of her anyway.`,
  `She loves all kinds of dogs.`,
  `She has a Pomeranian Chihuahua named "Gucci". Her family relatives recommended the puppy called "Gucci" hence they named him Gucci. However, Gucci does not respond when Tzuyu or her family calls him.`,
  `She has a brother who is 7 years older than her.`,
  `She has a puppy doll. She named him "Go Minjoong", which means "worries"`,
  `She also had another puppy doll given by a fan called "Minhae", but Tzuyu lost her.`,
  `Her favourite foods are kimbap, eel and bread.`,
  `In the song TT, her parents did not recognize her.`,
  `She wears matching pyjamas with Chaeyoung.`,
  `Her zodiac sign is Gemini.`,
  `Her Chinese zodiac sign is Rabbit.`,
  `She is not used to crying in front of cameras, therefore people don't seem to see her cry.`,
  `She is friends with CLC's Elkie, BLACKPINK's Rosé and April's Naeun.`,
  `Her waist was measured on Weekly Idol recently, it was shown to be 22 inches.`,
  `Her favourite colour is navy blue.`,
  `Her favourite ice-cream flavour is cookies and cream.`,
  `When Twice went to Switzerland in Twice TV5, Tzuyu bought multi-functional army knife and mugs for her family.`,
  `She sleeps the earliest and wakes up the earliest as she wants to be the first one to get her make-up done.`,
  `In Twice TV6 she danced to Candy Pop even though it wasn't released at that time.`,
  `When she was young she would fake to be sick so she could miss school.`,
  `She waved a Taiwanese flag in a variety show, which resulted in unnecessary drama.`,
  `She likes Tonkatsu.`,
  `She said that if she was ever born again, she wants to be born short.`,
  `Her favourite season is spring. She dislikes winter because of the cold weather.`,
  `She would like to go to the water park with her members. But she cannot swim, so she would like to learn how from Sana.`,
  `Tzuyu's fan club put birthday ads in New York Times Square to celebrate her 18th birthday.`,
  `According to Jeongyeon on VLive, Tzuyu, Dahyun and Mina debuted without doing the dance routine choreography test where every trainee needs to pass.`,
  `On episode 458 of Happy Together, she revealed that her Korean name is Joohee (주희) because the pronunciation sounds similar to her real name.`,
  `On TWICE TV "What is Love?" Ep.09, she revealed her English name is Juliet because the pronunciation is similar.`,
  `Her phone is a silver Iphone 11 Pro, just like Jeongyeon and Mina.`,
  `She owns the Louis Vuitton Wireless Earphones.`,
  `Her English name is Sally.`,
  `Her "Phantom Of The Opera Technique" was featured in an article called "6 Skincare Tips From Idols To Get That Perfect Skin"`,
  `She was dubbed one of the "Foreign K-Pop Idols Who Have Amazing Korean Handwriting" along with the other foreign members, Momo, Sana, & Mina.`,
  `TMI: “I bought a hot water mat. I bought it online, but it hasn’t come yet. It’s been a week.”`,
  `Despite her long limbs, she is quite flexible. She is the best at Limbo. She defeated GFriend, GOT7 and BTOB as well as Mina in Weekly Idol. She did it again in Season 2 of Teudong High School. That said: She never knew the actual name of "Limbo" or the original background music until after she won the second time.`,
  `She does not tend to listen to songs on repeat in her spare time, but one of her favorite songs are Adele - All I Ask, which is a sad ballad.`,
  `She was noted by Jeongyeon to have had poor money management skills.`,
  `She cried on "Please Refrigerator" when the presenter asks her if she misses her mom.`,
  `She cried before Twice's comeback stage for "Cheer Up" on M!Countdown because they were too tired. She was the first member to cry before all members cried together.`,
  `During the filming of "Signal" MV, she cried because the director lied that they're going to leave the rabbit (from the teaser) in the wild on its own.`,
  `On the 2nd day of Twiceland encore concert - when she was giving an ending speech.`,
];

const Tzuyu = () => {
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
            src={"/Tzuyu/head1.jpeg"}
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
            <div className="font-montserrat text-3xl font-bold">Tzuyu</div>
            <p className="font-roboto text-sm font-light">
              Chou Tzuyu (Hangul: 주쯔위, Chinese: 周子瑜), best known by her
              stage name, Tzuyu (Hangul: 쯔위), is a Taiwanese singer and
              dancer, currently based in South Korea. She is a member of Twice,
              as a lead dancer, sub-vocalist, visual, and the maknae. (Note: The
              name 쯔위 was chosen as it is the closest Hangul to the actual
              Mandarin pronunciation of her Chinese name 子瑜 (Zǐ-yú). In
              Hangul, her name 周子瑜 is written as 주자유.)
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Sally Chou (English)</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Chou Zi-yu (周子瑜)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>June 14, 1999 (age 24)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>East District, Tainan, Taiwan, China</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>170cm</td>
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
                  <td>ISFP-A</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Lead Dancer, Sub-Vocalist, Visual, Maknae</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#005EB8]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#005EB8]">Tzuvely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🦌</td>
                </tr>
                <tr>
                  <td>Instrument(s)</td>
                  <td className="px-2">:</td>
                  <td>Guzheng</td>
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
                      src={"/signature/TZ.png"}
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
                Tzuyu was born on June 14, 1999 in East District, Tainan,
                Taiwan, China. Her family consists of her parents, a couple who
                work as self made entrepreneurs and older brother.
                <br />
                <br />
                <span>
                  {" "}
                  In 2013, she was seen by talent scouts at the MUSE Performing
                  Arts Workshop in Tainan and traveled to South Korea in
                  November that year to become a K-pop trainee. She joined JYPE
                  in November 15, 2012. After more than two years of training,
                  she appeared on the South Korean reality show Sixteen in 2015,
                  during which she was chosen as one of the nine members of the
                  new girl band Twice. The group made its debut in October 2015.
                  She attended Hanlim Multi Art School in Seoul as a freshman,
                  along with fellow group members Chaeyoung and Dahyun. She was
                  in neighboring classes to Chaeyoung in her first year, then
                  the same class in the second year. Tzuyu graduated with
                  Chaeyoung on February 11, 2019.
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
                        className="hover:text-[#005EB8]"
                      >
                        GOT7 - &quot;Stop Stop It&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=zO9RzrhYR-I"}
                        target="_blank"
                        className="hover:text-[#005EB8]"
                      >
                        miss A - &quot;Only You&quot; (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#005EB8]"
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
                Tzuyu doesn&apos;t appear to have any discography of her
                </div>
              </div>
            </div>
            <div className="mt-24 flex flex-col gap-y-2" id="pets">
              <div className="mb-4 font-montserrat text-3xl font-bold">
                Pets
              </div>
              <p className="font-roboto text-sm font-light">
                Tzuyu has 2 dogs named Kaya & Butter, Kaya has a black furry
                appearance while Butter 🧈 is lighter due to its skin looking
                like “butter”.
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8 mt-2">
                <Image
                  src={"/Tzuyu/kayabutter.jpeg"}
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

export default Tzuyu;
