import BlogList from "@/components/blogCard/BlogList";
import Quote from "@/components/bookQuotes/Quote";
import Hero from "@/components/hero/Hero";
import LearnSection from "@/components/learnCard/LearnSection";
import StorySection from "@/components/story/StorySection";



export default function Home() {
  return (
    
      <div>
        <Hero />
        <StorySection />
        <BlogList />
        <Quote />
        <LearnSection />
      </div>
    
  );
}