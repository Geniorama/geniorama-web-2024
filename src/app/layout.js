import LayoutWithIntro from "@/layout/LayoutWithIntro";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWithIntro>
          {children}
        </LayoutWithIntro>
      </body>
    </html>
  );
}
