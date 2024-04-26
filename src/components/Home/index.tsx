import Navbar from '@/components/Navbar'
import SearchBar from '@/components/Searchbar';
import { WordContextProvider } from '@/context/WordContext';
import WordContent from '@/components/Content';

const Home = () => {
  return (
    <WordContextProvider>
      <section className='flex flex-col gap-6 w-[50rem] max-md:w-full min-h-[50rem] max-h-fit relative font-lora'>
        <Navbar />
        <SearchBar />
        <WordContent />
      </section>
    </WordContextProvider>
  );
}

export default Home;