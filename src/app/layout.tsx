import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom Daniaud's Porfolio",
  description: "A water and computer-oriented fancy portfolio (V1.0) developed and designed by Tom Daniaud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-mono antialiased bg-teal-800"
        style={{
          backgroundColor: "rgb(17, 94, 89)",
          background: "radial-gradient(circle at bottom right, rgba(150, 56, 53, 1) 10%, rgba(17, 94, 89, 1) 65%)",
        }}
      >
        {children}
      </body>
    </html >
  );
}
