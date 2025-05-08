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
import {
  createNVRDevicesSchema,
  createNVRDevicesSchemaType
} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "@/components/ui/card";
import {Eye, EyeOff, Loader2, Plus} from "lucide-react";
import {Input} from "@/components/ui/input";
import {waitFor} from "@/lib/utils";
import {toast} from "sonner";

const CreateNvrDialog = () => {
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<createNVRDevicesSchemaType>({
    resolver: zodResolver(createNVRDevicesSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      location: "",
      manufacturer: "Hikvision",
      model: "",
      ipAddress: "",
      macAddress: "",
      rtspPort: "554",
      httpPort: "80",
      username: "",
      password: "",
      maxChannels: 16,
      storageCapacity: 1
    }
  });

  const onSubmit = async (data: createNVRDevicesSchemaType) => {
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
      <DialogContent className="!max-w-2xl">
        <DialogTitle className="pb-4 border-b">
          Add New NVR Device
        </DialogTitle>
        <div className="max-h-[80vh] overflow-auto">
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex">
                <FormField
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        NVR Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter NVR Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Storage Type
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Location"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex">
                <FormField
                  control={form.control}
                  name="manufacturer"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Manufacturer
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Manufacture"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Hikvision">Hikvision</SelectItem>
                            <SelectItem value="Dahua">Dahua</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="model"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Model
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Model"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex">
                <FormField
                  control={form.control}
                  name="ipAddress"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        IP Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="192.168.1.100"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="macAddress"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Mac Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="00:00:00:00:00:00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex">
                <FormField
                  control={form.control}
                  name="username"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="*******"
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

              <div className="flex">
                <FormField
                  control={form.control}
                  name="rtspPort"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        RTSP Port
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="554"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="httpPort"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        HTTP Port
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex">
                <FormField
                  control={form.control}
                  name="maxChannels"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Max Channels
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Max Channels"
                          type="number"
                          min={1}
                          max={16}
                          step={1}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="storageCapacity"
                  render={({field}) => (
                    <FormItem className="p-2 pt-0 w-full">
                      <FormLabel className="flex gap-1 items-center mb-4">
                        Storage Capacity (TB)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Capacity"
                          type="number"
                          min={1}
                          step={1}
                          max={1024}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>
              <div className="m-2 !my-5">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isPending}
                >
                  {!isPending ? "Add NVR" : <Loader2 className="animate-spin"/>}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default CreateNvrDialog
