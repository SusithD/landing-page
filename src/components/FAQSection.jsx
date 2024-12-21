import React, { useState } from "react";

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];

  return (
    <section className="w-full max-w-[800px] mx-auto mt-8 px-4 sm:px-0">
      {/* Title */}
      <h2 className="text-center text-lg sm:text-xl font-poppins font-semibold text-purpleCustom mb-6">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-sm cursor-pointer transition-all ${
              selectedQuestion === index
                ? "bg-purpleCustom/10"
                : "bg-gray-100 hover:bg-purpleCustom/5"
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`text-sm sm:text-base font-poppins font-medium ${
                  selectedQuestion === index ? "text-purpleCustom" : "text-gray-900"
                }`}
              >
                {item.question}
              </h3>
              <span
                className={`text-lg sm:text-xl transition-transform ${
                  selectedQuestion === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {selectedQuestion === index ? "−" : "+"}
              </span>
            </div>
            {selectedQuestion === index && (
              <p className="mt-3 text-xs sm:text-sm text-gray-700">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
