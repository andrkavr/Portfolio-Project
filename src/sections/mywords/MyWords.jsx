import "./mywords.css";
import squiggly from "../../assets/squiggly.svg";
import { ArticleCard } from "../../components/articlecard/ArticleCard";
import { ArticleAssets } from "../../assets/ArticleAssets";

export const MyWords = () => {
  const articles = ArticleAssets.articles;
  return (
    <div className="my-words-frame">
      <img src={squiggly} alt="squiggly-line" className="squiggly" />
      <div className="my-words-container">
        <h2 className="my-words-title">My words</h2>
        <div className="my-words">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              articleTitle={article.name}
              articleIntro={article.description}
              articleImage={article.image}
              articleLink={article.link}
              monthPublished={article.monthPublished}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
