import NavLink from "./NavLink";

export default function Logo({ onClick }) {
  return (
    <NavLink href="/" onClick={onClick} px="0">
      Logo
    </NavLink>
  );
}
