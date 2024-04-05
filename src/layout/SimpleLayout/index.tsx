import Header from "./Header";
import Footer from "./Footer";
import Intro from "@/sections/homepage/Intro/Intro";

export default function SimpleLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <div style={{
        background: 'radial-gradient(circle, rgba(240,18,126,1) 0%, rgba(10,27,110,1) 52%, rgba(0,0,0,1) 100%)',
      }}>
        <Intro />
        <Header />
      </div>
        {children}
      <Footer />
    </>
  );
}
