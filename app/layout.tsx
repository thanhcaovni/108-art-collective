import "./globals.css";

export const metadata = {
  title: "108 Art Collective",
  description: "Official website of 108 Art Collective."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
