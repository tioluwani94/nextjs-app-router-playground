import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "~/components/ui/theme-provider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={jakarta.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
