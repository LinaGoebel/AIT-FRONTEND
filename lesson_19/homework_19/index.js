// Нужно создать кнопку "Get Joke", при клике на которую, будет выполняться GET запрос(используйте fetch). В ответе на запрос будет приходить случайная шутка
//url: https://official-joke-api.appspot.com/random_joke
// После того как вы получите успешный ответ, разместите шутку на странице
// Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
// Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новая шутка

const dataContainer = document.querySelector(".data-container");
const loadingId = document.querySelector("#load-ind");
const getDataButton = document.querySelector("#get-joke");

const getJoke = async () => {
  dataContainer.classList.remove("error");
  dataContainer.textContent = "";

  try {
    loadingId.classList.remove("hidden");

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const joke = await response.json();

    if (response.ok) {
      dataContainer.textContent = `${joke.setup}\n${joke.punchline}`;
      console.log("Joke displayed");
    } else {
      throw new Error("Error fetching joke");
    }
  } catch (error) {
    dataContainer.classList.add("error");
    dataContainer.textContent = `Error: ${error.message}`;
    console.error("Error fetching joke:", error);
  } finally {
    loadingId.classList.add("hidden");
  }
};

getDataButton.addEventListener("click", getJoke);
