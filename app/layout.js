import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./Redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth",
  description: "Next.js authentication with next-auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
