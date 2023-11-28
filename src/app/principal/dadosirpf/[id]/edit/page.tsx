import EditarContribuinte from "../../editar/EditarContribuinte";

const getContribuinteById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/contribuintes/${id}`);

    const resultado = await res.json();

    // Desestruturar novamente para retornar o objeto
    const { contribuintes } = resultado;

    if (false) {
      console.log("Conteúdo do objeto: ==================================");

      console.log(typeof contribuintes);
      console.log(contribuintes);
      console.log("> Verificar o nome:" + contribuintes.nome);

      console.log("======================================================");
    }

    return contribuintes;
  } catch (error) {
    console.log(error);
    throw new Error("Contribuinte não localizado");
  }
};

export default async function EditarContribuinteExistente({ params }) {
  const { id } = params;

  const contribuinte = await getContribuinteById(id);

  if (true) {
    console.log("PÁGINA DE INÍCIO DA ROTA ");
    console.log("Resultado: ------------------------------------------- ");
    console.log("ID obtido: " + id);
    console.log(contribuinte);
    console.log("> Verificar o nome: " + contribuinte.nome);
    console.log("------------------------------------------------------ ");
  }

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

  /*
  <div>
    {id},{nome},{cpf},{data_de_nascimento},{celular},{email},{endereco},
    {endereco_num},{endereco_cep},{endereco_bairro},{endereco_cidade},
    {endereco_estado},{endereco_pais},{titulo_de_eleitor},
    {alteracao_de_endereco}
  </div>
  
  */

  // Convertendo
  const id_str = id != null ? id.toString() : "";
  const nome_str = nome != null ? nome.toString() : "";
  const cpf_str = cpf != null ? cpf.toString() : "";
  const data_de_nascimento_str =
    data_de_nascimento != null ? data_de_nascimento.toString() : "";
  const celular_str =
    celular != null ? (celular != null ? celular.toString() != null : "") : "";
  const email_str = email != null ? email.toString() : "";
  const endereco_str = endereco != null ? endereco.toString() != null : "";
  const endereco_num_str = endereco_num != null ? endereco_num.toString() : "";
  const endereco_cep_str = endereco_cep != null ? endereco_cep.toString() : "";
  const endereco_bairro_str =
    endereco_bairro != null ? endereco_bairro.toString() : "";
  const endereco_cidade_str =
    endereco_cidade != null ? endereco_cidade.toString() : "";
  const endereco_estado_str =
    endereco_estado != null ? endereco_estado.toString() : "";
  const endereco_pais_str =
    endereco_pais != null ? endereco_pais.toString() : "";
  const titulo_de_eleitor_str =
    titulo_de_eleitor != null ? titulo_de_eleitor.toString() : "";
  const alteracao_de_endereco_str =
    alteracao_de_endereco != null ? alteracao_de_endereco.toString() : "";

  return (
    <>
      <EditarContribuinte
        id={id_str}
        nome={nome_str}
        cpf={cpf_str}
        data_de_nascimento={data_de_nascimento_str}
        celular={celular_str}
        email={email_str}
        endereco={endereco_str}
        endereco_num={endereco_num_str}
        endereco_cep={endereco_cep_str}
        endereco_bairro={endereco_bairro_str}
        endereco_cidade={endereco_cidade_str}
        endereco_estado={endereco_estado_str}
        endereco_pais={endereco_pais_str}
        titulo_de_eleitor={titulo_de_eleitor_str}
        alteracao_de_endereco={alteracao_de_endereco_str}
      />
    </>
  );
}
