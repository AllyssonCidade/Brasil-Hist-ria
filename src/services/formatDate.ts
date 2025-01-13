export const formatDate = (dateString: string) => {
  const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];
  const date = new Date(dateString);
  // Extrai o dia, mês e ano
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  // Retorna a data formatada
  return `${day < 10 ? "0" + day : day} ${month} / ${year}`;
};
