'use client'
import clsx from "clsx"
import lottie from "lottie-web"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";

export default function Card({
    id,
    title,
    content,
    lottieFile,
    textSide
}: {
        id: number
        title: string,
        content: string,
        lottieFile: string,
        textSide: 'left' | 'right'
    }) {
    
    const [ref, inView, entry] = useInView({
        threshold: 0.8
    });
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        if (inView && !isLoaded) {
            console.log(inView, isLoaded)
            setIsLoaded(true);
            lottie.loadAnimation({
                container: document.getElementById(`lottie-${id}`),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: lottieFile
            });
        }
    }, [inView])
    
    
    return (
        <div className="p-5 mt-5 flex justify-center gap-10  w-full " ref={ref}>
            <div className={clsx("flex items-center flex-auto shrink", {
                "order-last": textSide === "right",
                "order-first": textSide === "left"
            })}>

                <div className="p-3">
                    <h1 className="font-bold text-3xl">{title}</h1>
                    <p className="text-gray-500">{content}</p>
                </div>
            </div>
            <div id={`lottie-${id}`} className="p-3 flex-1 h-96 md:basis-80 sm:basis-64 basis-48 shrink-0">
            </div>
        </div>
    )
}