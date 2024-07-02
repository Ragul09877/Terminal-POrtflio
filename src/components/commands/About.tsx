import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ragul B</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer,Designer</HighlightAlt> 
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications and web design
      </p>
    </AboutWrapper>
  );
};

export default About;
