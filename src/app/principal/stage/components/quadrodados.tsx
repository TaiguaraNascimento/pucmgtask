import styles from "./components.module.css";

const getContribuinteById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/contribuintes/${id}`);

    const resultado = await res.json();

    // Desestruturar novamente para retornar o objeto
    const { contribuintes } = resultado;

    return contribuintes;
  } catch (error) {
    console.log(error);
    throw new Error("Contribuinte não localizado");
  }
};

export default async function QuadroContribuinte(props) {
  const id = props.id;
  const contribuinte = await getContribuinteById(id);

  const {
    nome,
    cpf,
    data_de_nascimento,
    celular,
    email,
    endereco,
    endereco_num,
    endereco_cep,
    endereco_bairro,
    endereco_cidade,
    endereco_estado,
    endereco_pais,
    titulo_de_eleitor,
    alteracao_de_endereco,
  } = contribuinte;

  return (
    <>
      <div>
        {id},{nome},{cpf},{data_de_nascimento},{celular},{email},{endereco},
        {endereco_num},{endereco_cep},{endereco_bairro},{endereco_cidade},
        {endereco_estado},{endereco_pais},{titulo_de_eleitor},
        {alteracao_de_endereco}
      </div>
    </>
  );
}
