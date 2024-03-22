"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const GroupDescription = () => {
  return (
    <motion.section
      className="relative rounded-t-2xl bg-green-50 py-8 min-h-60 border-primary-500 border-t-8 after:block after:h-8 after:p-4 after:bg-primary-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:rounded-t-2xl"
      initial={{ y: 80, opacity: 0.8 }}
      whileInView={{ y: -40, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center w-4/5 lg:w-3/4 pb-8 mx-auto gap-12">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-4 lg:gap-12">
          <Image
            src="/info/1.png"
            width={275}
            height={400}
            alt="Group Description"
          />
          <p className="w-full lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            accumsan augue. Ut finibus cursus orci ut finibus. Aliquam erat
            volutpat. Donec nisi ipsum, sollicitudin ac venenatis sed, sagittis
            ac orci. Vestibulum vehicula congue ipsum, sed tincidunt augue
            interdum sed. <br />
            Cras at dolor in urna tristique vestibulum nec eget dui. Sed ac
            volutpat est, eu tempus tortor. Sed id elit scelerisque est semper
            facilisis nec in sem. In dignissim cursus venenatis. In hac
            habitasse platea dictumst. Sed nunc risus, imperdiet in lacus ut,
            pretium laoreet mauris. Suspendisse ac egestas justo.{" "}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center gap-4 lg:gap-12">
          <p className="w-full lg:w-1/2 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            accumsan augue. Ut finibus cursus orci ut finibus. Aliquam erat
            volutpat. Donec nisi ipsum, sollicitudin ac venenatis sed, sagittis
            ac orci. Vestibulum vehicula congue ipsum, sed tincidunt augue
            interdum sed. <br />
            Cras at dolor in urna tristique vestibulum nec eget dui. Sed ac
            volutpat est, eu tempus tortor. Sed id elit scelerisque est semper
            facilisis nec in sem. In dignissim cursus venenatis. In hac
            habitasse platea dictumst. Sed nunc risus, imperdiet in lacus ut,
            pretium laoreet mauris. Suspendisse ac egestas justo.{" "}
          </p>

          <Image
            src="/info/1.png"
            width={275}
            height={400}
            alt="Group Description"
          />
        </div>
      </div>
    </motion.section>
  );
};
