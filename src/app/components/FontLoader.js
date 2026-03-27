"use client";

export default function FontLoader() {
    return (
        <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
            as="style"
            onLoad={(e) => {
                e.currentTarget.onload = null;
                e.currentTarget.rel = "stylesheet";
            }}
        />
    );
}
