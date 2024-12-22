export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api-brasil-hist-0903.onrender.com/api/articles"
    );
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    res.status(200).json({ message: "Ping enviado com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao enviar o ping", error: error.message });
  }
}
