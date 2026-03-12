const search = async () => {
  const response = await fetch("/api/searchproducts?q=vectan");
  const data = await response.json();
  console.log(data);
}