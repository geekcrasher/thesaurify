import { BookType } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  const navigateToHomePage = (): void => {
    navigate("/")
    sessionStorage.clear()
  }

  return (
    <>
      <nav className="fixed z-10 flex items-center sm:justify-center bg-white w-full h-20 shadow-sm">
        <div className="flex items-center justify-between w-full sm:w-[70rem]">
          <Button
            onClick={navigateToHomePage}
            className="flex items-center gap-2 tracking-tight text-xl cursor-pointer font-inconsolata font-bold text-[#c88df2] bg-transparent hover:bg-transparent outline-none border-0  "
          >
            <BookType className="h-8 w-8" />
            Thesaurify
          </Button>

          {/* <Button className="bg-white hover:bg-transparent ">
            <Moon className="w-5 h-5 text-gray-400" />
          </Button> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;