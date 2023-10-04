import Image from "next/image";
import Link from "next/link";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";

const funfact: Array<string> = [
  `Sana is the clumsiest of all members; she always stumbles across the dorm and is not good with balance.`,
  `That being said: She is really good at running on uneven or slippery surfaces. She also isn't worried about running or walking on acupuncture mats.`,
  `She auditioned dancing to ''Mr. Taxi'' by Girls' Generation. However, she regrets it and refuses to dance when someone mentions this song.`,
  `She is very optimistic.`,
  `She replaced Cecilia in the lineup of 6mix after the latter left the agency.`,
  `She likes horror movies. She's the type to scream while she keeps watching.`,
  `She is an only child.`,
  `She hates eggplants and beans.`,
  `She is the only extraverted member in the group.`,
  `She has anemia. `,
  `She is allergic to pollen. `,
  `She is scared of thunder.`,
  `Her favorite ride at Everland was the T-Express.`,
  `When she fell in the "Like Ooh-Ahh" MV, she fell after trying to follow Jeongyeon and Tzuyu while jumping off the back of a school bus. The accident was unscripted, but remain unedited in the final cut`,
  `She likes convenience stores' "1+1/2+1" (Buy one get one free) deals.`,
  `One of her tips for learning Japanese is to memorize the names of the foods you like first.`,
  `Her zodiac sign is Capricorn.`,
  `Sana is known for her cute appearance.`,
  `Sana's favorite Pokémon are Pikachu and Pachirisu.`,
  `She is good at calligraphy.`,
  `In 2021, she even passed a mission to forge Jihyo's handwriting and fool Momo into thinking it was Jihyo who was Momo's Secret Friend.`,
  `She is the one with the third most viewed fancams among the members of Twice.`,
  `Her aegyo often goes viral like her "cheese kimbap", "shy shy shy", "sana potter", etc.`,
  `She was the first member to release a Melody Project, but as of 2021, she is the only member without a Project that featured her singing or dancing. It was a Cosplay photoshoot.`,
  `She was seen passing out during a broadcast, due to her not sleeping for three days.`,
  `When Sana cannot fall asleep, she often stretches.`,
  `Sana also sleepwalks, she has woken up many times standing; in one experience when sleeping with Mina, Sana was with her eyes open telling Mina to get ready for a photoshoot, all the while being asleep.`,
  `She is often seen being intimate with other members.`,
  `She is known as a 'snake' in Twice ships.`,
  `She joined JYP entertainment on April of 2012 along with Momo.`,
  `She is very close with GFriend's Eunha. She jokingly said that she is her girlfriend.`,
  `Sana wrote the lyrics for the song ''Shot Thru The Heart'' along with Momo and Mina for their Summer Nights special album.`,
  `Sana's former dance instructor was Yuta Nakatsuka from GENERATIONS which is part of the EXILE tribe.`,
  `She was named one of the "Precious Yet Powerful" Idols that prove duality man undoubtedly exists.`,
  `She was dubbed one of the "Foreign K-Pop Idols Who Have Amazing Korean Handwriting" along with the other foreign members, Momo, Mina, & Tzuyu. `,
  `TMI: “For the comeback, I made my nails and toenails match. I did them yesterday, so they’re still fresh.” `,
  `She was named one of the idols that had a "Funny And Surprising Way" of getting casted.`,
  `Sana is not good at exercising, so she does pilates instead.`,
  `She was given the nickname "Osaka's honey punch" by fans because she puts her fist up when she gets angry.`,
  `In the Fandom, Sana is part of the Snake Trinity with Mina and Nayeon`,
  `Sana always took the iconic part of Twice's title track`,
  `Sana means "you" in Turkish.`,
  `Sana means "word" in Finnish.`,
  `Sana is the only member who has an Extroverted MBTI.`,
  `Sana means "There" in Indonesian.`,
  `Sana means “I wish” or “I hope” in Filipino.`,
  `As of February, 2022, she is still the only female guest of Chan's Room.`,
  `She dislikes the color green.`,
  `She has used her iPhone XS for at least 3 years as of 2022.`,
  `She likes wearing prescription glasses, so much so that she carries 3 pairs in her tote bag whenever she goes to photoshoots.`,
  `She doesn't tend to carry cash, and her father gave her a card wallet for her birthday in 2021.`,
  `She likes listening to "River" by Eminem and Ed Sheeran.`,
  `She likes to watch Guardians of the Galaxy Vol. 2`,
  `In 2023, she has been suffering from gastrospasm since Set Me Free promotions, culminating in her collapsing on stage at the end of the Chicago concert.`,
];

