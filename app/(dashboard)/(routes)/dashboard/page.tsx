"use client"
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, 
  MessageSquare, 
  Music, 
  Image,
  Video,
  Code,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import router from "next/router";


const tools = [
  {
    label:"conversation",
    icon: MessageSquare,
    color:"text-violet-500",
    bgColor :"bg-violet-500/10",
    href:"/conversation"
  },
  
  {
    label:"image Generation",
    icon: Image,
    color:"text-pink-500",
    bgColor :"bg-pink-500/10",
    href:"/image"
  },
  {
    label:"video Generation",
    icon: Video,
    color:"text-orange-700",
    bgColor :"bg-orange-700/10",
    href:"/video"
  },
  {
    label:"Music Generation",
    icon: Music,
    color:"text-emersald-500",
    bgColor :"bg-emersald-500/10",
    href:"/music"
  },
  {
    label:"code Generation",
    icon: Code,
    color:"text-green-700",
    bgColor :"bg-green-700/10",
    href:"/code"
  },
]

const DashboardPage = () => { 
  const router = useRouter();
  return (
    // <Button variant="destructive" >Hit Me Hard..</Button>
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-blod text-center"> Explore the power of AI</h2>
        <p className="text-muted-foreground fort-light text-sm md:text-lg text-center">Experience the next-gen AI in your hands right now!</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          onClick ={() => router.push(tool.href)}
          key={tool.href}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition-cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md",tool.bgColor )}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>

        ))}

      </div>
    </div>
  )
}

export default DashboardPage;