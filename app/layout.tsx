import type { Metadata } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/work-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltj54.github.io/mlc-eiendomsfornying"),
  title: "MLC Eiendomsfornying Leszczynski",
  description: "Arbeidsprosjekt for MLC Eiendomsfornying Leszczynski.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
