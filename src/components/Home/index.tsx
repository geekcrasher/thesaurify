import SearchBar from '@/components/Searchbar';
import WordContent from '@/components/Content';

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center w-[40rem] md:w-[45rem] max-lg:w-full max-h-fit relative font-lora mx-auto mt-28'>
      <SearchBar />
      <WordContent />
    </section>
  );
}

export default Home;