function obtenerDivisores(minimo, maximo, divisor) {
    const divisores = [];
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) divisores.push(i);
    }
    return divisores;
  }
