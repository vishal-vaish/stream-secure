import React from 'react'
import {MoveRight} from "lucide-react";
import {settingMockedData} from "@/lib/data";
import {Card} from "@/components/ui/card";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">System Settings</h2>
          <div className="space-y-4">
            {settingMockedData.map((data) => {
                const Icon = data.icon;
                return (
                  <Card key={data.id} className="flex justify-between p-4">
                    <div className="flex items-center gap-5">
                      <Icon/>
                      <div>{data.settingName}</div>
                    </div>
                    <MoveRight/>
                  </Card>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
