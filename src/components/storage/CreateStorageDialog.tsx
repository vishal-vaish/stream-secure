"use client";

import React, {useState} from 'react'
import {
  Dialog,
  DialogContent, DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {createStorageSchema, createStorageSchemaType} from "@/lib/schema";
import {Card} from "@/components/ui/card";
import {Eye, EyeOff, Loader2, Plus} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {waitFor} from "@/lib/utils";
import {toast} from "sonner";

const CreateStorageDialog = () => {
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<createStorageSchemaType>({
    resolver: zodResolver(createStorageSchema),
    mode: "onChange",
    defaultValues: {
      storageName: '',
      storageType: 'Local Storage',
      ipAddress: '',
      path: '',
      authentication: {
        username: '',
        password: ''
      },
      storageCapacity: 1,
      retentionSettings: {
        enableAutoDelete: false,
        autoDeleteOlderThan: 11,
        timeUnit: 'Days'
      },
      advancedOptions: {
        setPrimaryStorage: false,
        useAsBackupOnly: false,
      }
    }
  });

  const onSubmit = async (data: createStorageSchemaType) => {
    setIsPending(true);

    try {
      await waitFor(5);
      setOpen(false);
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        form.reset();
        setOpen(open)
      }}
    >
      <DialogTrigger asChild>
        <Card
          className="flex flex-col justify-center items-center w-full min-h-56 text-gray-500 border-2 border-dotted border-blue-900 cursor-pointer">
          <Plus size={48} className="text-gray-500"/>
          <div className="text-xl">Add</div>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="pb-4 border-b">
          Add New Storage
        </DialogTitle>
        <div className="max-h-[80vh] overflow-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="storageName"
                render={({field}) => (
                  <FormItem className="p-2">
                    <FormLabel className="flex gap-1 items-center mb-2">
                      Storage Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Storage Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storageName"
                render={({field}) => (
                  <FormItem className="p-2 pt-0">
                    <FormLabel className="flex gap-1 items-center mb-2">
                      Storage Type
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Storage Type"/>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Local Storage">Local Storage</SelectItem>
                          <SelectItem value="Network Storage">Network Storage</SelectItem>
                          <SelectItem value="Cloud Storage">Cloud Storage</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ipAddress"
                render={({field}) => (
                  <FormItem className="p-2 pt-0">
                    <FormLabel className="flex gap-1 items-center mb-2">
                      Ip Address/Hostname
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 192.168.1.100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="path"
                render={({field}) => (
                  <FormItem className="p-2 pt-0">
                    <FormLabel className="flex gap-1 items-center mb-2">
                      Path/Mount Point
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. /mnt/recordings"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <div className="!mt-2">
                <h3 className="text-lg font-medium ml-2">Authentication</h3>
                <div className="flex !mt-1">
                  <FormField
                    control={form.control}
                    name="authentication.username"
                    render={({field}) => (
                      <FormItem className="p-2 pt-0 w-full">
                        <FormControl>
                          <Input
                            placeholder="username"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="authentication.password"
                    render={({field}) => (
                      <FormItem className="p-2 pt-0 w-full">
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="password"
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
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="storageCapacity"
                render={({field}) => (
                  <FormItem className="p-2 pt-0">
                    <FormLabel className="flex gap-1 items-center mb-2">
                      Storage Capacity (in TB)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Storage Capacity"
                        min={0.1}
                        step={0.1}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Retention Settings</h3>
                <div className="flex items-center gap-2 justify-center">
                  <FormField
                    control={form.control}
                    name="retentionSettings.enableAutoDelete"
                    render={({field}) => (
                      <FormItem className="flex flex-row justify-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Auto delete recordings older than
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <div className="flex ">
                    <FormField
                      control={form.control}
                      name="retentionSettings.autoDeleteOlderThan"
                      render={({field}) => (
                        <FormItem className="m-2">
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              className="w-16"
                              value={field.value || ""}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                              disabled={!form.watch("retentionSettings.enableAutoDelete")}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="retentionSettings.timeUnit"
                      render={({field}) => (
                        <FormItem className="m-2">
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              disabled={!form.watch("retentionSettings.enableAutoDelete")}
                            >
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Select unit"/>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Hours">Hours</SelectItem>
                                <SelectItem value="Days">Days</SelectItem>
                                <SelectItem value="Weeks">Weeks</SelectItem>
                                <SelectItem value="Months">Months</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Advanced Options</h3>

                <FormField
                  control={form.control}
                  name="advancedOptions.setPrimaryStorage"
                  render={({field}) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked && form.getValues("advancedOptions.useAsBackupOnly")) {
                              form.setValue("advancedOptions.useAsBackupOnly", false, {
                                shouldValidate: false
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Set as primary storage
                        </FormLabel>
                      </div>
                      <FormMessage/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="advancedOptions.useAsBackupOnly"
                  render={({field}) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            field.onChange(checked);
                            if (checked && form.getValues("advancedOptions.setPrimaryStorage")) {
                              form.setValue("advancedOptions.setPrimaryStorage", false, {
                                shouldValidate: false
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Use as backup storage only
                        </FormLabel>
                      </div>
                      <FormMessage/>
                    </FormItem>
                  )}
                />

                {form.formState.errors.advancedOptions?.root && (
                  <div className="text-sm font-medium text-destructive mt-1">
                    {form.formState.errors.advancedOptions.root.message}
                  </div>
                )}
              </div>
              <div className="m-2 !my-5">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isPending}
                >
                  {!isPending ? "Add" : <Loader2 className="animate-spin"/>}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default CreateStorageDialog
