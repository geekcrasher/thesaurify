import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PageNotFound = () => {

  const navigate = useNavigate()

  return (
    <>
      <section className="mx-auto my-auto flex flex-col items-center">
        <figure className="w-[20rem] h-[15rem] sm:w-[30rem] sm:h-[20rem] lg:w-[35rem] lg:h-[25rem] text-center">
          <img
            src="/landscape-404.svg"
            alt="landscape with trees for 404 error"
            className="w-full h-full object-cover"
          />
          <figcaption className="text-sm lg:text-base">404: Sorry, Page not Found!</figcaption>
        </figure>
        <Button
          onClick={() => navigate(-1)}
          className="bg-[#debaf5] text-white mt-16 rounded-full hover:bg-[#d3a3f2]"
        >
          Go back!
        </Button>
      </section>
    </>
  );
}

export default PageNotFound;