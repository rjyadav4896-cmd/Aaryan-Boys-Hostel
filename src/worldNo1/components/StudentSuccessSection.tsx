import { useCallback, useEffect, useRef, useState } from "react";
import akhtarRajaImage from "../../assets/hstl_002/akhtar-raja-japan-tokyo.jpeg";
import karanYadavImage from "../../assets/hstl_002/karan-yadav-japan-tokyo.jpeg";
import mdAnishImage from "../../assets/hstl_002/md-anish-sadiqui-ha.jpeg";
import successEngineeringImage from "../../assets/hstl_002/success-engineering-thumb.png";
import successForeignStudyVisaImage from "../../assets/hstl_002/success-foreign-study-visa-thumb.png";
import successMedicalImage from "../../assets/hstl_002/success-medical-thumb.png";

const testimonials = [
  {
    photo: mdAnishImage,
    photoPosition: "50% 24%",
    name: "MD Anish Sadiqui",
    college: "HA",
    rank: "Fourth level",
    exam: "Health Assistant achievement",
    quote:
      "Aaryan Boys Hostel felt like a second home. The routine, friends, and supportive environment kept me motivated for my HA fourth level goal.",
  },
  {
    photo: karanYadavImage,
    photoPosition: "50% 28%",
    name: "Karan Yadav",
    college: "",
    rank: "Study Visa for Japan",
    exam: "",
    quote:
      "During my Japan visa preparation, I did not have to worry much about daily food and living. That gave me more time and energy to stay focused.",
  },
  {
    photo: akhtarRajaImage,
    photoPosition: "50% 28%",
    name: "Akhtar Raja",
    college: "",
    rank: "Study Visa for Japan",
    exam: "",
    quote:
      "The clean rooms and peaceful hostel environment made my stay comfortable. It helped me keep a steady routine while preparing for Japan.",
  },
];

const successCategories = [
  {
    label: "Medical",
    count: "1 Selection",
    image: successMedicalImage,
    imagePosition: "50% 45%",
  },
  {
    label: "Foreign Nation Study Visa",
    count: "2 Selections",
    image: successForeignStudyVisaImage,
    imagePosition: "50% 43%",
  },
  {
    label: "Engineering",
    count: "7 Selections",
    image: successEngineeringImage,
    imagePosition: "50% 45%",
  },
];

export default function StudentSuccessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const transitionTimer = useRef<number | null>(null);
  const activeTestimonial = testimonials[activeIndex];
  const activeDetails = [
    activeTestimonial.college,
    activeTestimonial.rank,
    activeTestimonial.exam,
  ].filter(Boolean);

  const showTestimonial = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;

      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }

      setIsVisible(false);
      transitionTimer.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        window.requestAnimationFrame(() => setIsVisible(true));
      }, 180);
    },
    [activeIndex],
  );

  const showNextTestimonial = useCallback(() => {
    showTestimonial((activeIndex + 1) % testimonials.length);
  }, [activeIndex, showTestimonial]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      showTestimonial((activeIndex + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, showTestimonial]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  return (
    <section id="success" className="scroll-mt-16 bg-blue-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-sm font-bold uppercase tracking-wide text-blue-700">
          Topper Stories
        </h2>

        <div className="mx-auto grid max-w-[640px] grid-cols-3 gap-5 text-center sm:gap-12">
          {successCategories.map((category) => {
            return (
              <div key={category.label} className="flex min-w-0 flex-col items-center">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md ring-2 ring-slate-200 sm:h-24 sm:w-24">
                  <img
                    src={category.image}
                    alt={`${category.label} success`}
                    style={{ objectPosition: category.imagePosition }}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 max-w-32 text-xs font-black leading-5 text-slate-950 sm:text-sm">
                  {category.label}
                </div>
                <div className="text-xs font-bold leading-5 text-slate-600 sm:text-sm">
                  ({category.count})
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="relative mx-auto mt-8 min-h-[188px] max-w-[888px] cursor-pointer rounded-2xl bg-white px-6 py-8 shadow-xl ring-1 ring-slate-200 sm:h-[188px] sm:py-6"
          onClick={showNextTestimonial}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex flex-col gap-4 pr-2 transition-all duration-300 ease-out sm:flex-row sm:items-start sm:gap-5 sm:pr-16 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="h-16 w-16 flex-none overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
              <img
                src={activeTestimonial.photo}
                alt={`${activeTestimonial.name} testimonial`}
                style={{ objectPosition: activeTestimonial.photoPosition }}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <blockquote className="max-w-[690px] text-base font-medium italic leading-7 text-slate-700">
                "{activeTestimonial.quote}"
              </blockquote>

              <div className="mt-5 text-base font-bold leading-6 text-blue-950">
                {activeTestimonial.name}
              </div>

              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-semibold leading-5 text-slate-600">
                {activeDetails.map((detail, index) => (
                  <span
                    key={detail}
                    className={
                      detail === activeTestimonial.rank
                        ? "text-blue-700"
                        : undefined
                    }
                  >
                    {index > 0 && (
                      <span
                        className="mr-1.5 text-slate-600"
                        aria-hidden="true"
                      >
                        {"\u00B7"}
                      </span>
                    )}
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:bottom-6">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showTestimonial(index);
                  }}
                  aria-label={`Show ${testimonial.name}'s testimonial`}
                  aria-current={isActive}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-blue-700" : "bg-slate-300"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
