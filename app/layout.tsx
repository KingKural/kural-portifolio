import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";

export const metadata: Metadata = {
  title: "Portfolio Fábio Silva",
  description: "Portfolio of Fábio Silva, a passionate web developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience in the world of web development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
      <NavBar />
      {children}
    </body>
  </html>;
}
