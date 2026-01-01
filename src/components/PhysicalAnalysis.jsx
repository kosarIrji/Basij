import MapAnalysis from "./MapAnalysis";

import FloorChartSelector from "../components/charts/FloorChartSelector";
import GhedmatChartSelector from "../components/charts/GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState } from "react";
import { FaCity } from "react-icons/fa";
import { Landmark } from "lucide-react";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("ghemat");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full  ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 lg:grid grid-cols-6 lg:gap-4 md:col-span-1 h-full ">
          <div className="border col-span-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg pb-6 sm:px-4 md:px-4 p-5 mt-3 ">
            <h3 className="text-3xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
              تحلیل کالبدی محله بسیج
              <span className="">
                {" "}
                <FaCity size={28} />
              </span>
            </h3>
            <div className=" md:leading-loose  whitespace-pre-line lg:leading-loose   text-justify text-base ">
              <p className="font-modam text-base md:leading-loose lg:leading-loos text-gray-800 ">
                محله بسیج <span  className="bg-gray-300">تراکم ساختمانی متوسطی</span> دارد و <span className="bg-blue-300">ترکیبی از ساختمان‌های
                قدیمی و نوساز</span> در آن دیده می‌شود. بیشتر بناها یک تا سه‌طبقه
                هستند، اما در سال‌های اخیر ساخت ساختمان‌های بلندتر، به‌ویژه در
                حاشیه خیابان‌های اصلی، افزایش یافته است. این روند نشان‌دهنده
                حرکت محله به سمت توسعه عمودی و استفاده بهتر از زمین است.
              </p>
            </div>

            <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
              <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
                <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
                  <Landmark size={22} className="text-[var(--sidebar)]" />
                  قدمت :
                </span>
                <strong className="text-red-800">
                  ۴ قطعه زمین بایر و ۹ ملک غیرقابل سکونت :{" "}
                </strong>
                زمین برای ساخت‌وساز جدید در محله بسیج بسیار{" "}
                <strong>کمیاب</strong> است و نشان دهنده ؛ ارزش بالای زمین را در
                این محله تأیید می‌کند. <br />
                <strong className="text-red-800">
                  حدود ۶۷ ساختمان با قدمت ۳۰ تا ۵۰ سال:
                </strong>
                این ساختمان‌ها به‌زودی نیازمند بازسازی یا نوسازی خواهند شد و
                می‌توانند فرصت‌های مناسبی برای سرمایه‌گذاران ملکی فراهم کنند.
                <br />{" "}
                <strong className="text-red-800">
                  ۶۱ ساختمان نوساز و ۱۱ پروژه در حال ساخت :{" "}
                </strong>
                این ارقام نشان‌دهنده فعالیت بالای بازار ساخت‌وساز در محله بسیج و
                گرایش به نوسازی و توسعه عمودی هستند.
                <br />
              </p>
            </div>

            <p className="font-modam md:leading-loose lg:leading-loose text-base   ">
              محله بسیج با ترکیبی از بافت قدیمی و نوساز، موقعیتی مناسب برای
              سرمایه‌گذاری و رشد دارد. این محله{" "}
              <strong>
                به‌ویژه برای پروژه‌های بازسازی، ساخت کاربری‌های مختلط و ایجاد
                ساختمان‌های چندواحدی پتانسیل بالایی دارد
              </strong>
              . موقعیت مناسب در شهر،
              <span className="bg-gray-300">
                {" "}
                ساختار نسبتا منظم و بلوک‌بندی{" "}
              </span>
              قابل‌قبول، از دیگر ویژگی‌های این محله است .
            </p>
          </div>

          <motion.div
            className="flex- flex-col gap-3 border col-span-2  bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mt-3  sm:px-4 md:px-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex gap-1 w-full ">
                {[
                  { label: "قدمت", value: "ghemat" },
                  { label: "طبقات", value: "tabaghat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-30 text-sm sm:text-base"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {/* سلکت - در سمت دیگر */}
              <div className="w-full grid  justify-end">
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className=" h-10 px-1 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-[var(--text)] hover:bg-[var(--sidebar)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto ">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}

              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
