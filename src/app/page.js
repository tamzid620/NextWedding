import Banner from "@/components/userShared/Banner/page";
import PricePlan from "@/components/userShared/PricePlan/page";
import Testimonial from "@/components/userShared/Testimonial/page";
import TypeOf from "@/components/userShared/TypesOf/page";

export default function Home() {
  return (
    <main className="mx-5">
   <Banner/>
   <TypeOf/>
   <Testimonial/>
   <PricePlan/>
    </main>
  );
}
