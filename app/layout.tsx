import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "108 Art Collective",
  description: "Official website of 108 Art Collective.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
