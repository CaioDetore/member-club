import { apiConfig } from "./api-config";

export async function cardFetchById({ id }) {
  try {
    if (!id) {
      throw new Error("Informe o ID do cartão!", { cause: "custom" });
    }

    const response = await fetch(`${apiConfig.baseURL}/clients`);

    const data = await response.json();

    const customer = data.find((it) => it.id === id);

    if (!customer) {
      throw new Error(
        "Nenhum cliente encontrado com o ID informado. Verifique se digitou corretamente.",
        { cause: "custom" }
      );
    }

    return customer;
  } catch (err) {
    if (err.cause && err.cause === "custom") {
      alert(err.message);
    } else {
      console.log(err);
      alert(
        "Não foi possível carregar o cartão com o ID informado. Tente novamente mais tarde."
      );
    }
  }
}
