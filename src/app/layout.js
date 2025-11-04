import "./globals.css";

export const metadata = {
  title: "launchpad",
  description: "Self-discovering data browser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
