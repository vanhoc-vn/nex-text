import React, { useMemo, useState } from "react";
import "./teaching.css";

export default function Teaching({ onGoHome }) {
  const benefits = useMemo(
    () => [
      {
        title: "Tạo khoá học nhanh",
        desc: "Dễ dàng đăng nội dung, quản lý video/bài tập và cập nhật liên tục.",
        icon: "⚡",
      },
      {
        title: "Tiếp cận học viên",
        desc: "Hệ thống gợi ý giúp khoá học của bạn đến đúng đối tượng.",
        icon: "🎯",
      },
      {
        title: "Tăng thu nhập",
        desc: "Kiếm tiền từ khoá học, mentoring, hoặc chương trình cộng tác.",
        icon: "💰",
      },
      {
        title: "Xây thương hiệu cá nhân",
        desc: "Trang hồ sơ giảng viên giúp bạn nổi bật và tạo uy tín.",
        icon: "⭐",
      },
    ],
    []
  );

  const initialForm = useMemo(
    () => ({
      fullName: "",
      email: "",
      phone: "",
      expertise: "Lập trình",
      expYears: "",
      portfolio: "",
      message: "",
      agree: true,
    }),
    []
  );

  const [form, setForm] = useState(initialForm);

  const setField = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Teaching application:", form);
    alert("Đã gửi đăng ký giảng dạy (demo). Chúng tôi sẽ liên hệ sớm!");
    setForm(initialForm);
  };

  return (
    <div className="teachPage">
      <div className="teachBg" />

      <header className="teachHeader">
        <div className="teachHeaderInner">
          <button type="button" className="teachBackBtn" onClick={onGoHome}>
            ← Trang chủ
          </button>

          <div className="teachBrand">
            <div className="teachBrandMark">N</div>
            <div className="teachBrandText">Nex.edu</div>
          </div>
        </div>
      </header>

      <main className="teachMain">
        <section className="teachHero teachFadeIn">
          <div className="teachHeroLeft">
            <div className="teachBadge">Tuyển giảng viên</div>
            <h1 className="teachH1">
              Trở thành <span className="teachAccent">Giảng viên</span> tại Nex.edu
            </h1>
            <p className="teachSub">
              Chia sẻ kiến thức của bạn với cộng đồng học viên. Chúng tôi đang tìm
              giảng viên/mentor ở nhiều lĩnh vực: Lập trình, Thiết kế, Cloud, AI,
              Marketing...
            </p>

            <div className="teachStats">
              <div className="teachStat">
                <div className="teachStatNum">10K+</div>
                <div className="teachStatTxt">Học viên</div>
              </div>
              <div className="teachStat">
                <div className="teachStatNum">300+</div>
                <div className="teachStatTxt">Khoá học</div>
              </div>
              <div className="teachStat">
                <div className="teachStatNum">4.8★</div>
                <div className="teachStatTxt">Đánh giá trung bình</div>
              </div>
            </div>
          </div>

          <div className="teachHeroRight">
            <div className="teachHeroCard">
              <div className="teachHeroCardTitle">Bạn phù hợp nếu</div>
              <ul className="teachList">
                <li>Có kỹ năng chuyên môn rõ ràng</li>
                <li>Thích chia sẻ/đào tạo</li>
                <li>Có dự án/kinh nghiệm thực tế</li>
                <li>Sẵn sàng hỗ trợ học viên</li>
              </ul>

              <a className="teachScrollHint" href="#apply">
                Đi tới form đăng ký ↓
              </a>
            </div>
            <div className="teachGlow" />
          </div>
        </section>

        <section className="teachSection">
          <div className="teachSectionHeader">
            <h2 className="teachH2">Quyền lợi giảng viên</h2>
            <p className="teachP">
              Mọi công cụ bạn cần để dạy học hiệu quả và phát triển lâu dài.
            </p>
          </div>

          <div className="teachBenefits">
            {benefits.map((b) => (
              <div key={b.title} className="teachBenefitCard">
                <div className="teachBenefitIcon" aria-hidden="true">
                  {b.icon}
                </div>
                <div className="teachBenefitTitle">{b.title}</div>
                <div className="teachBenefitDesc">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="apply" className="teachSection">
          <div className="teachSectionHeader">
            <h2 className="teachH2">Đăng ký giảng dạy</h2>
            <p className="teachP">
              Điền thông tin dưới đây. Đội ngũ Nex.edu sẽ liên hệ trong 24–48h làm việc.
            </p>
          </div>

          <div className="teachApplyGrid">
            <form className="teachForm" onSubmit={onSubmit}>
              <label className="teachLabel">
                Họ và tên
                <div className="teachField">
                  <input
                    className="teachInput"
                    value={form.fullName}
                    onChange={setField("fullName")}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    required
                  />
                </div>
              </label>

              <div className="teach2col">
                <label className="teachLabel">
                  Email
                  <div className="teachField">
                    <input
                      className="teachInput"
                      type="email"
                      value={form.email}
                      onChange={setField("email")}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </label>

                <label className="teachLabel">
                  Số điện thoại
                  <div className="teachField">
                    <input
                      className="teachInput"
                      value={form.phone}
                      onChange={setField("phone")}
                      placeholder="VD: 09xxxxxxxx"
                      required
                    />
                  </div>
                </label>
              </div>

              <div className="teach2col">
                <label className="teachLabel">
                  Chuyên môn
                  <div className="teachField">
                    <select
                      className="teachSelect"
                      value={form.expertise}
                      onChange={setField("expertise")}
                    >
                      <option>Lập trình</option>
                      <option>Thiết kế</option>
                      <option>Cloud / AWS</option>
                      <option>AI / ChatGPT</option>
                      <option>Marketing</option>
                      <option>Kinh doanh</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </label>

                <label className="teachLabel">
                  Số năm kinh nghiệm
                  <div className="teachField">
                    <input
                      className="teachInput"
                      value={form.expYears}
                      onChange={setField("expYears")}
                      placeholder="VD: 3"
                    />
                  </div>
                </label>
              </div>

              <label className="teachLabel">
                Portfolio / LinkedIn / Website
                <div className="teachField">
                  <input
                    className="teachInput"
                    value={form.portfolio}
                    onChange={setField("portfolio")}
                    placeholder="Dán link hồ sơ của bạn"
                  />
                </div>
              </label>

              <label className="teachLabel">
                Giới thiệu ngắn
                <div className="teachField teachFieldTextarea">
                  <textarea
                    className="teachTextarea"
                    value={form.message}
                    onChange={setField("message")}
                    placeholder="Bạn muốn dạy chủ đề gì? Hình thức dạy? Thời gian rảnh?"
                    rows={6}
                    required
                  />
                </div>
              </label>

              <label className="teachAgree">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={setField("agree")}
                />
                <span>
                  Tôi đồng ý để Nex.edu liên hệ và lưu thông tin cho mục đích tuyển giảng viên.
                </span>
              </label>

              <button type="submit" className="teachBtn">
                Gửi đăng ký
              </button>

              <div className="teachNote">
                Lưu ý: Đây là form demo (chưa kết nối backend).
              </div>
            </form>

            <aside className="teachSide">
              <div className="teachSideCard">
                <div className="teachSideTitle">Quy trình tuyển chọn</div>
                <ol className="teachSteps">
                  <li>Nhận hồ sơ & sàng lọc</li>
                  <li>Trao đổi nhanh qua email/điện thoại</li>
                  <li>Phỏng vấn/đánh giá nội dung mẫu</li>
                  <li>Ký hợp tác & onboarding</li>
                </ol>

                <div className="teachDivider" />

                <div className="teachSideTitle">Hỗ trợ</div>
                <div className="teachSideRow">
                  <span className="teachKey">Email</span>
                  <span className="teachVal">teaching@nex.edu</span>
                </div>
                <div className="teachSideRow">
                  <span className="teachKey">Hotline</span>
                  <span className="teachVal">+843-496-7759</span>
                </div>
              </div>

              <div className="teachSideGlow" />
            </aside>
          </div>
        </section>

        <footer className="teachFooter">
          © {new Date().getFullYear()} Nex.edu — Teaching recruitment
        </footer>
      </main>
    </div>
  );
}