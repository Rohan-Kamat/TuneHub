import Image from "next/image";
import Link from "next/link";
import Grid from "@/app/ui/landing-page/home-grid";
import Card from "@/app/ui/landing-page/feature-card";
import { features } from "@/app/lib/features";


export default function Home() {

  return (
    <div className="container mx-auto ">
      <div className="h-screen w-full flex ">
        <div className="flex justify-center items-center flex-1 w-5/6">
          <div className="p-2 w-4/6">
            <Image
              src={"/tunehub-logo.png"}
              alt="Tunehub Logo"
              height={70}
              width={70} 
            />
            <h1 className="font-light text-2xl mb-5 text-pink-700">TuneHub</h1>
            <p className="font-bold lg:text-5xl text-4xl mt-5">Collaborate, Discover and Share <span className="text-[#ef0f66]">Music</span> with the rest of the world</p>
            <div className="mt-5">
              <Link
                href={"/login"}
              >
                <button className="btn-1" style={{
                  width: "80%"
                }}>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 p-3 flex justify-center items-center md:flex hidden">
          <Image
            src={"/homepage-band.png"}
            width={700}
            height={700}
            alt="Bands performing"
          />
        </div>
      </div>
      <div className="mt-10 p-3">
        <p className="text-xl font-medium tracking-wide">Connect with artists from different regions of the world, practicing exquisite styles and genres and build your musical community.</p>
        <div className=" mt-10">
          <Grid />
        </div>
      </div>
      <div className="features mt-10">
        {features.map((feature, index) => {
          var textSide: "left" | "right";
          if (index % 2 == 0) {
            textSide = "right"
          } else {
            textSide = "left"
          }
          return (
            <Card
              key={feature.id}
              id={feature.id}
              title={feature.title}
              content={feature.content}
              lottieFile={feature.lottie}
              textSide={textSide}
            />
          );
        })}
      </div>
    </div>
  );
}
