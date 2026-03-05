import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the remaining balance is credited to your account.",
  },
  {
    question: "What happens when my subscription renews?",
    answer: "Your subscription automatically renews at the end of each billing cycle. We'll charge the payment method on file and send you a receipt via email. You can cancel auto-renewal at any time from your account settings.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Every plan comes with a 14-day free trial. No credit card required to start. You'll get full access to all features included in your chosen plan during the trial period.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period. There are no cancellation fees.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied within the first 30 days, contact our support team for a full refund.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 border-t border-border/50">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about plans and billing.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
