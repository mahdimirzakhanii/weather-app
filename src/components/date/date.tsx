export type DateTimeLang = "fa" | "en";

export interface DateTimeResult {
  full: string;
  year: string;
  month: string;
  day: string;
  weekday: string;
  monthName: string;

  time: string;
  hour: string;
  minute: string;
  second: string;
  period?: string;

  hourNum: number;
  minuteNum: number;
  secondNum: number;
}

export const getDateTime = (lang: DateTimeLang = "en"): DateTimeResult => {
  const now = new Date();
  const isFa = lang === "fa";
  const locale = isFa ? "fa-IR" : "en-US";

  const toPersian = (str: string): string =>
    isFa ? str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]) : str;

  const toLatin = (str: string): string =>
    isFa
      ? str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
      : str;

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const dateParts = dateFormatter.formatToParts(now);

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    dayPeriod: "short",
  });
  const timeParts = timeFormatter.formatToParts(now);

  // استخراج مقادیر
  const get = (type: string) =>
    (
      dateParts.find((p) => p.type === type) ||
      timeParts.find((p) => p.type === type)
    )?.value || "";

  const hourRaw = timeParts.find((p) => p.type === "hour")?.value || "";
  const minuteRaw = timeParts.find((p) => p.type === "minute")?.value || "";
  const secondRaw = timeParts.find((p) => p.type === "second")?.value || "";
  const periodRaw = timeParts.find((p) => p.type === "dayPeriod")?.value || "";

  // تبدیل برای نمایش
  const hour = toPersian(hourRaw);
  const minute = toPersian(minuteRaw);
  const second = toPersian(secondRaw);
  // تبدیل period برای فارسی
  const period = isFa
    ? periodRaw === "ق.ظ"
      ? "بعدازظهر"
      : "قبل‌ازظهر"
    : periodRaw;

  // تبدیل برای محاسبه عددی
  const hourNum = Number(toLatin(hourRaw));
  const minuteNum = Number(toLatin(minuteRaw));
  const secondNum = Number(toLatin(secondRaw));

  return {
    // تاریخ
    full: toPersian(dateFormatter.format(now)),
    year: toPersian(get("year")),
    month: toPersian(get("month")),
    day: toPersian(get("day")),
    weekday: get("weekday"),
    monthName: new Intl.DateTimeFormat(locale, { month: "long" }).format(now),

    // ساعت
    time: `${hour}:${minute} ${period}`,
    hour,
    minute,
    second,
    period: periodRaw ? period : undefined,

    // عددی
    hourNum,
    minuteNum,
    secondNum,
  };
};
