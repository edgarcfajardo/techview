"use client"

import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/src/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"

import { formSchema } from "./FormCreateInterView.form";
import { Input } from "@/src/components/ui/input";
import { difficulties, roles } from "./FormCreateInterView.data";



export function FormCreateInterView() {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rol: "",
      level: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-8 text-black">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the interview</FormLabel>
              <FormControl>
                <Input placeholder="Interview name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="rol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select the role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.label} value={role.value}>
                      <div className="flex items-center gap-2">
                        <span>{role.icon}</span>
                        <span>{role.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}/>

          <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select the dificulty</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select the dificulty" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {difficulties.map((level) => (
                    <SelectItem key={level.label} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}/>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Start Interview
            </Button>
      </form>
    </Form>
  )
}
