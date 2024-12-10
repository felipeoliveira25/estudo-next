import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import { GlobalStyle } from "@/styles/globalStyles";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: 'normal',
  display: "swap",
  variable: '--font-roboto',
  subsets: ['latin']   //forma de configurar as fontes da aplicação e usá-las como classname no body
})


export const metadata: Metadata = {
  title: "Next Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyle/>
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
