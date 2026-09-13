import type { Metadata } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/work-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltj54.github.io/mlc-eiendomsfornying"),
  title: "MLC Eiendomsfornying Leszczynski",
  description: "Utvendig vask og vedlikehold i Vestfold. MLC Eiendomsfornying hjelper med tak, fasade, takrenner, terrasser og belegningsstein. Kontakt Mariusz på 486 10 783.",
  robots: { index: false, follow: false },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
