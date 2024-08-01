import Header from "../components/header";
import Skills from "../components/skills";
import Works from "../components/works";
import '../styles/portfolio.scss';

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Skills />
        <Works />
      </div>
    </main>
  );
}
