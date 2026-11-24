
import React from "react";
import "./App.css";

function App() {
  const student = {
    name: "Alan George",
    age: "20",
    year: "3rd Year",
    academicYear: "2024 - 2028",
    registerNo: "311824103027",
  };

  return (
    <div className="page">

      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <main className="card-wrapper">

        <div className="id-card">

          {/* University Header */}
          <header className="card-header">

            <div className="college-emblem">
              <div className="emblem-circle">
                <span>✦</span>
                <strong>MU</strong>
                <small>UNIVERSITY</small>
              </div>
            </div>

            <div className="college-info">
              <h1>MARVEL UNIVERSITY</h1>
              <p>LEARN <span>•</span> INNOVATE <span>•</span> EXCEL</p>
              <div className="header-line"></div>
            </div>

            <div className="header-star">✦</div>

          </header>

          {/* Card Heading */}
          <div className="card-heading">
            <span></span>
            <h2>STUDENT IDENTITY CARD</h2>
            <span></span>
          </div>

          {/* Student Information */}
          <section className="card-body">

            <div className="photo-column">

              <div className="photo-frame">
                <img
                  src="/student-photo.jpg"
                  alt="Alan George"
                  className="student-photo"
                />
              </div>

              <div className="photo-label">
                STUDENT
              </div>

            </div>

            <div className="details-column">

              <div className="student-name">
                {student.name}
              </div>

              <div className="name-underline"></div>

              <div className="detail-item">
                <span className="detail-label">AGE</span>
                <span className="detail-colon">:</span>
                <span className="detail-value">{student.age} Years</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">YEAR</span>
                <span className="detail-colon">:</span>
                <span className="detail-value">{student.year}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">ACADEMIC YEAR</span>
                <span className="detail-colon">:</span>
                <span className="detail-value">{student.academicYear}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">REGISTER NO</span>
                <span className="detail-colon">:</span>
                <span className="detail-value">
                  {student.registerNo}
                </span>
              </div>

            </div>

          </section>

          {/* Footer */}
          <footer className="card-footer">

            <div className="barcode-section">

              <div className="barcode">
                {Array.from({ length: 55 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      width: i % 4 === 0 ? "4px" :
                             i % 3 === 0 ? "3px" : "2px"
                    }}
                  />
                ))}
              </div>

              <small>{student.registerNo}</small>

            </div>

            <div className="signature-section">
              <div className="signature">A. George</div>
              <div className="signature-line"></div>
              <strong>PRINCIPAL</strong>
            </div>

          </footer>

          {/* University Address */}
          <div className="university-address">
            MARVEL UNIVERSITY | 123 Knowledge Avenue,
            Chennai, Tamil Nadu - 600001
          </div>

          <div className="gold-accent"></div>

          <div className="card-watermark">MU</div>

        </div>

      </main>

    </div>
  );
}

export default App;
