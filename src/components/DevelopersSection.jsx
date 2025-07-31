import React from 'react';

const developers = [
  {
    name: 'Mannat',
    role: 'Lead AI Engineer',
    description: 'Passionate about machine learning and natural language processing.',
    rating: 5.0,
    skills: ['Python', 'TensorFlow', 'NLP', 'Machine Learning'],
    projects: 12,
    experience: '2+',
    initial: 'M',
  },
  {
    name: 'Krishan',
    role: 'Backend Developer',
    description: 'Expert in scalable backend systems and cloud architecture.',
    rating: 5.0,
    skills: ['Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    projects: 8,
    experience: '2+',
    initial: 'K',
  },
  {
    name: 'Harsh',
    role: 'Frontend Developer',
    description: 'Creates beautiful and intuitive user interfaces.',
    rating: 4.0,
    skills: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    projects: 10,
    experience: '2+',
    initial: 'H',
  },
  {
    name: 'Aryan',
    role: 'ML Engineer',
    description: 'Focuses on developing and optimizing machine learning models.',
    rating: 5.0,
    skills: ['PyTorch', 'Scikit-learn', 'OpenCV', 'Data Science'],
    projects: 6,
    experience: '2+',
    initial: 'A',
  },
  {
    name: 'Gagan',
    role: 'DevOps Engineer',
    description: 'Manages deployment pipelines and infrastructure.',
    rating: 4.0,
    skills: ['Kubernetes', 'CI/CD', 'Monitoring', 'Linux'],
    projects: 9,
    experience: '2+',
    initial: 'G',
  },
];

const DevelopersSection = () => {
  return (
    <section id="developers" className="py-24 bg-gray-50 text-center px-4">
      <h2 className="text-4xl font-bold mb-2">Meet Our Developers</h2>
      <p className="text-gray-600 text-lg mb-12">
        The talented team behind Coherent&apos;s innovative AI technology
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                {dev.initial}
              </div>
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{dev.role}</p>

              <div className="flex justify-center items-center mt-2 text-yellow-400 text-sm">
                {'★'.repeat(Math.floor(dev.rating))}
                {'☆'.repeat(5 - Math.floor(dev.rating))}
                <span className="text-gray-600 ml-1 text-xs">({dev.rating.toFixed(1)})</span>
              </div>
            </div>

            <p className="text-gray-600 mt-4 text-sm">{dev.description}</p>

            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {dev.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6 text-center text-sm font-semibold text-gray-700">
              <div>
                <p>{dev.projects}</p>
                <p className="text-xs font-normal">Projects</p>
              </div>
              <div>
                <p>{dev.rating}</p>
                <p className="text-xs font-normal">Rating</p>
              </div>
              <div>
                <p>{dev.experience}</p>
                <p className="text-xs font-normal">Years</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopersSection;
