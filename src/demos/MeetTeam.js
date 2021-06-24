import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Fragment, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import background from "../images/teambg.jpg";
import "./index.css";
import {
  SectionHeading as HeadingTitle,
  Subheading,
} from "components/misc/Headings.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;

function MeetTeam(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heading = (
    <>
      Meet <span tw="text-primary-500">Us</span>
    </>
  );
  const teachers = [
    {
      name: "DR V SARASWATHY",
      title: "Mentor & Guru",
      description:
        "A VETERAN TEACHER AND TEACHER EDUCATOR, ‘SARAS’ AS SHE’S AFFECTIONATELY CALLED BY HER FRIENDS AND STUDENTS, IS APTLY NAMED AFTER THE HINDU GODDESS OF KNOWLEDGE. ONE OF THE PIONEERS OF ELT [ENGLISH LANGUAGE TEACHING] IN INDIA, SARAS IS A VERITABLE TREASURE HOUSE OF KNOWLEDGE FOR TEACHERS.",
      image: t1,
    },
    {
      name: "SUDHA RAVI",
      title: "TEACHER EDUCATOR & WRITER",
      description:
        "With a strong grounding in educational theory and extensive classroom experience, Sudha wears the hats of both teacher trainer and content developer with equal ease. Extremely passionate about teacher empowerment, she has taught students from K-12. ",
      image: t2,
    },
    {
      name: "VIJAYALAKSHMI SUNDARARAJAN",
      title: "PRINCIPAL CVV, TEACHER TRAINER",
      description:
        "A VETERAN TEACHER AND TEACHER EDUCATOR, ‘SARAS’ AS SHE’S AFFECTIONATELY CALLED BY HER FRIENDS AND STUDENTS, IS APTLY NAMED AFTER THE HINDU GODDESS OF KNOWLEDGE. ONE OF THE PIONEERS OF ELT [ENGLISH LANGUAGE TEACHING] IN INDIA, SARAS IS A VERITABLE TREASURE HOUSE OF KNOWLEDGE FOR TEACHERS.",
      image: background,
    },
    {
      name: "SEETHALAKSHMI VISHWANATH",
      title: "PRINCIPAL AMRITA VIDYASHRAM",
      description:
        "A VETERAN TEACHER AND TEACHER EDUCATOR, ‘SARAS’ AS SHE’S AFFECTIONATELY CALLED BY HER FRIENDS AND STUDENTS, IS APTLY NAMED AFTER THE HINDU GODDESS OF KNOWLEDGE. ONE OF THE PIONEERS OF ELT [ENGLISH LANGUAGE TEACHING] IN INDIA, SARAS IS A VERITABLE TREASURE HOUSE OF KNOWLEDGE FOR TEACHERS.",
      image: background,
    },
  ];
  return (
    <Fragment>
      <div
        id="main_container"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <AnimationRevealPage>
        <HeadingTitle> {heading} </HeadingTitle>
        <ThreeColumn>
          {teachers.map((t, index) => {
            return (
              <Column key={index}>
                <Card>
                  <Image imageSrc={t.image} />
                  <Details>
                    <MetaContainer>
                      <Meta>
                        <UserIcon />
                        <div>{t.title}</div>
                      </Meta>
                      <Meta>
                        <TagIcon />
                        <div>Team</div>
                      </Meta>
                    </MetaContainer>
                    <Title>{t.name}</Title>
                    <Description>{t.description}</Description>
                  </Details>
                </Card>
              </Column>
            );
          })}
        </ThreeColumn>
      </AnimationRevealPage>
    </Fragment>
  );
}

export default MeetTeam;
