import React, { useMemo, useState } from "react";
import "./home.css";

export default function Home({ onGoLogin, onGoRegister }) {
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
        img: "https://images.unsplash.com/photo-1520975958225-6c1f6cfc1f5e?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Mia Bennett",
        role: "Marketing",
        img: "https://images.unsplash.com/photo-1524503033411-f0ce9a9e3a1b?auto=format&fit=crop&w=600&q=80",
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
        name: "Floyd Miles",
        role: "Thiết kế đồ hoạ",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Brooklyn Simmons",
        role: "Thiết kế UI/UX",
        img: "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Wade Warren",
        role: "Lập trình viên",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  // NEW: Courses section like image1
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
        name: "Manuel Rikobo",
        title: "Giám đốc điều hành",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
      },
      {
        quote:
          "Nền tảng giúp tìm đúng người nhanh và xây dựng đội nhóm làm việc hiệu quả.",
        name: "Sarah Conner",
        title: "Trưởng bộ phận tuyển dụng",
        img: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=1600&q=80",
      },
      {
        quote:
          "Giao diện đẹp, hồ sơ rõ ràng và quy trình liên hệ rất thuận tiện.",
        name: "Daniel Lee",
        title: "Trưởng nhóm sản phẩm",
        img: "https://images.unsplash.com/photo-1520975958225-6c1f6cfc1f5e?auto=format&fit=crop&w=1600&q=80",
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
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeWidth="2"
        />
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
    // NEW: for slider arrow in courses section
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
          <div className="homeBrand">
            <div className="homeBrandMark">N</div>
            <span className="homeBrandText">Nex.edu</span>
          </div>

          <nav className="homeNav">
            {["Tạo CV", "Kỹ năng", "Việc làm đối tác", "Liên hệ"].map((item) => (
              <a key={item} href="#" className="homeNavLink">
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
            Thể hiện kỹ năng của bạn.{" "}
            <span className="homeHeroTitleAccent">Kết nối cơ hội</span>
          </h1>

          <p className="homeHeroSub">
            Tạo hồ sơ, giới thiệu kỹ năng và để nhà tuyển dụng tìm thấy bạn. Tìm
            cơ hội, kết nối đội nhóm và phát triển sự nghiệp nhanh hơn.
          </p>

          <div className="homeSearchShell">
            <div className="homeSearchGrid">
              <div className="homeSearchField">
                <span className="homeSearchIcon">
                  <Icon.Search />
                </span>
                <input className="homeInput" placeholder="Ví dụ: UI/UX Designer" />
              </div>

              <div className="homeSearchField">
                <span className="homeSearchIcon">
                  <Icon.Pin />
                </span>
                <input className="homeInput" placeholder="Ví dụ: Hà Nội, Việt Nam" />
              </div>

              <button type="button" className="homeSearchBtn">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>

        <div className="homeAvatarGrid">
          {heroAvatars.map((u) => (
            <div key={u.name} className="homeAvatarCard">
              <div className="homeAvatarCardInner">
                <img src={u.img} alt={u.name} className="homeAvatarImg" />
                <div className="homeAvatarMeta">
                  <div className="homeAvatarName">{u.name}</div>
                  <div className="homeAvatarRole">{u.role}</div>
                </div>
              </div>
              <div className="homeAvatarGlow" />
            </div>
          ))}
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

      {/* 4) Why */}
      <Section id="why" className="homeSectionSpacing">
        <div className="homeCenterText">
          <h2 className="homeH2">
            Vì sao chọn <span className="homeH2Strong">nền tảng này</span>?
          </h2>
          <p className="homeP">
            Mở rộng cơ hội phù hợp với kỹ năng và mục tiêu của bạn.
          </p>
        </div>

        <div className="homeWhyWrap">
          <div className="homeWhyGrid">
            <div className="homeWhyCol">
              <div className="homeMiniCard">
                <div className="homeMiniCardTop">
                  <div className="homeMiniIcon homeMiniIconIndigo">
                    <Icon.Check />
                  </div>
                  <span className="homeChip">Nổi bật</span>
                </div>
                <h3 className="homeH3">Trưng bày dự án</h3>
                <p className="homeSmallP">Đưa dự án lên để nổi bật hơn.</p>
                <button type="button" className="homeBtnSkyPill">
                  Thêm dự án
                </button>
              </div>

              <div className="homeMiniCard">
                <div className="homeStatRow">
                  <div className="homeMiniIcon homeMiniIconSky">
                    <Icon.Check />
                  </div>
                  <div>
                    <div className="homeStatNum">100K+</div>
                    <div className="homeSmallP">Người dùng đang hoạt động</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="homeVideoCol">
              <div className="homeVideoGlow" />
              <div className="homeVideoCard">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="CV video"
                  className="homeVideoImg"
                />
                <div className="homeVideoOverlay" />
                <div className="homeVideoFooter">
                  <div>
                    <div className="homeVideoTitle">CV video</div>
                    <div className="homeVideoSub">
                      Giới thiệu bản thân trong 30 giây
                    </div>
                  </div>
                  <button type="button" className="homePlayBtn" aria-label="Play">
                    <Icon.Play />
                  </button>
                </div>
              </div>
            </div>

            <div className="homeWhyCol">
              <div className="homeMiniCard">
                <div className="homeStatRow">
                  <div className="homeMiniIcon homeMiniIconIndigo">
                    <Icon.Check />
                  </div>
                  <div>
                    <div className="homeH3">Cơ hội kết nối</div>
                    <div className="homeSmallP">Gặp nhà tuyển dụng và cộng sự</div>
                  </div>
                </div>
              </div>

              <div className="homeMiniCard">
                <div className="homeMiniCardTop">
                  <div className="homeMiniIcon homeMiniIconSky">
                    <Icon.Check />
                  </div>
                  <span className="homeChip">Pro</span>
                </div>
                <h3 className="homeH3">Tạo CV</h3>
                <p className="homeSmallP">
                  Tạo CV chuyên nghiệp bằng công cụ có sẵn.
                </p>
                <button type="button" className="homeBtnSkyPill">
                  Tạo CV
                </button>
              </div>
            </div>
          </div>

          <div className="homeRing homeRing1" />
          <div className="homeRing homeRing2" />
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
                  desc: "Điền thông tin và thêm kỹ năng của bạn.",
                  tone: "homeGradIndigoSky",
                },
                {
                  step: "02",
                  title: "Tải portfolio của bạn",
                  desc: "Thêm CV, video và dự án nổi bật.",
                  tone: "homeGradAmberRose",
                },
                {
                  step: "03",
                  title: "Được tìm thấy",
                  desc: "Để nhà tuyển dụng tìm và liên hệ với bạn.",
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
                <button type="button" className="homePlayBtnSm" aria-label="Play">
                  <Icon.Play />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* NEW: Courses section like image1 (below Portfolio nổi bật) */}
      <Section id="courses" className="homeSectionSpacing">
        <div className="homeCoursesHeader">
          <h2 className="homeH2Left">Các khóa học thịnh hành</h2>

          <button type="button" className="homeCoursesNext" aria-label="Next">
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
                        <div className={isOpen ? "homeFaqNumOpen" : "homeFaqNum"}>
                          {String(n).padStart(2, "0")}
                        </div>
                        <div className="homeFaqContent">
                          <div className="homeFaqQ">{item.q}</div>
                          {isOpen ? <div className="homeFaqA">{item.a}</div> : null}
                        </div>
                      </div>
                      <div
                        className={isOpen ? "homeFaqToggleOpen" : "homeFaqToggle"}
                      >
                        <span className="homeFaqToggleTxt">{isOpen ? "×" : "+"}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="homeFaqSide">
            <div className="homeFaqSideCard">
              <div className="homeFaqSideTitle">Cần hỗ trợ chọn lộ trình phù hợp?</div>
              <p className="homePLeft">
                Hãy cho chúng tôi biết mục tiêu, chúng tôi sẽ gợi ý kỹ năng và
                người hướng dẫn.
              </p>
              <div className="homeFaqSideGrid">
                <div className="homeFieldStub">Mục tiêu học</div>
                <div className="homeFieldStub">Vị trí mong muốn</div>
              </div>
              <button type="button" className="homeFaqSideBtn">
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
            <h3 className="homeH3Big">Tham gia ngay để mở rộng cơ hội nghề nghiệp</h3>
            <p className="homeP">
              Khám phá nhiều cơ hội phù hợp với kỹ năng, sở thích và mục tiêu của bạn.
            </p>

            <div className="homeCtaRow">
              <div className="homeEmailField">
                <span className="homeSearchIcon">
                  <Icon.Mail />
                </span>
                <input className="homeInput" placeholder="Nhập email của bạn" />
              </div>
              <button type="button" className="homeJoinBtn">
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
                <div className="homeBrandMark">N</div>
                <span className="homeBrandText">Nex.edu</span>
              </div>

              <div className="homeFooterInfo">
                <div className="homeInfoRow">
                  <span className="homeInfoIcon">
                    <Icon.Map />
                  </span>
                  <span>
                    Trụ sở: 3787 Jerry Dove Drive, Florence, South Carolina, 29501, Hoa Kỳ.
                  </span>
                </div>
                <div className="homeInfoRow">
                  <span className="homeInfoIcon">
                    <Icon.Phone />
                  </span>
                  <span>Điện thoại: +843-496-7759</span>
                </div>
                <div className="homeInfoRow">
                  <span className="homeInfoIcon">
                    <Icon.Mail />
                  </span>
                  <span>Email: hello@nex.edu</span>
                </div>
              </div>
            </div>

            <div>
              <div className="homeFooterTitle">Liên kết nhanh</div>
              <ul className="homeFooterLinks">
                {["Bảng giá", "Việc làm", "Nhà tuyển dụng", "Tuyển dụng", "Liên hệ"].map((l) => (
                  <li key={l}>
                    <a href="#" className="homeFooterLink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="homeFooterTitle">Khác</div>
              <ul className="homeFooterLinks">
                {["Cách hoạt động", "Điều khoản", "Chính sách bảo mật", "Giới thiệu"].map((l) => (
                  <li key={l}>
                    <a href="#" className="homeFooterLink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="homeFooterTitle">Về chúng tôi</div>
              <ul className="homeFooterLinks">
                {["Cột mốc", "Web mail", "Hội đồng quản trị", "Ban lãnh đạo"].map((l) => (
                  <li key={l}>
                    <a href="#" className="homeFooterLink">
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
              <a href="#" className="homeSocialBtn" aria-label="Twitter">
                <Icon.Twitter />
              </a>
              <a href="#" className="homeSocialBtn" aria-label="LinkedIn">
                <Icon.Linkedin />
              </a>
              <a href="#" className="homeSocialBtn" aria-label="GitHub">
                <Icon.Github />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}