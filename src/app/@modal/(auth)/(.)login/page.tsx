"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"

const formSchema = z.object({
  username: z.string(),
  password: z.string()
});

export default function LoginModal() {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            dialog.showModal();
        }
    }, []);

    const closeModal = () => {
        router.back();
    };

      const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),
    
      })
    
      function onSubmit(values: z.infer < typeof formSchema > ) {
        try {
          console.log(values);
          toast(
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(values, null, 2)}</code>
            </pre>
          );
        } catch (error) {
          console.error("Form submission error", error);
          toast.error("Failed to submit the form. Please try again.");
        }
      }

    return (
        <dialog ref={dialogRef} className="p-4 border rounded-md" onClose={closeModal}>
            {/* <form className="flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-lg">Email/Username:</label>
                    <input type="email" id="email" name="email" required className="mt-1 p-2 border rounded-md" />
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="password" className="text-lg">Password:</label>
                    <input type="password" id="password" name="password" required className="mt-1 p-2 border rounded-md" />
                </div>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
            </form> */}
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10 px-4 bg-white shadow-md rounded-lg">
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-700">Username</FormLabel>
              <FormControl>
                <Input 
                placeholder="Enter your username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                {...field} />
              </FormControl>
              <FormDescription className="text-sm text-gray-500">This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-700">Password</FormLabel>
              <FormControl>
                <Input 
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="password"
                {...field} />
              </FormControl>
              <FormDescription className="text-sm text-gray-500">Enter your Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</Button>
        <button type="button" onClick={closeModal} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md">Close</button>

      </form>
    </Form>
        </dialog>
    );
}
