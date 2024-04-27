import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 mx-auto w-3/6 text-center font-inter h-[45rem]">
        <section>
          <h1 className="text-[#c88df2] font-bold text-8xl font-inconsolata">Thesaurify</h1>
          <p className="text-gray-400 text-base font-medium">Elevates Your Vocabulary, One Word at a Time!</p>

          <Button className="bg-[#debaf5] text-[#ffffff] mt-10 rounded-full hover:bg-[#d3a3f2]">Get started</Button>
        </section>
        <section className="w-[25rem]">
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