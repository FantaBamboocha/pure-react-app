import Card from "./Card";

const MainContent = () => {
  return (
    <section class="content">
      <div class="content-header">
        <h2>Все кроссвоки</h2>
        <div class="search-block">
          <img
            width="14px"
            height="45px"
            src="images/search.svg"
            alt="search"
          />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div class="card-area">
        <Card />
      </div>
    </section>
  );
};

export default MainContent;
