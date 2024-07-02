import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.E.Computer Science and Engineering",
    desc: "C Abdul Hakeem College Of Engineering and Technology | 2020 ~ 2024",
  },
  {
    title: "X",
    desc: "Veda Nikethan Matric Hr Sec School | 2017 ~ 2018",
  },
  {
    title: "XII",
    desc: "Veda Nikethan Matric Hr Sec School | 2019 ~ 2020",
  },

];

export default Education;
