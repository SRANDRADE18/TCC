const fetchProducts = async (query, quantity) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=${quantity}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

export default fetchProducts;