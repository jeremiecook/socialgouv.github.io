import Link from "next/link";

const AuthorPanel = ({
  name = "Corgi",
  role = "Intrapreneur",
  Icon,
  href = "#",
  target = "_blank",
  description
}) => (
  <div className="article__author panel">
    <div className="article__author-info">
      <Link href={href}>
        <a className="article__author-name" target={target}>
          {name}
        </a>
      </Link>
      <div className="article__author-role">{role}</div>
    </div>
    {(Icon && (
      <Link href={href}>
        <a target={target}>
          <Icon />
        </a>
      </Link>
    )) ||
      null}
    <p
      className="article__author-description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

export default AuthorPanel;
