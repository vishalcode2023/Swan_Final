import "./globals.css";

export const metadata = {
  title:
    "Swan Sorter | AI-Powered Color Sorting Machines for Precision Sorting",
  description:
    "Experience next-level precision with Swan Sorter’s AI-powered color sorting machines. Designed for agriculture, food processing, and industrial materials, our advanced technology ensures high-speed, accurate, and energy-efficient sorting. Optimize productivity with intelligent automation today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/SwanSorter_Logo-02.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
