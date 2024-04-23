import { BookType, Moon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between h-16 border">
        <BookType className="h-10 w-10 text-[#a445ed]" />
        <section className="flex gap-6">
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
          <Separator orientation="vertical" />
          <div className="flex items-center space-x-4">
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode">
              <Moon className="w-6 h-6 text-gray-400" />
            </Label>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Navbar;