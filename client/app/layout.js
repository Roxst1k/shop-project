import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/header/header";
import {MyProvider} from "@/app/services/context";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Food (shops)",
    description: "Food (shops)",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <MyProvider>
            <div className="container">
                <Header/>
                {children}
            </div>
        </MyProvider>
        </body>
        </html>
    );
}
