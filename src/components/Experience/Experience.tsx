import { ExperienceItem } from "@widgets/ExperienceItem/ExperienceItem";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import "./Experience.scss";
import { useEffect, useState } from "react";

interface IExperienceItem {
  id: number | string;
  title: string;
  subtitle: string;
  descr: string;
}

export const Experience = () => {
  const [data, setData] = useState<IExperienceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://2970b491b97aa94b.mokky.dev/Experience");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        // Убедимся, что это массив
        if (!Array.isArray(result)) {
          throw new Error("Invalid data format");
        }

        setData(result);
      } catch (err) {
        console.error("Error fetching:", err);
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="app-experience">Загрузка...</div>;
  }

  if (error) {
    return <div className="app-experience">Ошибка: {error}</div>;
  }

  return (
    <div className="app-experience">
      <div className="container">
        <div className="app-experience-wrapper section-wrapper">
          <TopBlock textContent="Мой профессиональный путь" />
          <TitleSection textContent="Опыт и образование" />
        </div>

        <ul className="app-experience-list">
          {data.length === 0 ? (
            <li>Нет данных об опыте</li>
          ) : (
            data.map((item) => (
              <ExperienceItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                descr={item.descr}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
