import { asset } from "@/lib/asset";
import Shell from "@/components/Shell";

export const metadata = {
  title: "Sparsh Architecture",
  description: "Sparsh Architecture — migrated to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:300,400,500"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300i,400,500"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={asset("/vendor/themify-icons/themify-icons.css")} />
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        />
        <link rel="stylesheet" href={asset("/vendor/bootstrap/bootstrap.min.css")} />
        <link rel="stylesheet" href={asset("/css/style.css")} />
        <link rel="stylesheet" href={asset("/css/overrides.css")} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
