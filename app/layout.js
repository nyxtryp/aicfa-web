export const metadata = {
  title: "AICFA — AI for Digital Financial Assets",
  description: "Independent intelligence system for structured analysis of digital financial markets."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
