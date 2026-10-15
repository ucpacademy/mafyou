import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAFYOU | Premium Motorbike Store",
  description: "Discover and book premium motorbikes. Order directly on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
