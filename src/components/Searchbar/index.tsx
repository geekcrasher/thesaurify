import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";


const formSchema = z.object({
  word: z.string().min(2, {
    message: "Please enter a word",
  }).toLowerCase(),
})

const SearchBar = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>): void => {
    console.log(values.word)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="word"
            render={({ field }) => (
              <FormItem>
                <FormControl >
                  <div className="flex w-full h-fit relative">
                    <Input
                      className="h-14 rounded-xl border-0 bg-gray-100 text-lg font-bold font-serif placeholder:text-gray-400 placeholder:font-normal"
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
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </>
  );
}

export default SearchBar;