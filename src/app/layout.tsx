import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { getHelpcenterSettings } from "../api/queries";
import KbLayout from "../components/kb-layout";
import { ReactQueryProvider } from "../components/react-query-provider";
import { SimpuWidget } from "../components/simpu-widget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const res = await getHelpcenterSettings()
  return {
    title: res.name,
    icons: {
      icon: res.favicon
    }
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getHelpcenterSettings()
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <KbLayout>{children}</KbLayout>
        </ReactQueryProvider>
      </body>
      {res.enable_livechat_widget && <>
        <Script
          id="simpu-widget-script"
          src={`${process.env.WIDGETS_URL}/widgets/v1/simpu-widget.js`}
        />
        <SimpuWidget app_id={res.livechat_app_id} public_key={res.organization_public_key}/>
      </>}
    </html>
  );
}
