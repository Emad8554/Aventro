import { Check } from "lucide-react";
import React from "react";
import SectionHeader from "../SectionHeader";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "For small teams getting started",
      price: "$29",
      billing: "Billed monthly",
      features: [
        "Up to 10 team members",
        "5 GB storage per user",
        "Basic reporting and analytics",
        "Email support",
        "Mobile app access",
      ],
      button: {
        text: "Start Free Trial",
        variant: "secondary",
      },
      isPopular: false,
      footerNote: "14-day free trial, no credit card required",
    },
    {
      name: "Professional",
      subtitle: "For growing businesses",
      price: "$59",
      billing: "Billed monthly",
      features: [
        "Unlimited team members",
        "50 GB storage per user",
        "Advanced analytics and reporting",
        "Priority email and chat support",
        "Custom integrations",
        "API access",
      ],
      button: {
        text: "Start Free Trial",
        variant: "primary",
      },
      isPopular: true,
      footerNote: "14-day free trial, no credit card required",
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      price: "Custom Pricing",
      billing: "Tailored to your needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security and compliance",
        "Custom SLA and contracts",
      ],
      button: {
        text: "Contact Sales",
        variant: "secondary",
      },
      isPopular: false,
      footerNote: "Schedule a consultation with our team",
    },
  ];

  return (
    <section id="pricing" className="bg-background layout">
      {/* Header Text */}
      <SectionHeader title="Pricing" />

      {/* Box Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          // Card
          <div
            key={index}
            className={`relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-300 bg-foreground ${
              plan.isPopular
                ? "border-blue-500/30 shadow-lg shadow-blue-500/10"
                : "border-none"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 px-4 py-2 bg-blue-400 text-white text-xs rounded-md">
                MOST POPULAR
              </div>
            )}

            <h3 className="text-xl font-bold text-blue-100 fontbold mb-1">
              {plan.name}
            </h3>
            <p className="text-gray-400 mb-6">{plan.subtitle}</p>
            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-blue-100">
                {plan.price}
              </span>
              {plan.name !== "Enterprise" && (
                <span className="text-gray-400 ml-1">/user/month</span>
              )}
              <div className="text-sm text-gray-500 mt-1">{plan.billing}</div>
            </div>

            <ul className="space-y-3 mb-8 h-48 md:h-52">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-200"
                >
                  <div className="w-5 h-5 bg-blue-300 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-all text-white cursor-pointer ${
                  plan.button.variant === "primary"
                    ? "bg-[#1278bb] hover:opacity-90 text-white"
                    : "bg-slate-800/60 border border-gray-600 hover:border-blue-600 hover:bg-gray-800  text-blue-400"
                }`}
              >
                {plan.button.text}
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                {plan.footerNote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-gray-500 pb-8">
        All plans include: SSL security, 99.9% uptime guarantee, data backup,
        and GDPR compliance
      </div>

      {/* Links */}
      <div className="text-center space-x-4 text-sm">
        <a href="#" className="text-blue-400 hover:underline">
          Compare all features
        </a>
        <span className="text-gray-500">|</span>
        <a href="#" className="text-blue-400 hover:underline">
          View FAQ
        </a>
        <span className="text-gray-500">|</span>
        <a href="#" className="text-blue-400 hover:underline">
          Contact Support
        </a>
      </div>
    </section>
  );
};

export default Pricing;
