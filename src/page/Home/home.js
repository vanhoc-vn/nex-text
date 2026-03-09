import React, { useMemo, useState } from "react";
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
        img: "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Đoàn Quang Thắng",
        role: "Xây dựng trang web quản lý thời gian",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  // Courses preview section in Home
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
        img: "data:image/jpeg;base64,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",
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

      {/* 2) Hero */}
      <Section id="hero" className="homeHero">
        <div className="homeHeroCenter">
          <div className="homeBadge">
            <span className="homeBadgeDot" />
            Nền tảng chia sẻ kỹ năng
          </div>

          <h1 className="homeHeroTitle">
            Học hỏi kỹ năng.{" "}
            <span className="homeHeroTitleAccent">Kết nối cơ hội</span>
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
                  step: "01",
                  title: "Đăng ký và tạo tài khoản",
                  desc: "Điền thông tin và thêm kỹ năng muốn học  .",
                  tone: "homeGradIndigoSky",
                },
                {
                  step: "02",
                  title: "Mua khóa học kĩ năng cùng giảng viên",
                  desc: "Thêm CV, video và dự án nổi bật.",
                  tone: "homeGradAmberRose",
                },
                {
                  step: "03",
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