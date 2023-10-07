const Footer = () => {
  return (
    <>
      <div className="h-full w-full section" id="credits">
        <div className="my-8 rounded-xl bg-[#ded7cd]">
          <div className="flex flex-col m-12 md:m-0">
            <div className="mt-8 font-montserrat text-xl font-semibold">
              Credits
            </div>
            <div className="my-4 flex flex-col font-roboto text-sm font-thin">
              <div>https://duckduckgo.com/?q=&va=n&t=h_&iar=images</div>
              <div>https://twice.fandom.com/wiki/</div>
              <div>https://commons.wikimedia.org/wiki/</div>
              <div>
                https://www.quora.com/What-are-Twice-s-pets-and-what-are-their-names
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
