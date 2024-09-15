import GetStartedButton from "@/components/buttons/GetStartedButton";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="px-4 flex flex-col min-h-screen items-start bg-gradient-to-br from-[#e8f0ff] to-[#bad0ee] pb-20">
    {/* Navabr  */}

    <div className="relative mx-auto w-full flex flex-col items-center gap-y-8 mt-10 lg:mt-16  ">
    <Headline />
    <GetStartedButton />

    </div>
   </main>
  );




}


const Headline=()=>{
  return(
    <div className="flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-pretty text-center tracking-tighter leading-[1.15]">Engage your audience like never before</h1>
      <p className="text-muted-foreground text-center leading-relaxed mt-2 lg:mt-4">
        Pulse offers a suite of interactive features to keep your audience engaged and provide you with valuable insights
      </p>
    </div>
  )
}
