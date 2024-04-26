import { BookType, Moon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between h-fit py-1">
        <h2 className="flex items-center gap-2  cursor-pointer font-lora font-semibold text-[#a445ed]">
          <BookType className="" />
          Thesaurify
        </h2>
        <section className="flex items-center gap-8">
          <Select>
            <SelectTrigger className="w-[120px] border-0">
              <SelectValue placeholder="Typeface" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sans Serif</SelectItem>
              <SelectItem value="dark">Serif</SelectItem>
              <SelectItem value="system">Monospace</SelectItem>
            </SelectContent>
          </Select>
          <div className="h-8 w-[1px] bg-gray-200"></div>
          <section className="flex items-center space-x-4">
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode" className="cursor-pointer">
              <Moon className="w-5 h-5 text-gray-400" />
            </Label>
          </section>
        </section>
      </nav>
    </>
  );
}

export default Navbar;