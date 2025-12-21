import {
  ShieldCheck,
  Rocket,
  ChartSpline,
  UsersRound,
  Phone,
} from "lucide-react";

const stats = [
  {
    number: "750+",
    desc: "Enterprise Clients",
  },
  {
    number: "98%",
    desc: "Client Retention",
  },
  {
    number: "24/7",
    desc: "Support Coverage",
  },
];

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-400" />,
    title: "Enterprise Security",
    desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
  },
  {
    icon: <ChartSpline className="h-6 w-6 text-blue-400" />,
    title: "Scalable Solutions",
    desc: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
  {
    icon: <UsersRound className="h-6 w-6 text-blue-400" />,
    title: "Dedicated Support",
    desc: "Pellentesque in ipsum id orci porta dapibus vestibulum ac diam.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-blue-400" />,
    title: "Rapid Implementation",
    desc: "Nulla quis lorem ut libero malesuada feugiat curabitur arcu erat.",
  },
];
const Business = () => {
  return (
    <div className="layout bg-foreground text-white">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column */}
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
            Transform Your Business
          </h3>
          <h1 className="text-2xl md:text-3xl font-bold  text-blue-100">
            Partner with <br />
            Industry Leaders
          </h1>
          <p className="text-gray-300 mt-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Proin eget tortor risus.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 mt-14">
            {stats.map((state, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold text-blue-400 pb-2">
                  {state.number}
                </h3>
                <p className="text-sm text-gray-400 font-bold">{state.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-100">
            Request a Consultation
          </h2>
          <p className="text-gray-200 mb-6">
            Speak with our experts to discuss your business requirements
          </p>

          {/* Features Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg"
              >
                <div className="bg-blue-200/10 p-2 rounded-md">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-blue-100 pb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-4 bg-[#1278bb] hover:opacity-80 text-white font-medium rounded-lg transition-all duration-300 cursor-pointer">
              Schedule Consultation
            </button>
            <button className="px-6 py-4 border border-gray-600 hover:bg-[#1278bb] text-white font-medium rounded-lg transition-colors cursor-pointer">
              Download Brochure
            </button>
            <div className="flex items-center gap-2 text-xs text-gray-300 mt-4 sm:mt-0">
              <Phone />
              Or call us at{" "}
              <span className="text-white font-medium ">+1 (555) 234-5678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
