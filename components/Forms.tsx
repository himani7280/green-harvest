"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { HOME, HEADING_FONT } from "@/data/data";
import { ChevronDownIcon, MailIcon, MessageIcon, PhoneIcon, SendIcon, SproutIcon, UserIcon } from "@/lib/icons";

const { form } = HOME.contact;

const boxClass =
  "group relative flex h-[44px] sm:h-[50px] items-center gap-2.5 sm:gap-3 rounded-[12px] sm:rounded-[14px] border border-[#d7dbd2] bg-white px-3.5 sm:px-4 text-[#17650f] transition focus-within:border-[#17650f] focus-within:shadow-[0_0_0_3px_rgba(23,101,15,0.12)] xl:h-[52px] xl:rounded-[15px]";
const inputClass = "h-full w-full bg-transparent text-[14.5px] sm:text-[15.5px] text-[#1c1c1c] outline-none placeholder:text-[#2a2a2a] xl:text-[17px]";

const Field = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <label className={boxClass}>
    <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110">{icon}</span>
    {children}
  </label>
);

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[22px] sm:rounded-[28px] border-[1.5px] border-[#c9e29b] bg-white p-4 shadow-[0_24px_50px_-28px_rgba(60,120,20,0.45)] sm:p-6 xl:px-[36px] xl:pb-[32px] xl:pt-[28px]">
      <h3 style={{ fontFamily: HEADING_FONT }} className="text-[20px] font-bold text-[#17650f] sm:text-[24px] xl:text-[28px]">{form.title}</h3>
      <div className="mt-3.5 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:gap-x-[19px] xl:mt-[20px] xl:gap-y-[18px]">
        <Field icon={<UserIcon size={22} />}>
          <input name="name" required placeholder={form.fields.namePlaceholder} autoComplete="name" className={inputClass} />
        </Field>
        <Field icon={<MailIcon size={22} />}>
          <input name="email" type="email" required placeholder={form.fields.emailPlaceholder} autoComplete="email" className={inputClass} />
        </Field>
        <Field icon={<PhoneIcon size={22} />}>
          <input name="phone" type="tel" placeholder={form.fields.phonePlaceholder} autoComplete="tel" className={inputClass} />
        </Field>
        <Field icon={<SproutIcon size={22} />}>
          <select name="service" defaultValue="" className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              {form.fields.servicePlaceholder}
            </option>
            {form.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <ChevronDownIcon size={20} strokeWidth={2.4} className="pointer-events-none text-[#161616]" />
        </Field>
        <label className={`${boxClass} h-auto items-start py-2.5 sm:py-[14px] sm:col-span-2 xl:h-[131px]`}>
          <MessageIcon size={22} className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110" />
          <textarea name="message" required rows={3} placeholder={form.fields.messagePlaceholder} className={`${inputClass} h-[70px] sm:h-[86px] resize-none xl:h-[100px]`} />
        </label>
      </div>
      <button type="submit" className="group mt-4 sm:mt-5 inline-flex h-[46px] sm:h-[50px] w-full items-center justify-center gap-2.5 sm:gap-3 rounded-[12px] sm:rounded-[14px] bg-[#2d5a0f] text-[15.5px] sm:text-[17px] font-bold text-white transition hover:bg-[#1f4208] hover:shadow-lg xl:mt-[28px] xl:h-[52px] xl:text-[19px]">
        {form.submit}
        <SendIcon size={20} className="transition group-hover:translate-x-1 group-hover:-translate-y-0.5 xl:size-[22px]" />
      </button>
      {sent && (
        <p role="status" className="mt-4 rounded-lg bg-[#e6f3d4] px-4 py-2.5 text-sm text-[#17650f]">
          {form.success}
        </p>
      )}
    </form>
  );
}