const Sana = () => {
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
            src={"/Sana/head1.jpg"}
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
            <div className="font-montserrat text-3xl font-bold">Sana</div>
            <p className="font-roboto text-sm font-light">
              Sana Minatozaki (Hangul: 미나토자키 사나, Japanese: 湊崎紗夏 /
              みなとざきさな), better known as Sana (Hangul: 사나), is a
              Japanese singer. She is a member of Twice as a vocalist and lead
              dancer of the group.
            </p>
            <table className="my-4 max-w-lg table-auto text-left font-roboto text-sm font-light">
              <tbody>
                <tr>
                  <td>Other name</td>
                  <td className="px-2">:</td>
                  <td>Chinese: 湊崎紗夏, Japanese: サナ</td>
                </tr>
                <tr>
                  <td>Birth name</td>
                  <td className="px-2">:</td>
                  <td>Minatozaki Sana (湊崎紗夏)</td>
                </tr>
                <tr>
                  <td>Birth date</td>
                  <td className="px-2">:</td>
                  <td>December 29, 1996 (age 26)</td>
                </tr>
                <tr>
                  <td>Birth place</td>
                  <td className="px-2">:</td>
                  <td>Osaka, Japan</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td className="px-2">:</td>
                  <td>163cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td className="px-2">:</td>
                  <td>47kg</td>
                </tr>
                <tr>
                  <td>Years active</td>
                  <td className="px-2">:</td>
                  <td>2015 - Present</td>
                </tr>
                <tr>
                  <td>Blood type</td>
                  <td className="px-2">:</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td>MBTI</td>
                  <td className="px-2">:</td>
                  <td>ENFP-T</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td className="px-2">:</td>
                  <td>Sub-Vocalist</td>
                </tr>
                <tr>
                  <td>Individual color</td>
                  <td className="px-2">:</td>
                  <td>
                    <button className="h-4 w-4 cursor-default items-center justify-center rounded-full bg-[#9B7DD4]" />
                  </td>
                </tr>
                <tr>
                  <td>Lovely</td>
                  <td className="px-2">:</td>
                  <td className="text-[#9B7DD4]">Savely</td>
                </tr>
                <tr>
                  <td>Emoji</td>
                  <td className="px-2">:</td>
                  <td>🐹</td>
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
                      src={"/signature/SN.png"}
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
                Sana was born on December 29, 1996 in Tennoji-ku, Osaka, Japan,
                she is the only child of her parents. <br />
                <br />
                <span>
                  {" "}
                  Sana attended EXPG (Exile Professional Gym) Osaka branch, a
                  dance and vocal studio where many Japanese idols trained,
                  including some members of E-girls, Generations and The
                  Rampage, from 2009 to early 2012. She first got interested in
                  K-pop because of Girls&apos; Generation&apos;s and KARA&apos;s
                  rising popularity in Japan. At age 14, in her last year of
                  middle school, she was scouted by JYP Entertainment while
                  shopping with friends at the Osaka Namba Walk, a popular
                  underground shopping mall. The JYPE scouts invited Sana to the
                  2011 JYP Japan Audition which were held in Osaka (19/11/2011)
                  and Tokyo (25/11/2011). During the audition Sana performed the
                  &apos;Mr. Taxi&apos; choreography by Girls&apos; Generation.
                  After graduating from middle school in March 2012, she moved
                  to South Korea to start her JYP trainee-ship on April 13. 2012
                  together with TWICE&apos;s Momo.
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  In 2014, she appeared in the music video of Got7&apos;s
                  &quot;A&quot; and Junho&apos;s &quot;Feel&quot;, making her
                  noticeable and likeable by the public eye.
                </span>
                <br />
                <br />
                <span>
                  {" "}
                  In 2015, Sana was a contestant on the TV Show Sixteen, she was
                  one of sixteen female trainees in JYP Entertainment, who had
                  to compete in singing, dancing and modelling, in order to
                  become a member of JYP&apos;s upcoming girl group. At the end
                  of the show, she was announced as a member of Twice.
                </span>
                <br />
                <br />
                <span>
                  {" "}
                  In 2016 Sana shortly returned to Japan to take the University
                  Entrance Qualification Examination.
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
                    <li className="py-2">Sixteen (Mnet)</li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/playlist?list=PLIBmjIHzZF9nhuqZV1f3RBqL_-4AqxBLf"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        TWICE&apos;S Private Life (Mnet) - 2015
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/playlist?list=PL5qRfk4DowRAHZxHHgH99_gxWWzssOCqC"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Knowing Bros Ep. 27 (JTBC) - 2016
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/playlist?list=PLqDtjdEupS5ArwGNH751iu4gkF6zc8ASB"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Running Man Ep. 302 (SBS) - 2016
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/playlist?list=PLqDtjdEupS5C7w7YSTF9YLgBZkqcjxTat"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Running Man Ep. 328 (SBS) - 2016
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://www.youtube.com/playlist?list=PL5qRfk4DowRDMKwlEVtHK2SgWg6hQPzgp"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Knowing Bros Ep. 76 (JTBC) - 2017
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/zETQq0TIODQ?si=svDKDnDDoC7JvADv"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Master Key Ep. 4 (SBS) - 2017
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="font-montserrat text-xl font-medium">
                    Music video appearances
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=eISomx-VMow"}
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        GOT7 - &quot;A&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=QHOePrycK8g"}
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Junho - &quot;Feel&quot; (2014)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=X2mqrzKHb3w"}
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Park Jin Young - Fire (ft. Conan O&apos;Brien, Steven
                        Yeun, & Jimin Park)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=eVvg3O2wBJ4"}
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Junho - &quot;Instant Love&quot; (2017)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={"https://www.youtube.com/watch?v=tYUcVX83HYw"}
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Kobukuro コブクロ - 卒業 (2021)
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
                    Digital Single
                  </div>
                  <ul className="font-roboto text-sm font-normal">
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/jn47nrQPexg?si=Dg1oxOPOhARRQttg"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        卒業 (カバー) (2021)
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
                        href={"https://www.youtube.com/watch?v=1NHGL4AmnLs"}
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        Junho - &quot;Candy&quot; featuring Sana (2017)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/7ns79MgJJQY?si=-fcjFWRsUmrHth1v"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
                      >
                        &quot;I&apos;LL SHOW YOU&quot; - K/DA (With Nayeon,
                        Jihyo, Chaeyoung, Bekuh Boom and Annika Wells)
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href={
                          "https://youtu.be/woKq2sD8xho?si=6zKTvocnc9WhqAyE"
                        }
                        target="_blank"
                        className="hover:text-[#9B7DD4]"
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
                        className="hover:text-[#9B7DD4]"
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
                Sana doesn&apos;t appear to have any pets of her own
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

export default Sana;
