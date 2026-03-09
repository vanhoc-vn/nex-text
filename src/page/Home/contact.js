import React, { useState } from "react";
import "./contact.css";

export default function Contact({ onGoHome }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, message });
    alert("Đã gửi liên hệ (demo). Cảm ơn bạn!");
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contactPage">
      <div className="contactBg" />

      <header className="contactHeader">
        <div className="contactHeaderInner">
          <button type="button" className="contactBackBtn" onClick={onGoHome}>
            ← Về trang chủ
          </button>

          <div className="contactBrand">
            <div className="contactBrandMark">N</div>
            <div className="contactBrandText">Nex.edu</div>
          </div>
        </div>
      </header>

      <main className="contactMain">
        <section className="contactCard contactFadeIn">
          <div className="contactTitleWrap">
            <h1 className="contactTitle">Liên hệ với chúng tôi</h1>
            <p className="contactSub">
              Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất có thể.
            </p>
          </div>

          <div className="contactGrid">
            <form className="contactForm" onSubmit={onSubmit}>
              <label className="contactLabel">
                Họ và tên
                <div className="contactField">
                  <input
                    className="contactInput"
                    type="text"
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    autoComplete="name"
                    required
                  />
                </div>
              </label>

              <label className="contactLabel">
                Email
                <div className="contactField">
                  <input
                    className="contactInput"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>
              </label>

              <label className="contactLabel">
                Nội dung
                <div className="contactField contactFieldTextarea">
                  <textarea
                    className="contactTextarea"
                    placeholder="Bạn cần hỗ trợ vấn đề gì?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                  />
                </div>
              </label>

              <button type="submit" className="contactBtn">
                Gửi liên hệ
              </button>

              <div className="contactNote">
                Bằng việc gửi, bạn đồng ý để chúng tôi liên hệ qua email.
              </div>
            </form>

            <aside className="contactInfo">
              <div className="contactInfoCard">
                <div className="contactInfoTitle">Thông tin liên hệ</div>

                <div className="contactInfoRow">
                  <div className="contactInfoKey">Địa chỉ</div>
                  <div className="contactInfoVal">
                    470 Trần Đại Nghĩa, phường Hòa Quý, Thành phố Đà Nẵng.
                  </div>
                </div>

                <div className="contactInfoRow">
                  <div className="contactInfoKey">Điện thoại</div>
                  <div className="contactInfoVal">+8482342784</div>
                </div>

                <div className="contactInfoRow">
                  <div className="contactInfoKey">Email</div>
                  <div className="contactInfoVal">hello@nex.edu</div>
                </div>

                <div className="contactDivider" />

                <div className="contactInfoTitle">Giờ làm việc</div>
                <div className="contactInfoRow">
                  <div className="contactInfoKey">Thứ 2 - Thứ 6</div>
                  <div className="contactInfoVal">08:30 - 17:30</div>
                </div>

                <div className="contactInfoRow">
                  <div className="contactInfoKey">T7 - Chủ nhật</div>
                  <div className="contactInfoVal">Nghỉ</div>
                </div>
              </div>

              <div className="contactGlow" />
            </aside>
          </div>
        </section>

        <footer className="contactFooter">
          © {new Date().getFullYear()} Nex.edu — All rights reserved.
        </footer>
      </main>
    </div>
  );
}