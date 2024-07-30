import Banner from "@/components/userShared/Banner/page";
import Testimonial from "@/components/userShared/Testimonial/page";
import TypeOf from "@/components/userShared/TypesOf/page";


export default function Home() {
  return (
    <main className="mx-5">
   <Banner/>
   <TypeOf/>
   <Testimonial/>
    </main>
  );
}
