import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";
import Accordion from "./ui/Accordion";

import { FaBuilding } from "react-icons/fa";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg:grid-cols-5 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-3 col-span-5  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          ویژگی‌های عملکردی محله {Details.alley.name}
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          محله بسیج با بافتی عمدتاً{" "}
          <strong className="text-purple-800">مسکونی</strong> و موقعیتی ممتاز در{" "}
          <strong className="text-purple-800">نزدیکی مرکزشهر،</strong>
          از عملکردی متنوع و متعادل برخوردار است. تمرکز{" "}
          <span className="bg-blue-300">کاربری‌های تجاری</span> و مختلط
          (تجاری–مسکونی) در{" "}
          <span className="bg-blue-300">حاشیه خیابان‌های اصلی</span>، بخشی از
          بازار مرکزی شهر را شکل داده و علاوه بر پاسخ‌گویی به نیازهای محلی، نقش
          مهمی در تأمین نیازهای فرامحله‌ای ایفا می‌کند.{" "}
          <span className="bg-orange-300">واحدهای مسکونی</span> بیشتر در بخش‌های
          داخلی محله قرار دارند و در کنار آن‌ها خدمات محلی مانند سوپرمارکت،
          نانوایی و میوه‌فروشی، نیازهای روزمره ساکنان را برطرف می‌سازند.
          <br />
          وجود کاربری‌های تجاری–مسکونی در کنار خدمات آموزشی، فرهنگی، درمانی و
          فضای سبز، کیفیت زندگی را در محله به‌طور چشمگیری ارتقا داده است.
        </p>
        {/* باکس ۲: واقعیت آماری */}

        <Accordion
          title={
            <span className="font-bold flex gap-2  text-base text-[var(--sidebar)]">
              <FaBuilding size={22} className="text-[var(--sidebar)]" />
              کاربری های شاخص :
            </span>
          }
          content={
            <ul>
              <li>
                <strong className="text-gray-800">
                  •درمانگاه خاتم‌الانبیا _
                </strong>
                به‌عنوان مرکز اصلی خدمات درمانی محله. <br />
              </li>
              <li>
                <strong className="text-blue-800">
                  • به‌عنوان مرکز اصلی خدمات درمانی محله.
                </strong>
                به‌عنوان دو پارک مهم محله. مجموعه خانه فرهنگ با فضای سبز و محیط
                اجتماعی، یکی از نقاط اصلی تعامل و ارتباط ساکنان است.
              </li>
              <li>
                <strong className="text-orange-800">
                  • بنای تاریخی بانک ملی{" "}
                </strong>{" "}
                که با ارزش معماری و هویتی خود، به اصالت و شخصیت فرهنگی محله
                افزوده است.{" "}
              </li>
              <li>
                <span className="text-gray-800">
                  • تعداد بالای کاربری‌های آموزشی شامل مدارس، مهدکودک‌ها و
                  آموزشگاه‌ها.{" "}
                </span>
              </li>
              <li>
                <strong className="text-red-800">
                  • ضعف:نبود مسجد در بافت محله{" "}
                </strong>
                یکی از کاستی‌های عملکردی آن محسوب می‌شود.
                <br />
              </li>
            </ul>
          }
        />

        <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
          محله بسیج به‌عنوان یکی از محله‌های مهم و فعال بجنورد، با ترکیبی متعادل
          از , موقعیت مناسب در نزدیکی مرکز شهر و دسترسی آسان به معابر اصلی، در
          کنار تنوع بالای کاربری ها این محله را به محیطی پویا و مناسب برای سکونت
          خانواده‌ها تبدیل کرده است.
        </p>
      </div>
      <div className="col-span-5 lg:col-span-2 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-5 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
