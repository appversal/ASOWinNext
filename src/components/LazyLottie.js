"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie to reduce bundle size and defer loading
const Lottie = dynamic(() => import("lottie-react"), { 
    ssr: false, 
    loading: () => <div className="w-full h-[400px] bg-muted animate-pulse rounded-lg" />
});

export default function LottieAnimation({ animationData, className }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Delay load slightly to prioritize LCP
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) return <div className="w-full h-[400px] bg-muted/5 animate-pulse rounded-lg" />;

    return (
        <Lottie
            animationData={animationData}
            loop={true}
            className={className}
        />
    );
}
