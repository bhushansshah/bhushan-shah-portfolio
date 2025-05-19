import profilePhoto from '../assets/profile_photo.jpeg';

export default function About() {
  return (
    <section id="about" className="flex gap-8 mb-12">
      <img src={profilePhoto} alt="Bhushan Shah" className="w-44 h-44 object-cover rounded-xl" />
      <div>
        <h2 className="text-sky-500 text-2xl font-bold mb-2">About Me</h2>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Bhushan Santosh Shah - NLP & LLM Enthusiast</h3>
        <p>
          I'm an undergraduate student at College of Engineering Pune, passionate about Natural Language Processing, AI
          alignment, and model robustness. I enjoy building research-driven tools and exploring how large language
          models can be made safer and more effective for real-world use.
        </p>
      </div>
    </section>
  );
}