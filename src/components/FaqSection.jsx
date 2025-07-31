import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is Coherent and how does it work?',
    answer:
      'Coherent is an AI-powered platform that helps analyze and extract insights from documents. It uses advanced NLP and machine learning to automate complex workflows.',
  },
  {
    question: 'What types of documents can Coherent analyze?',
    answer:
      'Coherent can analyze reports, contracts, research papers, financial statements, and more across multiple formats like PDF, DOCX, and plain text.',
  },
  {
    question: 'Is my data secure with Coherent?',
    answer:
      'Yes, your data is fully secure. We implement enterprise-grade encryption and never share your documents without permission.',
  },
  {
    question: "How accurate is Coherent's analysis?",
    answer:
      'Coherent uses state-of-the-art AI models trained on millions of documents, achieving high accuracy in document understanding and summarization.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Everything you need to know about Coherent
        </p>

        <div className="space-y-4 text-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="text-2xl text-gray-400">
                  {openIndex === index ? '▴' : '▾'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
