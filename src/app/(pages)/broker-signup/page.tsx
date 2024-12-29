"use client";
import * as z from "zod";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTopBar } from "@/app/components/FormTopBar";
import { FormSideImg } from "@/app/components/FornSideImg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
  username: z.string().email("Enter full name"),
  phone: z.string().min(11, "Enter correct phone number"),
});

const SignUp = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        values
      );
      if (response.status === 200) {
        console.log("signup successful:", response.data);
        router.push("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="w-full bg-gray">
      <div className="flex flex-col-reverse gap-16 lg:gap-5 w-full lg:flex-row">
        <div className="w-full flex items-center justify-center  min-h-screen bg-BackGray">
          <div
            // onSubmit={handleSubmit}
            className="w-full max-w-[965px] bg-white rounded-[15px] flex justify-center flex-col items-center "
          >
            <div className="max-w-[833px] w-full pt-[52px] ">
              <FormTopBar
                heading="Create An Account!"
                paragraph="Provide the following details for creating account!"
              />
              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className=" grid grid-cols-2 gap-[30px]">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-4 mb-[28px]">
                          {/* Form Content */}
                          <div className="flex-1">
                            <div className="flex flex-row gap-2 mb-[9px]">
                              <Image
                                src="/images/Authpics/person.png"
                                width={18}
                                height={27}
                                alt="usename Icon"
                              />
                              <FormLabel className="flex items-center font-inter font-medium text-h9 text-[#1C1B18]">
                                Full Name
                              </FormLabel>
                            </div>
                            <FormControl className="h-[64px] bg-[#F6F6F6] outline-none border-none focus:border-none">
                              <Input
                                className="font-inter italic text-h6 px-[26px]"
                                placeholder="Type here..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-4 mb-[28px]">
                          {/* Form Content */}
                          <div className="flex-1">
                            <div className="flex flex-row gap-2 mb-[9px]">
                              <Image
                                src="/images/Authpics/mail.svg"
                                width={18}
                                height={27}
                                alt="Email Icon"
                              />
                              <FormLabel className="font-inter font-medium text-h9 text-[#1C1B18]">
                                Email
                              </FormLabel>
                            </div>
                            <FormControl className="h-[64px] bg-[#F6F6F6] outline-none border-none focus:border-none">
                              <Input
                                className="font-inter italic text-h6 px-[26px]"
                                placeholder="Type here..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-4 mb-[28px]">
                          {/* Form Content */}
                          <div className="flex-1">
                            <div className="flex flex-row gap-2 mb-[9px]">
                              <Image
                                src="/images/Authpics/phone.png"
                                width={18}
                                height={27}
                                alt="Phone Icon"
                              />
                              <FormLabel className="flex items-center font-inter font-medium text-h9 text-[#1C1B18]">
                                Phone
                              </FormLabel>
                            </div>
                            <FormControl className="h-[64px] bg-[#F6F6F6] outline-none border-none focus:border-none">
                              <Input
                                className="font-inter italic text-h6 px-[26px]"
                                placeholder="Type here..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-row gap-2 mb-3">
                            <img
                              src="/images/Authpics/lock.svg" // Adjust the path to your icon
                              alt="Password Icon"
                              width={18}
                              height={27}
                              className="h-auto"
                            />
                            <FormLabel className="flex items-center font-medium text-sm text-gray-800">
                              Create your password
                            </FormLabel>
                          </div>
                          <div className="relative">
                            <FormControl className="h-[64px] bg-[#F6F6F6] outline-none border-none focus:border-none">
                              <Input
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Type here..."
                                className="pr-10" // Add padding to the right for the button
                                {...field}
                              />
                            </FormControl>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={togglePasswordVisibility}
                              className="absolute right-2 top-2.5"
                            >
                              {isPasswordVisible ? (
                                <Eye className="h-5 w-5 text-gray-500" />
                              ) : (
                                <EyeOff className="h-5 w-5 text-gray-500" />
                              )}
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-row justify-between py-[45px]">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex gap-[14px] ">
                          <FormControl>
                            <Checkbox
                              className="size-6"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className=" flex items-center font-poppins text-h8 text-[#1C1B18]">
                            I agree to Needates{" "}
                            <span className="text-RubyRed underline font-semibold cursor-pointer mx-1">
                              {" "}
                              Terms and Conditions{" "}
                            </span>{" "}
                            and{" "}
                            <span className="text-RubyRed underline font-semibold cursor-pointer mx-1">
                              Privacy Statement
                            </span>{" "}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Link href="/broker-available-dates">
                    <Button
                      type="submit"
                      className=" flex mx-auto items-center bg-RubyRed hover:bg-RubyRed rounded-[32px] py-[17px] px-[107px] "
                    >
                      <p className="font-inter font-semibold text-h7 text-white">
                        Sign Up
                      </p>
                    </Button>
                  </Link>
                </form>
              </Form>
              {/* Sign up link */}
              <div className="text-center font-inter text-h7  text-EerieBlack py-[73px]">
                Already have an account?{" "}
                <span className="text-center  font-inter text-h7  text-RubyRed font-semibold underline">
                  <Link href="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-[717px] bg-gray">
          <FormSideImg />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
