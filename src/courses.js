import React, { useMemo, useState } from "react";
import "./page/courses.css";

export default function Courses({ onGoHome }) {
  const categories = useMemo(
    () => [
      "Tất cả",
      "Lập trình",
      "AI / ChatGPT",
      "Cloud / AWS",
      "Thiết kế",
      "Marketing",
      "Kinh doanh",
    ],
    []
  );

  const allCourses = useMemo(
    () => [
      {
        id: "py-30",
        title: "Lập Trình Python Từ Cơ Bản Đến Nâng Cao Trong 30 Ngày",
        author: "AI Coding",
        category: "Lập trình",
        rating: 4.6,
        ratingCount: 996,
        isBestSeller: true,
        isNew: false,
        price: 209000,
        oldPrice: 349000,
        thumb:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "gpt-master",
        title: "Ứng dụng ChatGPT trong Institutional Economics — Masterclass",
        author: "Zenson Tran",
        category: "AI / ChatGPT",
        rating: 5.0,
        ratingCount: 43,
        isBestSeller: false,
        isNew: true,
        price: 209000,
        oldPrice: 349000,
        thumb:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "aws-begin",
        title: "AWS Cloud for beginner (Vietnamese)",
        author: "Linh Nguyen",
        category: "Cloud / AWS",
        rating: 4.8,
        ratingCount: 1218,
        isBestSeller: true,
        isNew: false,
        price: 209000,
        oldPrice: 349000,
        thumb:
          "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "aws-saa",
        title: "AWS Certified Solutions Architect - Associate (Tiếng Việt)",
        author: "Luu Ho Phuong",
        category: "Cloud / AWS",
        rating: 4.6,
        ratingCount: 276,
        isBestSeller: true,
        isNew: false,
        price: 219000,
        oldPrice: 369000,
        thumb:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "ui-basic",
        title: "UI Foundation: Figma từ cơ bản đến nâng cao",
        author: "Design Hub",
        category: "Thiết kế",
        rating: 4.7,
        ratingCount: 514,
        isBestSeller: false,
        isNew: false,
        price: 189000,
        oldPrice: 299000,
        thumb:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "mk-digital",
        title: "Digital Marketing thực chiến: từ 0 đến 1",
        author: "Growth Team",
        category: "Marketing",
        rating: 4.5,
        ratingCount: 842,
        isBestSeller: false,
        isNew: false,
        price: 179000,
        oldPrice: 289000,
        thumb:
          "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "biz-start",
        title: "Khởi nghiệp tinh gọn (Lean Startup) cho người mới",
        author: "Biz Academy",
        category: "Kinh doanh",
        rating: 4.4,
        ratingCount: 233,
        isBestSeller: false,
        isNew: true,
        price: 169000,
        oldPrice: 269000,
        thumb:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "js-pro",
        title: "JavaScript Pro: ES6+, DOM, Async & Patterns",
        author: "Frontend Pro",
        category: "Lập trình",
        rating: 4.7,
        ratingCount: 1209,
        isBestSeller: true,
        isNew: false,
        price: 229000,
        oldPrice: 399000,
        thumb:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    []
  );

  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allCourses.filter((c) => {
      const matchCategory =
        activeCategory === "Tất cả" ? true : c.category === activeCategory;

      const matchQuery = !q
        ? true
        : (c.title + " " + c.author + " " + c.category)
            .toLowerCase()
            .includes(q);

      return matchCategory && matchQuery;
    });
  }, [allCourses, activeCategory, query]);

  const formatVND = (n) =>
    "₫" +
    Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="coursesPage">
      <div className="coursesBg" />

      <header className="coursesHeader">
        <div className="coursesHeaderInner">
          <button type="button" className="coursesBackBtn" onClick={onGoHome}>
            ← Trang chủ
          </button>

          <div className="coursesTitleBlock">
            <h1 className="coursesH1">Khoá học</h1>
            <p className="coursesSub">
              Khám phá danh mục và chọn khoá học phù hợp với mục tiêu của bạn.
            </p>
          </div>
        </div>
      </header>

      <main className="coursesMain">
        <section className="coursesShell">
          <div className="coursesTopBar">
            <div className="coursesSearch">
              <span className="coursesSearchIcon" aria-hidden="true">
                ⌕
              </span>
              <input
                className="coursesInput"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm theo tên khoá học, tác giả, danh mục..."
              />
            </div>

            <div className="coursesCount">{filteredCourses.length} khoá học</div>
          </div>

          <div className="coursesBody">
            <aside className="coursesSidebar">
              <div className="coursesSidebarTitle">Danh mục</div>

              <div className="coursesCats">
                {categories.map((cat) => {
                  const active = cat === activeCategory;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={active ? "coursesCatActive" : "coursesCat"}
                    >
                      <span>{cat}</span>
                      {active ? <span className="coursesDot" /> : null}
                    </button>
                  );
                })}
              </div>
            </aside>

            <section className="coursesGrid" aria-label="Danh sách khoá học">
              {filteredCourses.map((c) => (
                <article key={c.id} className="courseCard">
                  <div className="courseThumbWrap">
                    <img
                      className="courseThumb"
                      src={c.thumb}
                      alt={c.title}
                      loading="lazy"
                    />

                    <div className="courseBadgesTop">
                      {c.isBestSeller ? (
                        <span className="courseChip courseChipBest">
                          Bán chạy nhất
                        </span>
                      ) : null}
                      {c.isNew ? (
                        <span className="courseChip courseChipNew">Mới</span>
                      ) : null}
                    </div>
                  </div>

                  <div className="courseBody">
                    <div className="courseTitle">{c.title}</div>
                    <div className="courseAuthor">{c.author}</div>

                    <div className="courseMeta">
                      <span className="courseRating">
                        <span className="courseStar">★</span>
                        {c.rating.toFixed(1)}
                      </span>
                      <span className="courseMetaDot">•</span>
                      <span className="courseMetaText">
                        {c.ratingCount.toLocaleString("vi-VN")} xếp hạng
                      </span>
                    </div>

                    <div className="coursePriceRow">
                      <div className="coursePrice">{formatVND(c.price)}</div>
                      <div className="courseOldPrice">{formatVND(c.oldPrice)}</div>
                    </div>

                    <div className="courseActions">
                      <button type="button" className="courseBtnPrimary">
                        Xem chi tiết
                      </button>
                      <button type="button" className="courseBtnGhost">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {filteredCourses.length === 0 ? (
                <div className="coursesEmpty">
                  Không tìm thấy khoá học phù hợp.
                </div>
              ) : null}
            </section>
          </div>
        </section>

        <footer className="coursesFooter">© {new Date().getFullYear()} Nex.edu</footer>
      </main>
    </div>
  );
}