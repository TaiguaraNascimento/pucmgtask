import Link from "next/link";

export default function MenuItem(props) {
  const link_de_acesso = "/" + props.link;

  return (
    <>
      <div className="MenuItem">
        <Link href={link_de_acesso}>{props.item}</Link>
      </div>
    </>
  );
}
