import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import { useCustomTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LanguageContext";
import type { TData } from "../../context/DataContext";

interface Props {
  data: TData[];
}

const Slider = ({ data }: Props) => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();

  return (
    <Swiper
      dir={lang === "fa" ? "rtl" : "ltr"}
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 9,
          spaceBetween: 10,
        },
        1560: {
          slidesPerView: 11,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
      style={{ width: "100%" }}
    >
      {data?.map((item, index) => {
        //weekday
        const dt = item?.dt;
        const date = new Date(dt * 1000);
        const dayName = date.toLocaleDateString(
          lang === "fa" ? "fa-IR" : "en-US",
          {
            weekday: "long",
          }
        );
        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                maxWidth: "105px",
                minWidth: "105px",
                width: "105px",
                height: "266px",
                minHeight: "266px",
                borderRadius: "24px",
                backgroundColor: mode === "dark" ? "#3F4861" : "#CDD9E0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <span> {dayName}</span>
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    background:
                      "linear-gradient(135deg, #363636 0%, #7E7E7E 50% ,#363636 100%)",
                  }}
                ></div>
              </div>

              <img
                src="/image/dashboard/cloudy.png"
                style={{ width: "70px" }}
                alt=""
              />
              <div>
                <span style={{ fontSize: "18px" }}>
                  {String(item?.main?.temp)?.slice(0, 2)}
                </span>
                <span style={{ fontSize: "18px" }}>°</span>
                <span style={{ fontSize: "18px" }}>C</span>
              </div>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
