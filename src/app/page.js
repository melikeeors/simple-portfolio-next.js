import Header from "../components/header";
import Skills from "../components/skills";
import Works from "../components/works";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import '../styles/portfolio.scss';

export default function Home() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Header />
        <Logo />
        <Skills />
        <Works />
        <Testimonial />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
