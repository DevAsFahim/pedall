import gpsImage from "../../assets/gps-tracking.svg";
import batteryImage from "../../assets/battery.svg";
import shieldImage from "../../assets/shield.svg";

const featureData = [
  {
    image: gpsImage,
    title: "GPS Tracking / Anti-Theft",
    description:
      "GPS tracking & anti-theft alerts monitor movement. Get instant smartphone alerts for unauthorized activity.",
  },
  {
    image: batteryImage,
    title: "Supercharged Battery",
    description:
      "50-mile range per charge with a high-capacity battery. Quick-charge minimizes downtime for seamless adventures.",
  },
  {
    image: shieldImage,
    title: "5 years warranty",
    description:
      "Full warranty covers defects, electrical parts, and priority repair support. Protect your investment, stress-free",
  },
];

export default function Features() {
  return (
    <section className="pb-16 pt-24 px-4 max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featureData.map((data) => (
          <div className="text-left">
            <div className="w-12 h-12 mb-5">
              <img src={data.image} alt="features-image-1" />
            </div>
            <h3 className="text-[26px] font-semibold mb-4 text-black">
              {data.title}
            </h3>
            <p className="text-[#75807E] leading-relaxed font-semibold text-[18px]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
