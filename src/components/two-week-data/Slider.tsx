import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import { useCustomTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
 
const Slider = ({ myArray }) => {
  const { mode } = useCustomTheme();
  const { t } = useTranslation();
  console.log(myArray);
  return (
    <Swiper
      slidesPerView={10}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 11,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
      style={{ width: "100%" }}
    >
      {myArray?.map((item, index) => (
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
              <span>{t("today")}</span>
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
              <span style={{ fontSize: "18px" }}>{20}</span>
              <span style={{ fontSize: "18px" }}>°</span>
              <span style={{ fontSize: "18px" }}>C</span>
            </div>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
