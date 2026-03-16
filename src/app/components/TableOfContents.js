"use client";
import React, { useEffect, useState } from "react";

export default function TableOfContents({ sections }) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-100px 0px -70% 0px", // Trigger when header passes near the top
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sec) => {
            const element = document.getElementById(sec.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sec) => {
                const element = document.getElementById(sec.id);
                if (element) observer.unobserve(element);
            });
        };
    }, [sections]);

    return (
        <div className="md:sticky md:top-28 md:self-start">
            <h5 className="text-[11px] font-bold text-[#718096] tracking-wider uppercase mb-5">
                TABLE OF CONTENTS
            </h5>
            <ul className="space-y-4">
                {sections.map((sec) => (
                    <li key={sec.id}>
                        <a 
                            href={`#${sec.id}`}
                            className={`block text-[14px] transition-all duration-150 ${
                                activeId === sec.id 
                                ? "text-[#111122] font-bold" 
                                : "text-[#4A5568] hover:text-[#111122] hover:font-bold"
                            }`}
                        >
                            {sec.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
