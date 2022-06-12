import React from "react";
import styled from "styled-components";
import SKcard from "../components/SKcard";
import java from "../assets/Languages/java.png";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const SkillSection = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title text1="Skills " text2="& Experience" />
      <h1 onClick={() => navigate("/add-new-language-or-tool")}>
        Add New skill
      </h1>
      <Container>
        <SubSection>
          <Name>Languages</Name>
          <Cards>
            <SKcard
              imgLink={require("../assets/Languages/python.png")}
              name="Python"
            />
            <SKcard
              imgLink={require("../assets/Languages/java.png")}
              name="Java"
            />

            <SKcard
              imgLink={require("../assets/Languages/Cslash.png")}
              name="C#"
            />
            <SKcard
              imgLink={require("../assets/Languages/c++.png")}
              name="C++"
            />
            <SKcard
              imgLink={require("../assets/Languages/javascript.png")}
              name="C++"
            />
          </Cards>
        </SubSection>
        <SubSection>
          <Name>Database Management Systems</Name>
          <Cards>
            <SKcard
              imgLink={require("../assets/dbms/mysql.png")}
              name="MySQL"
            />
            <SKcard
              imgLink={require("../assets/dbms/mongodb.png")}
              name="MongoDB"
            />
            <SKcard
              imgLink={require("../assets/dbms/postgresql.png")}
              name="PostgreSQL"
            />
          </Cards>
        </SubSection>
        <SubSection>
          <Name>FrameWorks & Libraries & Technologies</Name>
          <Cards>
            <SKcard imgLink={require("../assets/LFT/html.png")} name="HTML" />
            <SKcard imgLink={require("../assets/LFT/css.png")} name="CSS" />
            <SKcard imgLink={require("../assets/LFT/react.png")} name="React" />

            <SKcard
              imgLink={require("../assets/LFT/express.png")}
              name="Express"
            />
            <SKcard imgLink={require("../assets/LFT/node.png")} name="Node" />
            <SKcard imgLink={require("../assets/LFT/css.png")} name="CSS" />
          </Cards>
        </SubSection>
        <SubSection>
          <Name>Other tools</Name>
          <Cards>
            <SKcard
              imgLink={require("../assets/tools/figma.png")}
              name="Figma"
            />
            <SKcard imgLink={require("../assets/tools/git.png")} name="Git" />
            <SKcard
              imgLink={require("../assets/tools/wordpress.png")}
              name="Wordpress"
            />
          </Cards>
        </SubSection>
      </Container>
    </Wrapper>
  );
};

export default SkillSection;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
`;
const Container = styled.div`
  width: 85%;
  padding-bottom: 50px;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const SubSection = styled.div`
  width: 100%;
`;
const Name = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin: 30px 0;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
  gap: 40px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;
