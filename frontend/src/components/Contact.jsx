import googleScholar from '../assets/google_scholar.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import resume from '../assets/resume.jpg';

export default function Contact() {
  const contacts = [
    {
      img: googleScholar,
      alt: 'Scholar',
      href: 'https://scholar.google.com/citations?user=lDW4_G4AAAAJ&hl=en'
    },
    {
      img: linkedin,
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhushanshah05/'
    },
    {
      img: github,
      alt: 'GitHub',
      href: 'https://github.com/bhushansshah'
    },
    {
      img: gmail,
      alt: 'Gmail',
      href: 'mailto:bhushan.shah05@gmail.com'
    },
    {
      img: resume,
      alt: 'Resume',
      href: 'https://drive.google.com/file/d/1tRoEZU-PFDMYGivRr96299WVsiC0YTwR/view?usp=sharing'
    }
  ];

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-sky-500 text-2xl font-bold mb-4">Contact</h2>
      <div className="flex gap-4 items-center mb-4">
        {contacts.map((contact, idx) => (
          <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer">
          <img
            src={contact.img}
            alt={contact.alt}
            className="h-8 cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
        ))}
      </div>
      <p className="text-sm">
        Feel free to reach out for research collaborations, project ideas, or just to connect.
        <br />
        Email: <a href="mailto:bhushan@gmail.com" className="text-blue-600">bhushan@gmail.com</a>
      </p>
    </section>
  );
}