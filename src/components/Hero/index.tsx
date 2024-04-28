import SearchBar from "@/components/Searchbar";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-10 md:justify-center gap-8 mx-auto text-center font-inter h-[45rem] mt-28">
        <section>
          <h1 className="text-[#c88df2] font-bold text-[4rem] sm:text-[5rem] 2xl:text-8xl font-inconsolata">Thesaurify</h1>
          <p className="text-gray-400 text-sm sm:text-base">Elevates Your Vocabulary, One Word at a Time!</p>
        </section>
        <SearchBar />
        <section className="w-[20rem] sm:w-[25rem]">
          <img
            src="/book-lover.svg"
            alt="selected image"
            className="h-[100%] w-[100%] object-cover"
          />
        </section>

      </section>
    </>
  );
}

export default Hero;