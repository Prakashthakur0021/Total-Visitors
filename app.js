const countEl = document.querySelector("#visits");

const fetchingData = async () => {
  const url = await fetch(
    "https://api.countapi.xyz/update/prakash-thakur/kamlesh?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
};

fetchingData();
