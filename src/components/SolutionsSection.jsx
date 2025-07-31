import React from 'react';

const features = [
  {
    title: "Document Analysis",
    icon: "https://img.icons8.com/ios-filled/50/4a90e2/document.png",
    description: "Advanced AI-powered analysis that extracts key insights, summaries, and actionable information from complex documents in seconds.",
    color: "bg-blue-100"
  },
  {
    title: "Smart Processing",
    icon: "https://img.icons8.com/ios-filled/50/b57ee8/settings.png",
    description: "Intelligent document processing that understands context, identifies patterns, and provides structured outputs for better decision-making.",
    color: "bg-purple-100"
  },
  {
    title: "Secure & Reliable",
    icon: "https://img.icons8.com/ios-filled/50/81c784/lock-2.png",
    description: "Enterprise-grade security with end-to-end encryption, ensuring your sensitive documents remain private and protected at all times.",
    color: "bg-green-100"
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-4">Solutions</h2>
      <p className="text-gray-600 mb-12 text-lg">
        Powerful features to transform your document workflow
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 text-left">
            <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${feature.color}`}>
              <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
