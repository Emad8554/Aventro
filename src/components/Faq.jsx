import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vestibulum ac diam sit amet quam vehicula elementum?",
    answer:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
  {
    question: "Nulla porttitor accumsan tincidunt mauris blandit?",
    answer:
      "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.",
  },
  {
    question: "Curabitur aliquet quam id dui posuere blandit proin?",
    answer:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.",
  },
  {
    question: "Vivamus magna justo lacinia eget consectetur sed?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
  },
  {
    question: "Donec sollicitudin molestie malesuada proin eget?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati. Cupiditate non provident, similique sunt in culpa.",
  },
  {
    question: "Pellentesque in ipsum id orci porta dapibus vestibulum?",
    answer:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in.",
  },
];
const FAQSection = () => {
  return (
    <div className="bg-background layout">
      {/* Header Text */}
      <div className="w-full text-center mb-12">
        <h1 className="mainText">Frequently Asked Questions</h1>
        <p className="text-gray-100 mx-auto max-w-2xl mt-4">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-5xl mx-auto">
        <Accordion type="single" collapsible className="bg-foreground">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-inherit"
            >
              <AccordionTrigger className="px-6 py-8 text-left hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-blue-400 font-bold text-xl">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
