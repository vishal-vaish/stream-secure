"use client";

import React, {useEffect} from 'react'
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {AlertCircle} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";

const Page = () => {
  const {setBreadcrumbItems, setNavbarTitle} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("All Reports");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  return (
    <div className="h-[calc(100vh-9rem)] flex items-center justify-center">
      <Card className="max-w-md mx-auto text-center">
        <CardHeader className="flex flex-col items-center gap-2">
          <AlertCircle className="text-gray-500" size={32} />
          <CardTitle>This Feature is currently disabled</CardTitle>
          <Separator/>
          <CardDescription>
            Automated documentation of security insights with exportable data visualization capabilities.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
export default Page
