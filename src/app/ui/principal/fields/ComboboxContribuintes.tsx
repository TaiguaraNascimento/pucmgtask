import { useEffect, useState } from "react";
import { fetchContribuintes } from "@/app/infra/http/contribuintes";

export default function ComboboxContribuintes({
  initialContribuintes,
  ...props
}) {
  const [contribuintes, setContribuintes] = useState(initialContribuintes);

  return (
    <>
      <select
        className={props.classname}
        onChange={props.onChange}
        value={props.variavel}
      >
        {contribuintes.map((contribuinte) => (
          <option key={contribuinte.id} value={contribuinte.nome}>
            {contribuinte.nome}
          </option>
        ))}
      </select>
    </>
  );
}

export async function getServerSideProps() {
  const contribuintes = await fetchContribuintes(); // Substitua isso pela sua função real de busca de contribuintes

  return {
    props: {
      initialContribuintes: contribuintes,
    },
  };
}
