import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ThemeProvider } from "@/context/ThemeContext";
import { WalletProvider } from "@/context/WalletProviderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tradoxus",
  description: "Interactive trading education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletProvider>
          <ThemeProvider>
            <div className="min-h-[calc(100vh-85px)]">
              <Header />
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
