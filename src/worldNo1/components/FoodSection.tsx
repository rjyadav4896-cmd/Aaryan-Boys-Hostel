import { motion } from "motion/react";
import { Clock, Drumstick, Soup, UtensilsCrossed } from "lucide-react";
import messImage from "../../assets/hstl_002/mess.jpg";

export default function FoodSection() {
  const timings = [
    { label: "Breakfast", time: "6:00 AM - 7:00 AM" },
    { label: "Lunch", time: "9:00 AM - 12:00 PM" },
    { label: "Snacks", time: "3:00 PM - 4:00 PM" },
    { label: "Dinner", time: "8:00 PM - 9:00 PM" },
  ];

  const specials = [
    "Chicken twice a week",
    "Eggs once a week",
    "Dashain and Tihar: hostel remains open",
  ];

  return (
    <section id="food" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Food Schedule
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-blue-950">
            Daily meals with festival specials
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            At Aaryan Boys Hostel, daily meals are arranged around student
            routines, with meat, eggs, and festival specials included.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={messImage}
              alt="Aaryan Boys Hostel mess area"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-sky-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-950">
                  Meal Timings
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {timings.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl bg-blue-50 p-4 ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="font-bold text-blue-950">{item.label}</div>
                  <div className="mt-1 text-sm text-slate-600">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Drumstick className="w-6 h-6 text-sky-700" />
                <h4 className="text-xl font-bold text-blue-950">
                  Special meals
                </h4>
              </div>
              <div className="space-y-3">
                {specials.map((special) => (
                  <div
                    key={special}
                    className="flex items-start text-slate-700"
                  >
                    <Soup className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                    {special}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
