import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Fábio Silva",
  description: "Portfolio of Fábio Silva, a passionate web developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience in the world of web development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
