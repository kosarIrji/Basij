/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map } from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import Accordion from "./ui/Accordion";
import { useState } from "react";






export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            دسترسی و کیفیت معابر
            {Details.alley.name}{" "}
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محلهٔ بسیج به دلیل <span className="bg-gray-300">همجواری با معابر اصلی شهر</span>، ارتباط مناسبی با سایر <span className="bg-gray-300">
            بخش‌ها دارد</span>. موقعیت نسبتاً مرکزی آن باعث شده حجم بالایی از عبور و
            مرور را تجربه کند و در ساعات پرتردد با <strong className="text-red-700">ترافیک و آلودگی صوتی</strong> مواجه
            شود.
          </p>
          <div className=" bg-white/40  border-r-4 border-green-800 shadow-md mb-1 p-2 ">
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            <strong className="text-green-800">میانگین کیفیت معابر   ( ۴.۱ از ۵): </strong>
            این شاخص بیانگر وضعیت <span className="bg-green-300">نسبتاً مطلوب</span> معابر از نظر عرض، کف‌سازی و کاربری است. مسیرهای محلی پاسخگوی نیازهای روزمره ساکنان هستند.</p>

          </div>
          <div className=" bg-white/40  border-r-4 border-orange-800 shadow-md mb-1 p-2 ">
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            <strong className="text-red-800">   نکته ساختاری:  </strong>تعداد زیاد کوچه‌های بن‌بست، جریان عبور را محدود کرده و حجم تردد در معابر اصلی را افزایش می‌دهد.
          </p>
          </div>
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-red-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                معابر اصلی :
              </span>
            }
            content={
              <ul>
                <li>▪خیابان نادر  (غرب):خیابانی با کیفیت بالا و ترکیب کاربری‌های تجاری و مسکونی.</li>{" "}
                <li>▪بلوار امام خمینی (جنوب):یکی از خیابان‌های اصلی شهر با نقش اقتصادی و ارتباطی مهم.</li>
                <li>▪  	خیابان طالقانی غربی    (شمال):یک‌طرفه، شلوغ و متمرکز بر کاربری‌های تجاری.</li>
                <li>▪ 	خیابان امیریه جنوبی (شرق):یک‌طرفه، شلوغ و متمرکز بر کاربری‌های تجاری.</li>
                <li>▪  	خیابان میرزارضاکرمانی (معبر درون محله): مسیر داخلی مهم که به کاهش فشار ترافیکی و تردد محلی کمک می‌کند.</li>
              </ul>
            }
          />{" "}
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-blue-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                تقاطع‌های مهم:
              </span>
            }
            content={
              <ul>
                <li>▪چهارراه امیریه</li> 
                 <li>▪میدان فردوسی </li>
               <li>چهارراه مادر</li>
               <li>میدان فردوسی </li>
              </ul>
            }
          />{" "}
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            <strong className="text-gray-800">   نکته :  </strong>دسترسی به حمل‌ونقل عمومی: این محله از نظر نزدیکی به ایستگاه‌های حمل‌ونقل عمومی شرایط خوبی دارد و به دلیل موقعیت نزدیک به مرکز شهر، پتانسیل بالایی برای پیاده‌محوری دارد.

</p>
      



        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
