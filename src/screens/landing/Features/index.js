// import { NavBar } from "../../../components/NavBar";
// import { Button } from "react-bootstrap";
import "./style.css";

export const Features = () => {
  return (
    <div className="landing__features app__section">
      <div className="features__title">Tính năng</div>
      <div className="features__content">
        <div className="features__card">
          <div className="card-image"></div>
          <div className="card-content">
            <div className="card-title"> Hệ thống kiến thức toàn diện</div>
            <div className="card-description">
              Với danh sách các bài học phong phú, Dekiru cung cấp cho bạn một
              hệ thống kiến thức tiếng Nhật đầy đủ và toàn diện nhất: từ vựng,
              nghe hiểu, kanji hay các bài kiểm tra tiếng Nhật.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
