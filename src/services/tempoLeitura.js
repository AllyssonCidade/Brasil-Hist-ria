export function tempoLeitura(palavras) {
  const palavrasLength = palavras?.length;
  const tempoLeitura = Math.ceil(palavrasLength / 200);
  if (!palavrasLength) {
    return;
  } else {
    return tempoLeitura;
  }
}
