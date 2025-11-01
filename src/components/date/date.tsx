// تابع فارسی (شمسی)
export const getPersianDate = () => {
  const now = new Date();
  const toPersian = (str: string) =>
    str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

  // تاریخ
  const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const dateParts = dateFormatter.formatToParts(now);

  // ساعت (۲۴ ساعته)
  const timeFormatter = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24h
  });
  const timeParts = timeFormatter.formatToParts(now);

  return {
    // تاریخ
    full: toPersian(dateFormatter.format(now)),
    year: toPersian(dateParts.find((p) => p.type === "year")?.value || ""),
    month: toPersian(dateParts.find((p) => p.type === "month")?.value || ""),
    day: toPersian(dateParts.find((p) => p.type === "day")?.value || ""),
    weekday: dateParts.find((p) => p.type === "weekday")?.value || "",
    monthName: new Intl.DateTimeFormat("fa-IR", { month: "long" }).format(now),

    // ساعت
    time: toPersian(timeFormatter.format(now)), // "۱۴:۳۵:۲۲"
    hour: toPersian(timeParts.find((p) => p.type === "hour")?.value || ""),
    minute: toPersian(timeParts.find((p) => p.type === "minute")?.value || ""),
    second: toPersian(timeParts.find((p) => p.type === "second")?.value || ""),
  };
};
// تابع انگلیسی (میلادی)
export const getEnglishDate = () => {
  const now = new Date();

  // تاریخ
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const dateParts = dateFormatter.formatToParts(now);

  // ساعت (۱۲ ساعته با AM/PM)
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12h
  });
  const timeParts = timeFormatter.formatToParts(now);

  return {
    // تاریخ
    full: dateFormatter.format(now), // "Saturday, 11/1/2025"
    year: dateParts.find((p) => p.type === "year")?.value || "",
    month: dateParts.find((p) => p.type === "month")?.value || "",
    day: dateParts.find((p) => p.type === "day")?.value || "",
    weekday: dateParts.find((p) => p.type === "weekday")?.value || "",
    monthName: new Intl.DateTimeFormat("en-US", { month: "long" }).format(now),

    // ساعت
    time: timeFormatter.format(now), // "02:35:22 PM"
    hour: timeParts.find((p) => p.type === "hour")?.value || "",
    minute: timeParts.find((p) => p.type === "minute")?.value || "",
    second: timeParts.find((p) => p.type === "second")?.value || "",
    period: timeParts.find((p) => p.type === "dayPeriod")?.value || "", // "PM"
  };
};
