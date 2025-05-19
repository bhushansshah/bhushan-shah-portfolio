export default function Skills() {
    const skills = [
        "Python", "R", "SQL", "C", "C++", "HTML", "CSS", "JavaScript",
        "Scikit-learn", "PyTorch", "NLTK", "Tensorflow", "Keras", "Pandas", "NumPy", "Seaborn", "Matplotlib", "OpenCV",
        "Advanced Learning Algorithms", "Deep Learning Specialization", "Machine Learning Specialization", "Computer Vision",
        "Reinforcement Learning", "Data Structures and Algorithms", "Artificial Intelligence", "Data Science"
      ];      
  
    return (
      <section id="skills" className="mb-12">
        <h2 className="text-sky-500 text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-sky-400 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }