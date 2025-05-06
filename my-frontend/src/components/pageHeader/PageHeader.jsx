/* PageHeader.jsx */
import "./PageHeader.css";

const PageHeader = ({ title, pageImage }) => (
  <header
    className="page-header"
    style={{ backgroundImage: `url(${pageImage})` }}
  >
    <div className="page-header__overlay" />
    <div className="page-header__container">
    <h1 className="page-header__title">{title}</h1>
    </div>
  </header>
);

export default PageHeader;
