import loading from "../assets/loading.svg";

export default function Results({ results, isLoading, hasSearched }) {
  const sections = new Set();
  results.forEach((article) => sections.add(article.sectionName));
  const sectionsArr = [...sections];
  console.log(results);

  const articles = sectionsArr.map((section) => {
    return (
      <div key={section} className="section-category">
        <h3>{section}</h3>
        {results.map((items) => {
          const dateFormated = new Date(
            items.webPublicationDate
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          if (items.sectionName === section) {
            return (
              <div className="section-content">
                <a href={items.webUrl} key={items.id}>
                  {items.webTitle}
                </a>
                <div>
                  <span className="date">({dateFormated})</span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  });

  return (
    <section className="results-container">
      {isLoading ? (
        <div className="img-div">
          <img src={loading} alt="Loading Bar" />
        </div>
      ) : (
        <>
          {hasSearched && <h2>Results</h2>}
          {articles}
        </>
      )}
    </section>
  );
}
