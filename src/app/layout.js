import SimpleLayout from "@/layout/SimpleLayout";
import './globals.css';

export default function RootLayout({ children }) {
  return (
     <html lang="es">
      <body>
        <SimpleLayout>{children}</SimpleLayout>
      </body>
     </html>
  );
}
