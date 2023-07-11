"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const OurVision = () => {
  return (
    <section id="our-vision" className="wrapper section-padding">
      <SectionTitle title="Our Vision" />

      <div className="flex flex-col gap-10 md:gap-20 md:text-xl">
        {/* PART 1 */}
        <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
          <div className="space-y-5 xl:col-span-3">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="text-7xl md:text-9xl font-bold opacity-10"
              >
                01
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                className="text-3xl md:text-5xl font-semibold uppercase"
              >
                Paws in Harmony
              </motion.h3>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
              >
                Within its welcoming gates, furry friends of all shapes and sizes find solace, healing, and a renewed sense of joy. The air is filled with the symphony of contented purrs, playful barks, and the occasional chirp of a curious bird. Each step within the sanctuary resonates with a profound love for all creatures, big and small.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
              >
              Dedicated volunteers with hearts as warm as the summer sun ensure that the needs of every resident are met. They tirelessly provide nourishment, shelter, and medical care, all with unwavering compassion. The dogs wag their tails in gratitude, while the cats purr their appreciation, knowing they are safe and loved.
              </motion.p>
            </div>
          </div>
          <div className="xl:col-span-2 w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="w-full h-full"
            >
              <Image
                src="https://images.pexels.com/photos/1981111/pexels-photo-1981111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Black and White Bicolor Cat"
                width={1280}
                height={720}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        {/* PART 2 */}
        <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
          <div className="order-2 xl:order-1 xl:col-span-2 w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="w-full h-full"
            >
              <Image
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="A Group of Volunteers Assisting an Elderly Person on a Black Wheelchair For Charity"
                width={1280}
                height={720}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="space-y-5 xl:col-span-3 order-1 xl:order-2">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="text-7xl md:text-9xl font-bold opacity-10 xl:text-right"
              >
                02
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                className="text-3xl md:text-5xl font-semibold uppercase xl:text-right"
              >
                A Bond Unbroken
              </motion.h3>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
                className="xl:text-right"
              >
               Dedicated staff and volunteers, fueled by an unwavering love for animals, devote themselves to the well-being of these cherished residents. They provide a warm bed, nutritious meals, and the tender touch that mends both physical and emotional scars. Each interaction is infused with kindness, nurturing the bond between humans and their furry companions.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
                className="xl:text-right"
              >
                Visitors to the shelter bear witness to the magic of these connections. Children eagerly engage in playful romps with newfound canine friends, their laughter intertwining with the joyous barks that fill the air. Meanwhile, adults find solace in the calming presence of gentle felines, whose purrs provide comfort and companionship.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
