import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainNavigation from "@/components/navigation/MainNavigation";
import Container from "@/components/ui/Container";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Odesco",
    description: "The shop where furniture and appliances are trusted",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="bg-main-blue py-4">
                    <Container>
                        <MainNavigation />
                    </Container>
                </header>
                {children}
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
