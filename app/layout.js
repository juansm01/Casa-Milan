import Header from "@/components/Header";
import Footer from "@/components/Footer";
import globals from "../globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body className="scrollbar-none">
        <Header />
        <div className="w-full h-full">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
