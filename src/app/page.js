import { GetFeaturedWorks } from "@/actions/post.action";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import HeroBanner from "@/components/hero-banner";

export default async function Home() {
  const featuredWorks = await GetFeaturedWorks()

  return (
    <>
      <HeroBanner />
      <Gallery featuredWorks={featuredWorks} />
      <Footer />
    </>
  );
}
