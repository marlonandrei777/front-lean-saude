import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { PatientTableContextProvider } from "./context/PatientTableContext";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Login | Lean Saude",
  description: "Gerencie sua lista de usuários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" >
      <body
        suppressHydrationWarning
        className={lato.className}
      >
        <PatientTableContextProvider>
          {children}
        </PatientTableContextProvider>
      </body>
    </html>
  );
}
