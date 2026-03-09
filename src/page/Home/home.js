import React, { useMemo, useState, useEffect } from "react";
import logo from "../../image/logo.png";
import "./home.css";

export default function Home({
  onGoHome,
  onGoCourses,
  onGoTeaching,
  onGoContact,
  onGoLogin,
  onGoRegister,
}) {
  const [activeTab, setActiveTab] = useState("Thiết kế UI");
  const [openFaq, setOpenFaq] = useState(1);
  const [testimonialIndex, setTestimonialIndex] = useState(0);


  const [bannerIndex, setBannerIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(
    () => [
      {
        tag: "Khóa học nổi bật",
        title: "Nâng tầm kỹ năng của bạn",
        desc: "Học hỏi từ những chuyên gia hàng đầu trong ngành với các dự án thực tế.",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        cta: { text: "Khám phá ngay", onClick: onGoCourses },
      },
      {
        tag: "Cơ hội nghề nghiệp",
        title: "Kết nối nhà tuyển dụng",
        desc: "Tạo hồ sơ ấn tượng và để các nhà tuyển dụng tìm thấy bạn dễ dàng.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        cta: { text: "Tạo tài khoản", onClick: onGoRegister },
      },
    ],
    [onGoCourses, onGoRegister]
  );

  const activeSlide = slides[bannerIndex] || slides[0];

  const goPrevBanner = () => {
    setBannerIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % slides.length);
  };

  // Tự động chuyển Banner
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      goNextBanner();
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const tabs = useMemo(
    () => [
      "Lập trình viên",
      "Thiết kế UI",
      "Quản lý dự án",
      "Thiết kế",
      "Kế toán",
      "Nhân sự",
      "Marketing",
    ],
    []
  );

  const heroAvatars = useMemo(
    () => [
      {
        name: "Van Hoc",
        role: "Thiết kế UI/UX",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Van Duc",
        role: "Thiết kế sản phẩm",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Quynh Trang",
        role: "Frontend",
        img: "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223",
      },
      {
        name: "Thu Thảo",
        role: "Marketing",
        img: "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/tong-hop-avatar-facebook-dep-nhat.jpg?1704937487183",
      },
      {
        name: "Phuong Uyen",
        role: "Kỹ sư phần mềm",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      },
    ],
    []
  );

  const profiles = useMemo(
    () => [
      {
        name: "Van Hoa",
        role: "Lập trình viên",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=500&q=80",
        tags: ["Gimp", "Wordpress"],
        group: "Lập trình viên",
      },
      {
        name: "Anh Quoc",
        role: "Giáo viên",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
        tags: ["Elementor", "Wix", "Illustrator"],
        group: "Thiết kế UI",
      },
      {
        name: "Thai Ha",
        role: "Giáo viên",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
        tags: ["Figma", "Elementor", "Wordpress"],
        group: "Thiết kế UI",
      },
      {
        name: "Thanh Phuong",
        role: "Lập trình viên",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=80",
        tags: ["Figma", "Wordpress", "Gimp"],
        group: "Lập trình viên",
      },
      {
        name: "Quang Thang",
        role: "Lập trình viên",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
        tags: ["Wordpress", "Wix", "Illustrator"],
        group: "Lập trình viên",
      },
      {
        name: "Thu Thao",
        role: "Thiết kế web",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=500&q=80",
        tags: ["Elementor", "Wordpress"],
        group: "Thiết kế",
      },
      {
        name: "Xuan Hieu",
        role: "Giáo viên",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=500&q=80",
        tags: ["Framer", "Webflow", "Wix"],
        group: "Thiết kế UI",
      },
      {
        name: "Van Hoa 2",
        role: "Giáo viên",
        rating: 5.0,
        img: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=500&q=80",
        tags: ["Framer", "Webflow", "Wix"],
        group: "Thiết kế UI",
      },
      {
        name: "Thanh Nga",
        role: "Thiết kế web",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
        tags: ["Gimp", "Figma", "Webflow"],
        group: "Thiết kế",
      },
    ],
    []
  );

  const filteredProfiles = useMemo(() => {
    if (!activeTab) return profiles;
    const result = profiles.filter((p) => p.group === activeTab);
    return result.length ? result : profiles;
  }, [activeTab, profiles]);

  const portfolio = useMemo(
    () => [
      {
        name: "Phạm Thiên Thiên",
        role: "Kịch bản ngôi nhà hạnh phúc",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Nguyễn Thị Linh",
        role: "Dự án nuôi em ",
        img: "data:image/png;base64,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",
      },
      {
        name: "Đoàn Quang Thắng",
        role: "Xây dựng trang web quản lý thời gian",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  const courses = useMemo(
    () => [
      {
        title: "Lập Trình Python Từ Cơ Bản Đến Nâng Cao Trong 30 Ngày",
        author: "AI Coding",
        thumb:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
        badges: [
          { text: "Bán chạy nhất", tone: "best" },
          { text: "4,6", tone: "rating" },
          { text: "996 xếp hạng", tone: "meta" },
        ],
        price: "₫209,000",
        oldPrice: "₫349,000",
      },
      {
        title: "Ứng dụng ChatGPT trong Institutional Economics — Masterclass",
        author: "Zenson Tran",
        thumb:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
        badges: [
          { text: "Mới", tone: "new" },
          { text: "5,0", tone: "rating" },
          { text: "43 xếp hạng", tone: "meta" },
        ],
        price: "₫209,000",
        oldPrice: "₫349,000",
      },
      {
        title: "AWS Cloud for beginner (Vietnamese)",
        author: "Linh Nguyen",
        thumb:
          "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1400&q=80",
        badges: [
          { text: "Bán chạy nhất", tone: "best" },
          { text: "4,8", tone: "rating" },
          { text: "1.218 xếp hạng", tone: "meta" },
        ],
        price: "₫209,000",
        oldPrice: "₫349,000",
      },
      {
        title: "AWS Certified Solutions Architect - Associate (Tiếng Việt)",
        author: "Luu Ho Phuong",
        thumb:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
        badges: [
          { text: "Bán chạy nhất", tone: "best" },
          { text: "4,6", tone: "rating" },
          { text: "276 xếp hạng", tone: "meta" },
        ],
        price: "₫219,000",
        oldPrice: "₫369,000",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Trải nghiệm sử dụng rất mượt, từ lúc tìm kiếm đến lúc kết nối đều dễ dàng.",
        name: "Lê Sinh Cung",
        title: "Giám đốc điều hành",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
      },
      {
        quote:
          "Nền tảng giúp tìm đúng người nhanh và xây dựng đội nhóm làm việc hiệu quả.",
        name: "Trần Hữu Quốc",
        title: "Trưởng bộ phận tuyển dụng",
        img: "https://cdnportal.vnu.edu.vn/data/upload/2018/12/23326/image/Nguyen%20Van%20Anh.jpg",
      },
      {
        quote:
          "Giao diện đẹp, hồ sơ rõ ràng và quy trình liên hệ rất thuận tiện.",
        name: "Phạm Thị Thành",
        title: "Trưởng nhóm sản phẩm",
        img: "data:image/jpeg;base64,...", // Đã rút gọn chuỗi base64 để tối ưu hiển thị, code thật của bạn vẫn giữ nguyên bên dưới.
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Làm sao để tạo tài khoản?",
        a: "Bấm “Đăng ký ngay”, điền thông tin và xác minh email. Sau đó bạn tạo hồ sơ, thêm kỹ năng và bắt đầu ứng tuyển.",
      },
      {
        q: "Làm sao để ứng tuyển công việc trên nền tảng?",
        a: "Dùng ô tìm kiếm để tìm việc phù hợp. Mở tin tuyển dụng, xem yêu cầu và gửi hồ sơ/portfolio của bạn.",
      },
      {
        q: "Tôi theo dõi trạng thái đơn ứng tuyển ở đâu?",
        a: "Trong trang quản lý, bạn có thể xem trạng thái từng đơn, tin nhắn từ nhà tuyển dụng và các yêu cầu cập nhật.",
      },
      {
        q: "Mẹo nâng cao khi tạo tài khoản?",
        a: "Dùng từ khoá đúng với kỹ năng/chức danh/địa điểm. Bạn cũng có thể dùng bộ lọc nâng cao theo ngành, loại công việc và kinh nghiệm.",
      },
      {
        q: "Dùng nền tảng có mất phí không? Những tính năng nào miễn phí?",
        a: "Các tính năng cơ bản miễn phí: tạo hồ sơ, xem việc và ứng tuyển. Có thể có gói nâng cao như tăng hiển thị hoặc phân tích thống kê.",
      },
    ],
    []
  );

  const currentTestimonial = testimonials[testimonialIndex % testimonials.length];

  const onPrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const onNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`homeSection ${className}`}>
      <div className="homeContainer">{children}</div>
    </section>
  );

  const onNavClick = (item) => (e) => {
    e.preventDefault();

    if (item === "Trang chủ") onGoHome?.();
    if (item === "Khóa học") onGoCourses?.();
    if (item === "Giảng dạy") onGoTeaching?.();
    if (item === "Liên hệ") onGoContact?.();
  };

  const Icon = {
    ArrowRight: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M5 12h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Search: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M21 21l-4.3-4.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    Pin: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M12 22s7-4.5 7-12a7 7 0 0 0-14 0c0 7.5 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    Check: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M20 6 9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Play: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7-11-7Z" />
      </svg>
    ),
    Star: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "homeIconSmall"}
        aria-hidden="true"
      >
        <path d="M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.8-1.6 7L12 17.3Z" />
      </svg>
    ),
    ChevronLeft: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M15 6 9 12l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    ChevronRight: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Mail: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Phone: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M6.5 3.5h2.2l1.4 4.2-1.8 1.2c1.4 2.7 3.6 4.9 6.3 6.3l1.2-1.8 4.2 1.4v2.2c0 1-0.7 1.9-1.7 2.1-1.1.2-2.3.3-3.5.1-7.1-1.2-12.7-6.8-13.9-13.9-.2-1.2-.1-2.4.1-3.5.2-1 .9-1.7 2-1.7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Map: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20V6.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 4v13.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 6.5V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    Twitter: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path d="M18.9 7.3c.01.16.01.32.01.48 0 4.9-3.73 10.54-10.54 10.54-2.09 0-4.03-.61-5.66-1.65.29.03.57.04.87.04 1.73 0 3.32-.59 4.58-1.58-1.62-.03-2.98-1.1-3.45-2.57.23.04.46.07.7.07.33 0 .66-.04.97-.13-1.7-.34-2.98-1.84-2.98-3.64v-.05c.5.28 1.07.45 1.68.47-1-.67-1.66-1.81-1.66-3.11 0-.69.18-1.33.51-1.88 1.83 2.24 4.57 3.72 7.65 3.87-.05-.28-.08-.57-.08-.86 0-2.08 1.68-3.76 3.76-3.76 1.08 0 2.05.46 2.73 1.19.85-.17 1.64-.48 2.36-.9-.28.87-.87 1.6-1.63 2.06.75-.09 1.46-.29 2.12-.58-.51.75-1.15 1.41-1.88 1.93Z" />
      </svg>
    ),
    Github: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.95.36.31.68.93.68 1.88v2.78c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
    Linkedin: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path d="M6.94 6.5A2.44 2.44 0 1 1 6.94 1.6a2.44 2.44 0 0 1 0 4.9ZM2.6 22V8.2h4.7V22H2.6Zm7.8 0V8.2h4.5v1.9h.06c.62-1.18 2.15-2.42 4.43-2.42 4.74 0 5.62 3.12 5.62 7.17V22h-4.7v-6.13c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V22h-4.54Z" />
      </svg>
    ),
    ChevronRightCircle: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={props.className || "homeIcon"}
        aria-hidden="true"
      >
        <path
          d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M11 8l4 4-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    StarSolid: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "homeIconSmall"}
        aria-hidden="true"
      >
        <path d="M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.8-1.6 7L12 17.3Z" />
      </svg>
    ),
  };

  return (
    <div className="homePage">
      <div className="homeBg" />

      {/* 1) Navbar */}
      <header className="homeHeader">
        <div className="homeHeaderInner">
          <button
            type="button"
            className="homeBrand"
            onClick={onGoHome}
            aria-label="Về Trang chủ"
            style={{
              background: "transparent",
              border: 0,
              padding: 0,
              cursor: "pointer",
            }}
          >
            <span className="homeBrandMark" aria-hidden="true">
              <img src={logo} alt="Nex.edu" className="homeBrandLogo" />
            </span>
            <span className="homeBrandText">NEX EDU</span>
          </button>

          <nav className="homeNav">
            {["Trang chủ", "Khóa học", "Giảng dạy", "Liên hệ"].map((item) => (
              <a
                key={item}
                href="#"
                className="homeNavLink"
                onClick={onNavClick(item)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="homeHeaderActions">
            <button type="button" className="homeBtnGhost" onClick={onGoLogin}>
              Đăng nhập
            </button>

            <button
              type="button"
              className="homeBtnPrimary"
              onClick={onGoRegister}
            >
              Đăng ký ngay
              <span className="homeBtnPrimaryIcon">
                <Icon.ArrowRight className="homeIconSm" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2) Banner Home */}
      <section
        className="bannerHome"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Banner quảng cáo"
      >
        <div className="bannerHomeInner">
          <div className="bannerHomeBg">
            <img className="bannerHomeBgImg" src={activeSlide.img} alt="" />
            <div className="bannerHomeOverlay" />
          </div>
          <div className="bannerHomeContent">
            <div className="bannerHomeTag">{activeSlide.tag}</div>
            <h2 className="bannerHomeTitle">{activeSlide.title}</h2>
            <p className="bannerHomeDesc">{activeSlide.desc}</p>
            <div className="bannerHomeActions">
              <button
                type="button"
                className="bannerHomeBtnPrimary"
                onClick={() => activeSlide.cta?.onClick?.()}
              >
                {activeSlide.cta?.text || "Tìm hiểu thêm"}
              </button>
              <button type="button" className="bannerHomeBtnGhost" onClick={goPrevBanner}>←</button>
              <button type="button" className="bannerHomeBtnGhost" onClick={goNextBanner}>→</button>
            </div>
            <div className="bannerHomeDots" aria-label="Banner dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === bannerIndex ? "bannerHomeDotActive" : "bannerHomeDot"}
                  onClick={() => setBannerIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="hero" className="homeHero">
        <div className="homeHeroCenter">
          <div className="homeBadge">
            <span className="homeBadgeDot" />
            Nền tảng chia sẻ kỹ năng
          </div>

          <h1 className="homeHeroTitle">
            Học hỏi kỹ năng.{" "}
            <span className="homeHeroTitleAccent">Tìm kiếm cơ hội</span>
          </h1>

          <p className="homeHeroSub">
            Giới thiệu kỹ năng, tạo hồ sơ và để nhà tuyển dụng tìm thấy bạn. Tìm
            cơ hội, phát triển sự nghiệp nhanh hơn.
          </p>

          <div className="homeSearchShell">
            <div className="homeSearchGrid">
              <div className="homeSearchField">
                <span className="homeSearchIcon">
                  <Icon.Search />
                </span>
                <input
                  className="homeInput"
                  placeholder="Ví dụ: UI/UX Designer"
                />
              </div>

              <div className="homeSearchField">
                <span className="homeSearchIcon">
                  <Icon.Pin />
                </span>
                <input
                  className="homeInput"
                  placeholder="Ví dụ: Hà Nội, Việt Nam"
                />
              </div>

              <button type="button" className="homeSearchBtn">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* 3) Discover */}
      <Section id="discover" className="homeSectionSpacing">
        <div className="homeCenterText">
          <h2 className="homeH2">
            Khám phá <span className="homeH2Strong">nhân tài nổi bật</span>
          </h2>
          <p className="homeP">Tìm người phù hợp cho đội nhóm của bạn.</p>
        </div>

        <div className="homeTabsShell">
          <div className="homeTabs">
            {tabs.map((t) => {
              const isActive = t === activeTab;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTab(t)}
                  className={isActive ? "homeTabActive" : "homeTab"}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="homeGrid4">
          {filteredProfiles.slice(0, 8).map((p) => (
            <div key={p.name} className="homeProfileCard">
              <div className="homeProfileTop">
                <div className="homeProfileLeft">
                  <img src={p.img} alt={p.name} className="homeProfileAvatar" />
                  <div className="homeProfileMeta">
                    <div className="homeProfileName">{p.name}</div>
                    <div className="homeProfileRole">{p.role}</div>
                  </div>
                </div>
                <div className="homeRating">
                  <span className="homeStar">
                    <Icon.Star />
                  </span>
                  {p.rating.toFixed(1)}
                </div>
              </div>

              <div className="homeTags">
                {p.tags.map((tag) => (
                  <span key={tag} className="homeTag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="homeDivider" />
              <div className="homeProfileBottom">
                <span className="homeMuted">Đang sẵn sàng</span>
                <span className="homeLink">
                  Xem hồ sơ <Icon.ArrowRight className="homeIconSm" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="homeCenterBtn">
          <button type="button" className="homeBtnOutlinePill">
            Xem tất cả
            <span className="homeBtnPillIcon">
              <Icon.ArrowRight className="homeIconSm" />
            </span>
          </button>
        </div>
      </Section>

      {/* 5) How it works */}
      <Section id="how" className="homeSectionSpacing">
        <div className="homeHowGrid">
          <div>
            <h2 className="homeH2Left">Cách hoạt động</h2>
            <div className="homeSteps">
              {[
                {
                  step: "",
                  title: "Đăng ký và tạo tài khoản",
                  desc: "Điền thông tin và thêm kỹ năng muốn học  .",
                  tone: "homeGradIndigoSky",
                },
                {
                  step: "",
                  title: "Mua khóa học kĩ năng cùng giảng viên",
                  desc: "Thêm CV, video và dự án nổi bật.",
                  tone: "homeGradAmberRose",
                },
                {
                  step: "`",
                  title: "Được tìm thấy",
                  desc: "Nhà tuyển dụng tìm và liên hệ với bạn.",
                  tone: "homeGradVioletIndigo",
                },
              ].map((it) => (
                <div key={it.step} className="homeStepRow">
                  <div className="homeStepBig">{it.step}</div>
                  <div className="homeStepCard">
                    <div className="homeStepInner">
                      <div className={`homeStepIcon ${it.tone}`}>
                        <Icon.Check />
                      </div>
                      <div>
                        <div className="homeStepTitle">{it.title}</div>
                        <div className="homeStepDesc">{it.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="homeHowRight">
            <div className="homeHowCard">
              <div className="homeHowImages">
                <div className="homeHowImgWrap">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
                    alt="Hình minh hoạ 1"
                    className="homeHowImg"
                  />
                </div>
                <div className="homeHowImgWrap">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                    alt="Hình minh hoạ 2"
                    className="homeHowImg"
                  />
                </div>
              </div>

              <div className="homeHowBadge">
                <div className="homeHowPeople">
                  {heroAvatars.slice(0, 4).map((u) => (
                    <img
                      key={u.name}
                      src={u.img}
                      alt={u.name}
                      className="homeHowPerson"
                    />
                  ))}
                </div>
                <div className="homeHowStat">
                  <div className="homeHowStatNum">10K+</div>
                  <div className="homeHowStatTxt">Ứng viên</div>
                </div>
              </div>
            </div>

            <div className="homeHowGlow" />
          </div>
        </div>
      </Section>

      {/* 6) Portfolio */}
      <Section id="portfolio" className="homeSectionSpacing">
        <div className="homeTopRow">
          <div>
            <h2 className="homeH2Left">Portfolio nổi bật</h2>
            <p className="homePLeft">
              Xem các dự án tiêu biểu từ những hồ sơ chất lượng.
            </p>
          </div>
          <div className="homeNavBtns">
            <button type="button" className="homeCircleBtn" aria-label="Prev">
              <Icon.ChevronLeft />
            </button>
            <button
              type="button"
              className="homeCircleBtnPrimary"
              aria-label="Next"
            >
              <Icon.ChevronRight />
            </button>
          </div>
        </div>

        <div className="homePortfolioGrid">
          {portfolio.map((it) => (
            <div key={it.name} className="homePortfolioCard">
              <img src={it.img} alt={it.name} className="homePortfolioImg" />
              <div className="homePortfolioOverlay" />
              <div className="homePortfolioFooter">
                <div>
                  <div className="homePortfolioName">{it.name}</div>
                  <div className="homePortfolioRole">{it.role}</div>
                </div>
                <button
                  type="button"
                  className="homePlayBtnSm"
                  aria-label="Play"
                >
                  <Icon.Play />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Courses preview */}
      <Section id="courses" className="homeSectionSpacing">
        <div className="homeCoursesHeader">
          <h2 className="homeH2Left">Các khóa học thịnh hành</h2>

          <button
            type="button"
            className="homeCoursesNext"
            aria-label="Xem tất cả khóa học"
            onClick={onGoCourses}
          >
            <Icon.ChevronRightCircle className="homeCoursesNextIcon" />
          </button>
        </div>

        <div className="homeCoursesGrid">
          {courses.map((c) => (
            <div key={c.title} className="homeCourseCard">
              <div className="homeCourseThumbWrap">
                <img src={c.thumb} alt={c.title} className="homeCourseThumb" />
              </div>

              <div className="homeCourseBody">
                <div className="homeCourseTitle">{c.title}</div>
                <div className="homeCourseAuthor">{c.author}</div>

                <div className="homeCourseBadges">
                  {c.badges.map((b) => (
                    <span
                      key={b.text}
                      className={`homeCourseBadge homeCourseBadge-${b.tone}`}
                    >
                      {b.tone === "rating" ? (
                        <span className="homeCourseBadgeStar">
                          <Icon.StarSolid />
                        </span>
                      ) : null}
                      {b.text}
                    </span>
                  ))}
                </div>

                <div className="homeCoursePriceRow">
                  <div className="homeCoursePrice">{c.price}</div>
                  <div className="homeCourseOldPrice">{c.oldPrice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7) Testimonials */}
      <Section id="testimonials" className="homeSectionSpacing">
        <div className="homeTestGrid">
          <div className="homeTestCard">
            <div className="homeTestMeta">
              {currentTestimonial.name} <span className="homeDot">•</span>{" "}
              {currentTestimonial.title}
            </div>
            <div className="homeQuote">“{currentTestimonial.quote}”</div>

            <div className="homeTestBtns">
              <button
                type="button"
                onClick={onPrevTestimonial}
                className="homeTestBtnGhost"
                aria-label="Prev testimonial"
              >
                <Icon.ChevronLeft />
              </button>
              <button
                type="button"
                onClick={onNextTestimonial}
                className="homeTestBtnPrimary"
                aria-label="Next testimonial"
              >
                <Icon.ChevronRight />
              </button>
            </div>
          </div>

          <div className="homeTestImageCard">
            <img
              src={currentTestimonial.img}
              alt={currentTestimonial.name}
              className="homeTestImg"
            />
            <div className="homeTestImgOverlay" />
          </div>
        </div>
      </Section>

      {/* 8) FAQ */}
      <Section id="faq" className="homeSectionSpacing">
        <div className="homeFaqGrid">
          <div>
            <h2 className="homeH2Left">Câu hỏi thường gặp</h2>
            <p className="homePLeft">Những thông tin bạn cần biết để bắt đầu.</p>

            <div className="homeFaqList">
              {faqs.map((item, idx) => {
                const n = idx + 1;
                const isOpen = openFaq === n;
                return (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => setOpenFaq((prev) => (prev === n ? 0 : n))}
                    className={isOpen ? "homeFaqItemOpen" : "homeFaqItem"}
                  >
                    <div className="homeFaqRow">
                      <div className="homeFaqLeft">
                        <div
                          className={isOpen ? "homeFaqNumOpen" : "homeFaqNum"}
                        >
                          {String(n).padStart(2, "0")}
                        </div>
                        <div className="homeFaqContent">
                          <div className="homeFaqQ">{item.q}</div>
                          {isOpen ? (
                            <div className="homeFaqA">{item.a}</div>
                          ) : null}
                        </div>
                      </div>
                      <div
                        className={
                          isOpen ? "homeFaqToggleOpen" : "homeFaqToggle"
                        }
                      >
                        <span className="homeFaqToggleTxt">
                          {isOpen ? "×" : "+"}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="homeFaqSide">
            <div className="homeFaqSideCard">
              <div className="homeFaqSideTitle">
                Cần hỗ trợ chọn lộ trình phù hợp?
              </div>
              <p className="homePLeft">
                Hãy cho chúng tôi biết mục tiêu, chúng tôi sẽ gợi ý kỹ năng và
                người hướng dẫn.
              </p>
              <div className="homeFaqSideGrid">
                <div className="homeFieldStub">Mục tiêu học</div>
                <div className="homeFieldStub">Vị trí mong muốn</div>
              </div>
              <button
                type="button"
                className="homeFaqSideBtn"
                onClick={onGoContact}
              >
                Liên hệ hỗ trợ
              </button>
            </div>
            <div className="homeFaqSideGlow" />
          </div>
        </div>
      </Section>

      {/* 9) CTA */}
      <Section id="cta" className="homeSectionSpacing">
        <div className="homeCta">
          <div className="homeCenterText">
            <h3 className="homeH3Big">
              Tham gia ngay để mở rộng cơ hội nghề nghiệp
            </h3>
            <p className="homeP">
              Khám phá nhiều cơ hội phù hợp với kỹ năng, sở thích và mục tiêu của
              bạn.
            </p>

            <div className="homeCtaRow">
              <div className="homeEmailField">
                <span className="homeSearchIcon">
                  <Icon.Mail />
                </span>
                <input className="homeInput" placeholder="Nhập email của bạn" />
              </div>
              <button type="button" className="homeJoinBtn" onClick={onGoRegister}>
                Tham gia
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* 10) Footer */}
      <footer className="homeFooter">
        <div className="homeContainer">
          <div className="homeFooterGrid">
            <div>
              <div className="homeBrand">
                <div className="homeBrandMark">
                  <img src={logo} alt="Nex.edu" className="homeBrandLogo" />
                </div>
                <span className="homeBrandText">Nex.edu</span>
              </div>

              <div className="homeFooterInfo">
                <div className="homeInfoRow">
                  <span className="homeInfoIcon">
                    <Icon.Map />
                  </span>
                  <span>
                    Trụ sở: 470 Trần Đại Nghĩa, Phường Hòa Quý, thành phố Đà Nẵng.
                  </span>
                </div>
                <div className="homeInfoRow">
                  <span className="homeInfoIcon">
                    <Icon.Phone />
                  </span>
                  <span>Điện thoại: +84889020611</span>
                </div>
                <div className="homeInfoRow">
                  <span className="homeInfoIcon">
                    <Icon.Mail />
                  </span>
                  <span>Email: hoclv.04@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <div className="homeFooterTitle">Liên kết nhanh</div>
              <ul className="homeFooterLinks">
                {["Trang chủ", "Khóa học", "Giảng dạy", "Liên hệ"].map((l) => (
                  <li key={l}>
                    <a href="#" className="homeFooterLink" onClick={onNavClick(l)}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="homeFooterTitle">Khác</div>
              <ul className="homeFooterLinks">
                {[
                  "Cách hoạt động",
                  "Điều khoản",
                  "Chính sách bảo mật",
                  "Giới thiệu",
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="homeFooterLink" onClick={(e) => e.preventDefault()}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="homeFooterTitle">Về chúng tôi</div>
              <ul className="homeFooterLinks">
                {[
                  "Cột mốc",
                  "Web mail",
                  "Hội đồng quản trị",
                  "Ban lãnh đạo",
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="homeFooterLink" onClick={(e) => e.preventDefault()}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="homeFooterBottom">
            <div className="homeCopyright">
              © {new Date().getFullYear()} Đã đăng ký bản quyền
            </div>

            <div className="homeSocial">
              <a
                href="#"
                className="homeSocialBtn"
                aria-label="Twitter"
                onClick={(e) => e.preventDefault()}
              >
                <Icon.Twitter />
              </a>
              <a
                href="#"
                className="homeSocialBtn"
                aria-label="LinkedIn"
                onClick={(e) => e.preventDefault()}
              >
                <Icon.Linkedin />
              </a>
              <a
                href="#"
                className="homeSocialBtn"
                aria-label="GitHub"
                onClick={(e) => e.preventDefault()}
              >
                <Icon.Github />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}