import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";
import Card from "../../components/card/card";
import cardStyle from "../../components/card/style.css";

const About = () => {

  return (
    <div class={style.profile}>
      <Card title="Who am I?" className={cardStyle.card}>
        {" "}
        <div className={cardStyle["card-body"]}>
          <p className={style.text}>
            Optimistic. Tireless. Lifelong learner. I am a full-stack developer
            and I love the satisfaction I get by overcoming challenges. I am
            motivated by the opportunity that software provides to positively
            impact the life of an individual, and the world as a whole.
          </p>
          <p className={style.text}>
            {" "}
            Skills & Technologies: NodeJS | TypeScript | JavaScript | Git | AWS
            | Bitbucket | RESTful APIs | JSON parsing | Postman | Angular |
            React | NextJS | Serverless | Debugging | Git | Github | Jira | Object-oriented programming
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;
