import style from "./NavItem.module.scss";

type NavItemProps = {
  title: string;
  icon?: React.ReactNode;
};

export default function NavItem(props: NavItemProps) {
  return (
    <li className={style.navItem}>
      {props.icon}
      <p className={style.navItemText}>{props.title}</p>
    </li>
  );
}
