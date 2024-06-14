import type { Metadata } from "next";

import MainNavigation from "@/components/navigation/MainNavigation";
import Container from "@/components/ui/Container";
import Footer from "@/components/footer/Footer";

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
        <>
            <header className="bg-main-blue py-4">
                <Container>
                    <MainNavigation />
                </Container>
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
        </>
    );
}
