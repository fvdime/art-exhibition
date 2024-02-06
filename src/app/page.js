import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import HeroBanner from "@/components/hero-banner";
import Navbar from "@/components/navbar";
import { GetGalleryImages } from "@/lib/action";

export default async function Home() {

  return (
    <>
      <HeroBanner />
      <Gallery />
      <Footer />
    </>
  );
}
