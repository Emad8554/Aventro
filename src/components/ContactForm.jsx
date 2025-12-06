"use client";
import { Facebook, X, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Info, MoveRight, StarsIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";

import { useState } from "react";
import { Spinner } from "./ui/spinner";
const stats = [
  {
    value: "4.9/5",
    label: "Customer Rating",
  },
  {
    value: "12k+",
    label: "Happy Customers",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: <Facebook className="w-4 h-4" />,
  },
  { id: 2, icon: <X className="w-4 h-4" />, label: "Twitter/X" },
  {
    id: 3,
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    id: 4,
    icon: <Linkedin className="w-4 h-4" />,
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    theme: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.phone && !/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10–15 digits";
    }
    if (!formData.theme) {
      newErrors.theme = "Please select a theme";
    }
    if (
      !formData.message ||
      formData.message.length < 10 ||
      formData.message.length > 500
    ) {
      newErrors.message = "Message must be 10–500 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessMsg("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        theme: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-cardBg p-6 rounded-lg w-full lg:w-[calc(95%-35%)] shadow-[-5px_-5px_40px_rgba(250,100,255,0.2)]">
      <div className="headSection space-y-6">
        <div className="special bg-cyan-500/10 font-bold">
          <StarsIcon className="w-4 h-4" /> Premium Features
        </div>
        <h1 className="text-blue-100 font-semibold text-xl">
          Send us a message
        </h1>
        <p className="text-gray-300 font-extralight">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua enim ad minim veniam quis nostrud exercitation.
        </p>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="w-full">
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Phone Number (Optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="w-full">
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              className="w-full border border-gray-300/10 bg-[#0c1321] text-gray-400 rounded-md px-3 py-2 cursor-pointer appearance-none"
            >
              <option value="" disabled>
                Theme
              </option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
            {errors.theme && (
              <p className="text-red-500 text-sm mt-1">{errors.theme}</p>
            )}
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Tell us more about your needs"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {successMsg && (
          <p className="text-green-500 text-sm font-medium text-center">
            {successMsg}
          </p>
        )}

        <button
          type="submit"
          className={`btn h-14 flex items-center justify-center gap-2 ${
            loading ? "opacity-20" : ""
          }`}
          disabled={loading}
        >
          {loading ? <Spinner /> : "Send Message"}
          {!loading && <MoveRight />}
        </button>
      </form>
      <div className="pt-3 text-xs flex items-center justify-center gap-2 text-blue-400">
        <Info className="w-4 h-4" />{" "}
        <span>We typically respond within 24 hours on business days</span>
      </div>
      {/* Contact footer */}
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Contact Stats */}
        <div className="w-full flex flex-col md:flex-row gap-6 pt-6">
          {stats.map((state, index) => (
            <div
              key={index}
              className="p-6 md:w-[calc(100%/3)] text-center bg-[#0d1626] rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-blue-400 text-sm font-semibold">
                  {state.value}
                </h3>
                <span className="text-gray-400 font-medium">{state.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 font-extralight text-sm">
          Or reach us on social media
        </p>
        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((item, index) => (
            <div
              key={index}
              className="group hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer bg-blue-500/10 text-blue-400 group-hover:bg-blue-400/50 group-hover:text-white transition-colors">
                <a>{item.icon}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
