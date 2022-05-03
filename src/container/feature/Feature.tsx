import { FC } from "react";
import Button from "../../component/Button";
import { useObserver } from "../../hooks/useObserver";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Mobile Optimized",
    desc: "Ensure visitors who access your site from mobile devices have an experience optimized for the device.",
  },
  {
    title: "E-commerce Built-In",
    desc: "Whether you're selling a single product or a hundred, we make it easy.",
  },
  {
    title: "SEO Ready Website",
    desc: "We follow the best practices to help your website rank higher across major search engines.",
  },
  {
    title: "SMS & Email Marketing",
    desc: "Extend your reach and capture customer attention with compelling and personalized SMSes & emails.",
  },
  {
    title: "Receive Online Payments",
    desc: "Configure your payment gateway in one click & start receiving payments for any service that you offer.",
  },

  {
    title: "Customized Enquiry Form",
    desc: "Create new forms with custom fields to gather information about your prospects in detail.",
  },
  {
    title: "Third Party Apps",
    desc: "Engage with your audience using an extensive set of third party tools from search to social.",
  },
  {
    title: "Google Analytics Support",
    desc: "Track your website traffic and get a deeper understanding of your customer behavior.",
  },
  {
    title: "Social Media Linking",
    desc: "Link your website to Facebook, Twitter, Instagram, LinkedIn for higher visibility & brand engagement.",
  },
  {
    title: "Animation & Scroll Effects",
    desc: "Bring your website to life. Add a wow factor with animations to keep your visitors engaged.",
  },
  {
    title: "Online Booking & Scheduling",
    desc: "Schedule appointments and receive online bookings so that you can focus on giving quality service.",
  },
];

const Feature: FC<FeatureProps> = props => {
  const { ref, style } = useObserver();

  return (
    <div className="flex min-h-screen flex-col justify-center gap-y-5 bg-blue-50 px-4 py-10">
      <h2 className="py-12 text-center">
        Everything You Need To Create Your Own Website
      </h2>
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((d, i) => (
          <FeatureCard key={d.title} {...d} index={i} />
        ))}
      </div>
      <div className={`text-center ${style}`} ref={ref}>
        <Button size="large" shadow={true} className="mt-10">
          See All Feature
        </Button>
      </div>
    </div>
  );
};

export default Feature;

interface FeatureProps {}
