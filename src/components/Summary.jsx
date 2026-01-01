import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react"

export default function Summary() {
  return (
    <section className="relative my-3 border pt-3 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
      <h3 className="text-2xl p-5  w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
        جمع‌بندی محله بسیج
        <ClipboardCheck size={28} />
      </h3>
      <p className="lg:leading-loose  font-modam px-5  text-justify text-base mb-6  ">
        {" "}
        محله بسیج (میرزا رضای کرمانی) با موقعیت مرکزی و دسترسی آسان به
        خیابان‌های طالقانی و امام خمینی، از محله‌های مهم و ارزشمند بجنورد است.
        این محله که در دهه ۷۰ برای اسکان نیروهای نظامی شکل گرفت، امروز ترکیبی از
        بافت قدیمی و ساختمان‌های نوساز را در خود جای داده و روند نوسازی و توسعه
        عمودی در آن ادامه دارد. کمبود زمین بایر و تقاضای بالای سکونت، ارزش
        سرمایه‌گذاری را در این محدوده افزایش داده است. تنوع کاربری‌های تجاری،
        آموزشی، فرهنگی و درمانی، همراه با دسترسی به پارک نادر و خانه فرهنگ،
        کیفیت زندگی را ارتقا داده است. وجود کوچه‌های بن‌بست و ترافیک در ساعات
        اوج از چالش‌های محله است، اما در مجموع بسیج محیطی مناسب برای سکونت
        خانوادگی و فعالیت‌های تجاری به شمار می‌رود.{" "}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
