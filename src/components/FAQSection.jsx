import React, { useState } from 'react';

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null); // Deselect if the same question is clicked
    } else {
      setSelectedQuestion(index); // Select the clicked question
    }
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
    <section
      className="relative w-[846px] h-[392px] mt-[1847px] mx-auto gap-[28px] opacity-100"
    >
      {/* FAQ Title */}
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

      {/* FAQ Items */}
      {faqData.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleQuestion(index)}
          className={`${
            selectedQuestion === index
              ? "w-[846px] h-[149px] p-[24px_0px_0px_0px] opacity-100" // Selected question style
              : "w-[846px] h-[76px] p-[24px_0px_0px_0px] opacity-100" // Non-selected question style
          } bg-[#f3f3f3] rounded-tl-[7px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] cursor-pointer transition-all`}
        >
          <h3 className="text-lg font-semibold">{item.question}</h3>
          {selectedQuestion === index && (
            <p className="mt-3 text-sm text-[#333333]">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
