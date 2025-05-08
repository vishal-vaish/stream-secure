"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Clock, Shield, User} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import TooltipWrapper from "@/components/TooltipWrapper";
import {validUserData} from "@/lib/data";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
  const {searchTerm} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("All Users");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const formatTime = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', {numeric: 'auto'}).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60)),
      'minutes'
    );
  };

  const filteredUser = validUserData.filter(data =>
    data.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">System Users</h2>
            <Button
              variant="default"
              className="bg-blue-500 dark:bg-blue-600 text-gray-50"
            >
              Add User
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-gray-700">
                  <TableHead className="text-gray-600 dark:text-gray-300">User</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-300">Role</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-300">Last Active</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-300 text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUser.map(user => (
                  <TableRow key={user.id} className="border-b border-gray-100 dark:border-gray-700">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8 bg-gray-100 dark:bg-gray-600">
                          <AvatarFallback
                            className="flex items-center justify-center text-gray-600 dark:text-gray-300 dark:bg-gray-700">
                            <User className="w-4 h-4"/>
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.username}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-gray-600 dark:text-gray-300"/>
                        <span className="text-gray-900 dark:text-white">{user.role}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        className={cn("py-1 px-4",
                          user.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100 hover:text-green-800"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-gray-800"
                        )}
                      >
                        {user.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-600 dark:text-gray-300"/>
                        <span className="text-gray-600 dark:text-gray-300">
                            {formatTime(user.lastActive)}
                          </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 text-center">
                      <TooltipWrapper content={"Edit User"}>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-700 hover:bg-transparent dark:text-blue-500 dark:hover:text-blue-400 p-0"
                        >
                          Edit
                        </Button>
                      </TooltipWrapper>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
