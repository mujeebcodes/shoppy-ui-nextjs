import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import darkTheme from "./dark.theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "@/components/Header";
import Providers from "./providers";
import authenticated from "./auth/authenticated";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await authenticated();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header />
          <Container> {children}</Container>
        </Providers>
      </body>
    </html>
  );
}
