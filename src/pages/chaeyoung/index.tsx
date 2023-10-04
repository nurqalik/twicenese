import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  "She is the shortest member of Twice.",
  `She wrote the rap in Twice's remake of the song "Precious Love" by Park Ji Yoon.`,
  `She participated in "Eye Eye Eyes" from the mini-album Signal with Jihyo in writing lyrics.`,
  `She wrote two songs for their full length-album Twicetagram: ''Don't Give Up'' and ''Missing U'', the last one along with Dahyun.`,
  `She and Jeongyeon also took part of the writing of ''Sweet Talker'' from the mini-album What is Love.`,
  `She thought that she'll grow tall because she has long fingers.`,
  `She told her friends to walk around with linked arms because she will grow, but she never grew.`,
  `She loves to draw. She is the best drawer among the members. Her drawing is used in her limited edition album and Spris shoes.`,
  `Her blood type is one of the rarest in the world, as it is B-.`,
  `Her favorite Pokémon are Togepi, Pikachu and Eevee.`,
  `She resembles a character from the Disney movie The Lion King called Simba, which gave her the nickname, "Baby Lion".`,
  `She loves Sesame Street and has a collection of the character toys in her room.`,
  `She always plays the same thing/order for Rock-Paper-Scissors. She tries to change but never does.`,
  `She has a mole below the left corner of her lips, which is a significant feature of how people recognize her.`,
  `She can imitate duck and window wiping sound.`,
  `She doesn't like beans.`,
  `Her religion is Catholic. Her Baptismal name is Katarina.`,
  `She once ate udon while hiding under a desk. It got caught on camera and she got scolded for it.`,
  `She sleeps the most. She usually sleeps without eating.`,
  `Her childhood nickname is called "Strawberry Princess" because she loves strawberries.`,
  `She doesn't use neck pillows because it keeps falling off.`,
  `She likes basketball.`,
  `She said she is going to get a driving license as soon as she turns into an adult.`,
  `She was a girl scout during elementary school.`,
  `When she was in middle school, her mobile phone background was Justin Bieber.`,
  `Her zodiac sign is Taurus.`,
  `Her Chinese zodiac sign is Rabbit.`,
  `Jeongyeon and her are called the No Jam Brothers, because they always make the coldest jokes.`,
  `She is close friends with Somi, and also competed in Sixteen, but Somi didn't debut with Twice.`,
  `It took Chaeyoung 2.5 years to pass the JYP basic routine dance exam.`,
  `She is pretty close with Rosé from BLACKPINK. Both their Korean name is Chaeyoung, but the Hanja are different.`,
  `She cut her hair short after seeing Kristen Stewart without telling anyone. The company told her to at least tell if she wants to do something like that.`,
  `She regrets cutting her hair short, and decided to wear hair extension.`,
  `Jihyo once used her 4 collaged picture from VLive screenshot as profile picture because she thinks she's so handsome with short hair, which Red Velvet's Yeri said it as well.`,
  `Being fluent in English is one of her criterias for her boyfriend.`,
  `Somi named her one of the Kpop Idols with gorgeous 90 degree shoulders.`,
  `She is a fan of Justin Bieber.`,
  `She is a fan of Timothee Chalamet`,
];

const Chaeyoung = () => {
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
            src={"/Chaeyoung/head1.jpg"}
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
            <div className="font-montserrat text-3xl font-bold">Chaeyoung</div>
            <p className="font-roboto text-sm font-light">
              Son Chae-young (Hangul: 손채영), better known by her first name
              Chaeyoung (Hangul: 채영), is a South Korean singer, rapper,
              songwriter and dancer. A member of the girl group Twice, she was
              assigned the role of the group&apos;s main rapper.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Son Chae-young (손채영)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>April, 23 1999 (age 24)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>Dunchon-dong, Gangdong-gu, Seoul, South Korea</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>159cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>42kg</td>
                </tr>
                <tr>
                  <td>Years active</td>
                  <td className="px-2">:</td>
                  <td>2015 - Present</td>
                </tr>
                <tr>
                  <td>Blood type</td>
                  <td className="px-2">:</td>
                  <td>B-</td>
                </tr>
                <tr>
                  <td>MBTI</td>
                  <td className="px-2">:</td>
                  <td>INFP-T</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Main Rapper, Sub-vocalist</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-red-500" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-red-500">Chaengvely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🐯</td>
                </tr>
                <tr>
                  <td>Instrument(s)</td>
                  <td className="px-2">:</td>
                  <td>Guitar</td>
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
                      src={"/signature/CY.png"}
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
                Chaeyoung was born on April 23, 1999 in Dunchon-dong, Seoul,
                South Korea. Her family consists of her parents and younger
                brother named Son Jeong-hoon. She attended Hanlim Multi Art
                School for her secondary education and graduated alongside with
                Tzuyu on February 11, 2019. <br />
                <br />
                <span>
                  {" "}
                  After a successful audition to JYP Entertainment which took
                  place on June 6, 2012, Chaeyoung trained nearly three years
                  before becoming a contestant on the 2015 show, Sixteen, where
                  she was announced as a member of Twice in the finale. During
                  her trainee years, Chaeyoung appeared in the music videos of
                  GOT7&apos;s song, &quot;Stop Stop It&quot; and Miss A&apos;s
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
                        href={"https://www.youtube.com/watch?v=R_DX64EwH9M"}
                        target="_blank"
                        className="hover:text-red-500"
                      >
                        GOT7 - Stop Stop It
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=zO9RzrhYR-I"}
                        target="_blank"
                        className="hover:text-red-500"
                      >
                        miss A - Only You
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-red-500"
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
                    Soundtrack
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=Cnex1TJzqAc"}
                        target="_blank"
                        className="hover:text-red-500"
                      >
                        &quot;Daring Women&quot; (with Jihyo, Nayeon and Tzuyu)
                        (2015)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=uK16TLBzWYo"}
                        target="_blank"
                        className="hover:text-red-500"
                      >
                        &quot;Alone&quot; (Melody Project)
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
                        className="hover:text-red-500"
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
                Chaeyoung has 2 dogs, one named Logan and the other named
                Nereri.
              </p>
              <div className="flex flex-row items-center justify-center gap-x-8">
                <Image
                  src={"/Chaeyoung/logan.jpeg"}
                  alt="logan"
                  width={0}
                  height={0}
                  sizes="100"
                  className="h-48 w-48 rounded-xl object-cover"
                />
                <Image
                  src={"/Chaeyoung/nereri.jpeg"}
                  alt="nereri"
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

export default Chaeyoung;
