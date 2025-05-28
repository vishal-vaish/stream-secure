import React, {useCallback} from 'react'
import {validUserData} from "@/lib/data";
import {LogOutIcon} from "lucide-react";
import {useMutation} from "@tanstack/react-query";
import {Logout} from "@/actions/auth";
import {toast} from "sonner";

const UserDetails = () => {

  const {mutate} = useMutation({
    mutationFn: Logout,
    onSuccess: () => {
      toast.success("Logout successful", {id: "logout-user"});
    },
    onError: () => {
      toast.error("Failed to Logout", {id: "logout-user"});
    }
  });

  const handleClick = useCallback(() => {
      toast.loading("Logging out user...", {id: "logout-user"});
      mutate();
    },
    [mutate]
  );

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-100">{validUserData.username}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">{validUserData.email}</p>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={handleClick}
        >
          <LogOutIcon/>
        </div>
      </div>
    </div>
  )
}
export default UserDetails
