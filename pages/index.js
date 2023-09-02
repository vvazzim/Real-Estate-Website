import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheteam/MeetTheTeam";
import Partners from "@/features/Home/components/Partners";
import Testimonials from "@/features/Home/components/Testimonials";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import FeedbackForm from "../features/Home/components/FeedbackForm";
export default function Home(featuredProperties) {
  return (
    <>
  <DefaultLayout>
  <HeroBanner/>
  <FeaturedProperties featuredProperties={featuredProperties}/>
  <MeetTheTeam/>
  <FeedbackForm/>
  <Testimonials/>
  </DefaultLayout>
    </>
  );
  }

export async function getStaticProps(){
const {hits} = require('@/features/data/properties');
return{
  props:{featuredProperties:hits.slice(0,5)}
}
}