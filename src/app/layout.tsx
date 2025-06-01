import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Providers } from "@/components/Providers";
import { ThemeToggle } from "@/components/theme-toggle";
import { MotionWrapper } from "@/components/motion-wrapper";
import "./globals.css";

const fontSans = GeistSans;
const fontMono = GeistMono;

export const metadata = {
  title: "Rami.ai",
  description: "Read, Analyze, Memorize, Interpret",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <ThemeToggle />
          <MotionWrapper>{children}</MotionWrapper>
        </Providers>
      </body>
    </html>
  );
}
