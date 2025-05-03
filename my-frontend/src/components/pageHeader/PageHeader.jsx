/* PageHeader.jsx */
import "./PageHeader.css";

const PageHeader = ({ title, pageImage }) => (
  <header
    className="page-header"
    style={{ backgroundImage: `url(${pageImage})` }}
  >
    <div className="page-header__overlay" />
    <h1 className="page-header__title">{title}</h1>
  </header>
);

export default PageHeader;
