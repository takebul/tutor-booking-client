import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber/Navbar";
import NextThemeProvider from "@/app/providers/NextThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Tutor Book",
  description: "The Best Tutor Booking Platform in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
