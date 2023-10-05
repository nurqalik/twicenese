import { useEffect } from "react";

if (typeof window !== "undefined") {
}
const SideNav = () => {
  useEffect(() => {
    const navLinkEls = document.querySelectorAll(".nav");
    const sectionEls = document.querySelectorAll(".section");

    let currentSection = "bio";
    window.addEventListener("scroll", () => {
      sectionEls.forEach((sectionEl) => {
        if (
          window.scrollY >=
          sectionEl.getBoundingClientRect().top +
            window.scrollY -
            sectionEl.clientHeight / 3
        ) {
          currentSection = sectionEl.id;
        }
      });

      navLinkEls.forEach((navLinkEl) => {
        const a = navLinkEl.getAttribute("href");
        if (a?.includes(currentSection)) {
          document.querySelector(".active")?.classList.remove("active");
          navLinkEl.classList.add("active");
        }
      });
    });
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className="flex">
        <div className="z-100 sticky top-0 flex h-screen w-48 flex-col overflow-y-auto px-4 py-8">
          <div className="mt-6 flex h-full flex-col items-start justify-center gap-y-4 font-montserrat text-sm font-light">
            <div>
              <a href="#bio" className="nav">
                1. Profile
              </a>
            </div>
            <div>
              <a href="#career" className="nav">
                2. Life and career
              </a>
            </div>
            <div>
              <a href="#filmograph" className="nav">
                3. Filmography
              </a>
            </div>
            <div>
              <a href="#discograph" className="nav">
                4. Discography
              </a>
            </div>
            <div>
              <a href="#pets" className="nav">
                5. Pets
              </a>
            </div>
            <div>
              <a href="#funfacts" className="nav">
                6. Fun facts
              </a>
            </div>
          </div>
          <div className="font-montserrat text-xs font-thin">
            Roe &copy;2023
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
