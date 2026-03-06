import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: (
      <>
        Yes! You can <a href="#pricing" className="text-primary hover:underline">upgrade or downgrade</a> your plan at any time. 
        When upgrading, you'll be charged the prorated difference. When downgrading, the remaining balance is credited to your account.
      </>
    ),
  },
  {
    question: "What happens when my subscription renews?",
    answer: (
      <>
        Your subscription automatically renews at the end of each billing cycle. We'll charge the payment method on file and send a receipt via email. 
        You can manage <a href="#how-it-works" className="text-primary hover:underline">auto-renewal settings</a> from your dashboard anytime.
      </>
    ),
  },
  {
    question: "Is there a free trial?",
    answer: (
      <>
        Yes! Every plan comes with a <strong>14-day free trial</strong>. No credit card required to start. 
        You'll get full access to all features included in your chosen plan. <Link to="/auth" className="text-primary hover:underline">Start your free trial →</Link>
      </>
    ),
  },
  {
    question: "How do I cancel my subscription?",
    answer: (
      <>
        Cancel anytime from your <Link to="/dashboard" className="text-primary hover:underline">dashboard settings</Link>. 
        Your access continues until the end of your current billing period. There are absolutely no cancellation fees.
      </>
    ),
  },
  {
    question: "Do you offer refunds?",
    answer: (
      <>
        We offer a <strong>30-day money-back guarantee</strong> on all plans. If you're not satisfied within the first 30 days, 
        contact our support team for a full refund. See our <a href="#" className="text-primary hover:underline">refund policy</a> for details.
      </>
    ),
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans. 
        All payments are processed securely with <a href="#features" className="text-primary hover:underline">PCI DSS compliance</a>.
      </>
    ),
  },
  {
    question: "Can I add more team members later?",
    answer: (
      <>
        Absolutely. On <a href="#pricing" className="text-primary hover:underline">Pro and Enterprise plans</a>, 
        you can add team members at any time. Each additional seat is billed at your plan's per-seat rate with prorated billing.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 border-t border-border/30 relative">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(152 60% 48% / 0.2), transparent 60%)" }}
      />
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold text-emerald tracking-wider uppercase mb-3 block">FAQ</span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Frequently asked <span className="text-gradient-emerald">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about plans and billing. Can't find an answer?{" "}
            <a href="#" className="text-primary hover:underline">Contact support →</a>
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm px-6 transition-all data-[state=open]:border-primary/20 data-[state=open]:bg-card/60"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
