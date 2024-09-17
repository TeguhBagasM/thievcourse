import { Header, Statistics, CTA, WhatsApp, Footer } from "./components";
import { About, Blogs, Courses, Hero, Instructors, PopularCourses } from "./sections";

export default function App() {
  return (
    <div className="dark:bg-gray-950">
      <Header />
      <Hero />
      <Statistics />
      <About />
      <PopularCourses />
      <Courses />
      <Instructors />
      <Blogs />
      <CTA />
      <WhatsApp />
      <Footer />
    </div>
  );
}
