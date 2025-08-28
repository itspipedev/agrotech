import Header from "../3-organisms/Header";
import Hero from "../3-organisms/Hero";
import Features from "../3-organisms/Features";

function MainTemplate({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div className="landing-template">
      <Header onLoginClick={onLoginClick} />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default MainTemplate;
