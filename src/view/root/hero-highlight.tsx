"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import {PieChart} from "@/components/charts/pie-chart";

export function HeroHighlightDemo() {
  return (
      <HeroHighlight className='flex h-full flex-col justify-around'>
          <motion.h1
              initial={{
                  opacity: 0,
                  y: 20,
              }}
              animate={{
                  opacity: 1,
                  y: [20, -5, 0],
              }}
              transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
              With insomnia, nothing&apos;s real. Everything is far away. Everything
              is a{" "}
              <Highlight className="text-black dark:text-white">
                  copy, of a copy, of a copy.
              </Highlight>
          </motion.h1>
          <div className='flex justify-around'>
              <div className='bg-gray-200 p-4 rounded-xl flex flex-col text-md space-y-2 items-center'>
                  <img className='w-[50px] h-[50px]'
                       src='https://downloads.1212.mn/508Md-xy_eD-WNdyAJ_5jxjuJ5XOw-G37RFVast_.png'/>
                  <p className='font-medium text-sm w-full text-left'>Total students</p>
                  <p className='font-bold text-lg w-full text-left'>18298</p>
                  <p className='font-medium text-sm w-full text-left'>Average grades</p>
                  <p className='font-bold text-lg w-full text-left'>77%</p>
                  <p className='font-medium text-sm w-full text-left'>Average grades</p>
                  <p className='font-bold text-lg w-full text-left'>77%</p>
                  <p className='font-medium text-sm w-full text-left'>Average grades</p>
                  <p className='font-bold text-lg w-full text-left'>77%</p>
              </div>
              <div className='bg-gray-200 p-8 rounded-xl'>
                  <div className='w-[250px] h-[250px]'>
                      <div className='font-bold text-sm'>Нийт оюутны дүнгийн задаргаа</div>
                      <PieChart/>
                  </div>
              </div>

          </div>
      </HeroHighlight>
  );
}
