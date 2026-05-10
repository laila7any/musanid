import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReduxProvider from '../app/providers/ReduxProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Musanid",
  description: "Digital Musanid Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>

        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">
              {children}
            </main>
            <Footer />
        </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
