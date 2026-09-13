import { CardSkill } from "../../widgets/CardSkill/CardSkill";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import { motion } from "framer-motion";
import "./Skills.scss";
import { useEffect, useState } from "react";

interface ISkillItem {
  id: string | number;
  urlIcon: string;
  nameCard: string;
  valueWidth: number;
}

export const Skills = () => {
  const [skillsData, setSkillsData] = useState<ISkillItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://2970b491b97aa94b.mokky.dev/Skills");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setSkillsData(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-skills" id="skills">
      <div className="container">
        <div className="app-skills-wrapper section-wrapper">
          <TopBlock textContent="Мои навыки" />
          <TitleSection textContent="Технический стек" />

          <div className="app-skills-list">
            {skillsData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <CardSkill
                  urlIcon={`../../assets/skills-section/${item.urlIcon}`}
                  nameCard={item.nameCard}
                  valueWidth={item.valueWidth}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
