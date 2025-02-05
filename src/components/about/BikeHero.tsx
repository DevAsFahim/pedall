import bikeHeroImage from "../../assets/bike-hero-img.png";
import cycleImage from "../../assets/cycle-with-shield.svg";
import shippingImage from "../../assets/shipping-cycle.svg";
import toolsImage from "../../assets/cycle-tools.svg";

const bikeFeatures = [
  {
    image: cycleImage,
    title: "Limited lifetime warranty on all Bikes.",
  },
  {
    image: shippingImage,
    title: "Free ground shipping and easy returns.",
  },
  {
    image: toolsImage,
    title: "Designed, engineered & assembled in the USA.",
  },
];

export default function BikeHero() {
  return (
    <section className="p-container py-12 md:py-16 relative">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative rounded-t-full overflow-hidden">
          <img
            src={bikeHeroImage}
            alt="Cyclist performing BMX trick"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8 z-10">
          <div className="space-y-6">
            <h2 className="text-[30px] md:text-[40px] leading-[35px] md:leading-[50px] tracking-tight text-gray-900">
              Clean and timeless designs that make every ride a thrill. Wherever
              you&apos;re heading,{" "}
              <span className="text-gray-500">
                our bikes are made to make your daily commute a joy.
              </span>
            </h2>
            <p className="text-lg text-[#838080] leading-relaxed font-medium">
              This isn&apos;t a bicycle. This is a soul stirring,
              bring-a-smile-to-your-face, aerodynamic work of art. Designed to
              move you through the world without the weight of it. Where your
              cycling journey begins! As avid cyclists not ourselves, we
              understand the joy and freedom for a comes from pedaling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-muted-body px-6 py-8 w-full lg:w-[calc(100%+120px)] lg:-ml-[120px] z-10">
            {bikeFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center space-y-2 text-center md:text-left"
              >
                <div className="w-20 h-14">
                  <img src={feature.image} alt="icon" />
                </div>
                <p className="font-medium text-[#838080]">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
