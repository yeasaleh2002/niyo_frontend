import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const metadata = {
  title: "NIYO",
  description: "Nobojagoron Islamic Youth Organisation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry></body>
    </html>
  );
}
