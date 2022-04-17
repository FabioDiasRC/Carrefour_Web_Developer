const base_URL = "https://api.thecatapi.com/v1/images/search";
const catBtn = document.getElementById('change-cat')

const getCats = async () => {
  try {
    const data = await fetch(base_URL);
    const json = await data.json();
    return json.webpurl;

  } catch (error) {
    console.log(error.message)
  }
};

const loading = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await getCats();
}

catBtn.addEventListener('click', loading)
loading();