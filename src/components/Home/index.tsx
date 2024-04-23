import Navbar from '@/components/Navbar'
import SearchBar from '@/components/Searchbar';

const Home = () => {
  return (
    <>
      <section className='flex flex-col gap-6 w-[50rem] max-md:w-full border min-h-[50rem] max-h-fit relative'>
        <Navbar />
        <SearchBar />
      </section>
    </>
  );
}

export default Home;