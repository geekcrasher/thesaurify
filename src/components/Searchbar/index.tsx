import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormDescription,
  // FormLabel,
  // FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";
import { useWord } from "@/context/WordContext";


const formSchema = z.object({
  word: z.string().min(1, {
    message: "Please enter a word",
  }).toLowerCase(),
})

const SearchBar = () => {

  const { setKeyword } = useWord()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>): void => {
    try {
      setKeyword(values.word)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="word"
            render={({ field }) => (
              <FormItem>
                <FormControl >
                  <div className="flex w-full h-fit relative">
                    <Input
                      className="h-14 rounded-xl border-0 text-[#333] bg-gray-100/60 text-lg font-bold placeholder:text-base placeholder:text-gray-400 placeholder:font-normal"
                      placeholder="Search Dictionary"
                      {...field}
                    />
                    <Search className="absolute right-8 top-4 text-[#a445ed]" />
                  </div>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button type="submit" className="sr-only">Submit</Button>
        </form>
      </Form>
    </>
  );
}

export default SearchBar;