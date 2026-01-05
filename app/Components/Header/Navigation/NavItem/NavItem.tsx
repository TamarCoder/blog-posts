import style from "./NavItem.module.scss";

type NavItemProps = {
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function NavItem(props: NavItemProps) {
  const navItemClass = [
    style.navItem,
    props.className === "active" ? style.activeLink : "",
  ].join(" ")
    .trim();

  return (
    <li className={navItemClass}>
      {props.icon}
      <p className={style.navItemText}>{props.title}</p>
    </li>
  );
}
