"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import LoginForm from "./login-form"
import RegisterForm from "./register-form"
import SocialAuth from "./social-auth"
import { Separator } from "@/components/ui/separator"

export default function AuthForm() {
    const [activeTab, setActiveTab] = useState<string>("login")

    return (
        <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            <CardHeader className="px-4 sm:px-6">
                <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 h-10 sm:h-12">
                        <TabsTrigger 
                            value="login" 
                            className="text-sm sm:text-base"
                        >
                            Login
                        </TabsTrigger>
                        <TabsTrigger 
                            value="register" 
                            className="text-sm sm:text-base"
                        >
                            Register
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </CardHeader>
            
            <CardContent className="px-4 sm:px-6 pb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsContent value="login">
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="register">
                        <RegisterForm />
                    </TabsContent>
                </Tabs>

                <div className="relative my-4 sm:my-6">
                    <div className="absolute inset-0 flex items-center">
                        <Separator className="bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-background px-2 text-muted-foreground text-xs sm:text-sm">
                            Or continue with
                        </span>
                    </div>
                </div>

                <SocialAuth />
            </CardContent>
        </Card>
    )
}