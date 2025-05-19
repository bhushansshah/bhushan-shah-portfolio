export default function Publications() {
  const publications = [
    {
      title: 'Decoding News Bias: Multi Bias Detection in News Articles',
      details: 'Presented at NLPIR Conference 2024',
      linkText: 'View Paper',
      linkHref: 'https://arxiv.org/pdf/2501.02482'
    },
    {
      title: 'A generative AI System for Food Safety, Grading, Compliance and Personalized Nutrition Evaluation',
      details: 'Published at Indian Patent Journal',
      linkText: 'View Patent',
      linkHref: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=lDW4_G4AAAAJ&citation_for_view=lDW4_G4AAAAJ:u-x6o8ySG0sC'
    }
  ];

  return (
    <section id="publications" className="mb-12">
      <h2 className="text-sky-500 text-2xl font-bold mb-4">Publications</h2>
      {publications.map((pub, idx) => (
        <div key={idx} className="mb-4">
          <div className="font-bold text-slate-800">{pub.title}</div>
          <p>
            {pub.details}
            <br />
            <a href={pub.linkHref} className="text-blue-600 underline text-sm">{pub.linkText}</a>
          </p>
        </div>
      ))}
    </section>
  );
}