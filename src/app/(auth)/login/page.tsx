"use client";

import React, {useCallback, useState} from 'react'
import {Eye, EyeOff, Loader2} from "lucide-react";
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
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {toast} from "sonner"
import {useMutation} from "@tanstack/react-query";
import {LoginUser} from "@/actions/auth";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "admin",
      password: "password123"
    }
  });

  const {mutate, isPending} = useMutation({
    mutationFn: LoginUser,
    onSuccess: () => {
      toast.success("Login successful", {id: "login-user"});
    },
    onError: () => {
      toast.error("Login failed", {id: "login-user"});
    }
  })

  const onSubmit = useCallback(
    (values: loginSchemaType) => {
      toast.loading("Logging user...", {id: "login-user"});
      mutate(values);
    },
    [mutate]
  );

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex flex-col justify-center items-center">
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
                className="w-full text-white"
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
