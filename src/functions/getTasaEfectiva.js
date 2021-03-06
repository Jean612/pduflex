const getTasaEfectiva = (tasa) => {
  const tasaPorcentaje = tasa / 100;
  return Math.pow(1 + tasaPorcentaje, 1 / 360) - 1;
};

export default getTasaEfectiva;
