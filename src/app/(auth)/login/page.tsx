"use client";

import React, {useState} from 'react'
import {Eye, EyeOff, Loader2, MonitorPlay} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {loginSchema, loginSchemaType} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import logo from "../../../../public/logo.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {waitFor} from "@/lib/utils";
import {toast} from "sonner"
import Cookies from "js-cookie";
import {validUser} from "@/lib/data";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "admin",
      password: "password123"
    }
  });

  const onSubmit = async (data: loginSchemaType) => {
    setIsPending(true);

    try {
      if (data.username === validUser.username && data.password === validUser.password) {
        const token_exist = Cookies.get("auth_token")
        if (token_exist) {
          Cookies.remove("auth_token");
        }
        Cookies.set("auth_token", "true", {expires: 1});
        await waitFor(5);
        router.push('/nvr');
      } else {
        toast.error("Invalid username or password. Please try again.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-4">
        <CardHeader className="text-center">
          <CardTitle className="text-white text-2xl flex flex-col justify-center items-center">
            <Image src={logo} alt="logo" width={40} height={40}/>
            LOGISCAN
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center mb-3">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center mb-3">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground"/>
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground"/>
                          )}
                          <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full dark:text-white text-gray-800"
                disabled={isPending}
              >
                {!isPending ? "Login" : <Loader2 className="animate-spin"/>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
export default Page
