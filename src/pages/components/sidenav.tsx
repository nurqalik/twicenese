const SideNav = () => {
  return (
    <>
      {/* Sidebar */}
      <div className="flex">
        <div className="z-100 sticky top-0 flex h-screen w-48 flex-col overflow-y-auto px-4 py-8">
          <div className="mt-6 flex h-full flex-col items-start justify-center gap-y-4 font-montserrat text-sm font-light">
            <div>
              <a href="#bio">1. Profile</a>
            </div>
            <div>
              <a href="#career">2. Life and career</a>
            </div>
            <div>
              <a href="#filmograph">3. Filmography</a>
            </div>
            <div>
              <a href="#discograph">4. Discography</a>
            </div>
            <div>
              <a href="#pets">5. Pets</a>
            </div>
            <div>
              <a href="#funfacts">6. Fun facts</a>
            </div>
            <div>
              <a href="#credits">7. Credits</a>
            </div>
          </div>
          <div className="font-montserrat font-thin text-xs">Roe &copy;2023</div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
