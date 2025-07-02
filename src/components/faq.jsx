import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

const faqs = [
  {
    question: "What Services Does Your Agency Offer?",
    answer:
      "Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing. We specialize in creating high-quality, user-friendly, and visually appealing products that enhance efficiency and drive growth.",
  },
  {
    question: "How Do You Ensure The Quality Of Your Work?",
    answer:
      "We follow a structured quality assurance process, involving testing, client feedback, and best coding practices to ensure high-quality results.",
  },
  {
    question: "How Do You Handle Project Revisions Or Changes?",
    answer:
      "We offer multiple revision rounds based on project scope. Our team works closely with clients to integrate changes quickly and efficiently.",
  },
  {
    question: "What If I'm Not Satisfied With The Final Result?",
    answer:
      "Client satisfaction is our priority. We offer refinements to ensure your vision is realized while staying within project boundaries.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#070322] text-white py-16 px-6 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-8">Frequently Asked <span className="text-gray-400">Questions</span></h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-[#0B051C] to-[#1C1240] rounded-xl mb-4 overflow-hidden transition-all duration-500`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full px-6 py-5 focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-left">
                {faq.question}
              </h3>
              <span className="text-2xl">
                {activeIndex === index ? <IoIosClose /> : <IoIosAdd />}
              </span>
            </button>
            <div
              className={`px-6 transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-[300px] opacity-100 py-2' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
