import React, { Fragment, useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "components/misc/Headings.js";
import articleimg1 from "../images/artcileimg1.JPG";
import article2img from "../images/article2img.JPG";
import article1img2 from "../images/article1img2.JPG";
import article2img2 from "../images/article2img2.JPG";
import queryString from "query-string";
import "./index.css";

const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

function BlogArticle(props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(props);
    const data = queryString.parse(props.location.search);
    setIndex(data.art_index);
  }, []);
  const articles = [
    {
      title: "HOW TO MOTIVATE STUDENTS THROUGH FEEDBACK.",
      title_img: article1img2,
      artcile: (
        <>
          {" "}
          <p>
            {" "}
            When students submit assignments or write tests, they eagerly look
            forward to feedback. A mere score like 5/10 means nothing; comments
            like “satisfactory” or “can do better” can: Add insult to injury as
            they sound highly impersonal.{" "}
          </p>{" "}
          <p>
            {" "}
            From my personal experience as a student I learnt the strategy of
            motivating students through feedback. My test paper on Shakespeare
            was returned with the following remark: “Saraswathi, your
            organization of ideas is excellent. You have planned it very well.
            Could you give some more examples to substantiate your ideas? That
            would enhance the merit of your essay.” When I read the remark, I
            was on cloud nine.{" "}
          </p>{" "}
          <p>
            {" "}
            Later as a teacher and research guide, I adopted the same strategy
            which paid its dividends. Even to this day, my students happily
            remember my “post-scripts”.{" "}
          </p>{" "}
        </>
      ),
      image: articleimg1,
    },
    {
      title: "RESPECT THE LEARNER.",
      title_img: article2img2,
      artcile: (
        <>
          {" "}
          <p>
            Teachers generally have a specific plan as they go to a class.
            However, it is not necessary to rigidly stick to the plan. Often
            good teachers change their plan according to learner response. Here
            is a story of a teacher whose rigid adherence to her plan ended in
            disaster. The teacher was planning to teach the two related
            structures “too…to” and “so…that”. She gave a few examples of how
            one structure can be changed to another.
          </p>{" "}
          <p> Example: </p>{" "}
          <p>
            {" "}
            Mina is too short to reach the blackboard. Mina is so short that she
            cannot reach the blackboard.{" "}
          </p>{" "}
          <p>
            After practicing a few examples, she started asking questions.{" "}
          </p>{" "}
          <p>
            {" "}
            Teacher: Ram, can you carry the table?\nRam: No, madam. This table
            is too heavy for me to carry.{" "}
          </p>{" "}
          <p> No, madam. This table is so heavy that I can’t carry it. </p>{" "}
          <p> Teacher: Rhea, would you like to eat this chili? </p>{" "}
          <p> Rhea: No, madam, it is very hot. I can’t eat it. </p>{" "}
          <p> Teacher: you are wrong. Mani, could you correct it? </p>{" "}
          <p>
            {" "}
            Mani: Yes, madam. It is too hot for me to eat. It is so hot that I
            can’t eat it.{" "}
          </p>{" "}
          <p> Teacher: Good, Mani. Now, Rhea, repeat what Mani said.</p>{" "}
          <p>
            {" "}
            The teacher makes an unpardonable mistake in rejecting Rhea’s
            response (in her enthusiasm for her own agenda). Though Rhea’s
            answer is communicatively perfect, Rhea is puzzled and shrinks into
            herself and will never again open her mouth.{" "}
          </p>{" "}
          <p> RESPECT THE LEARNER </p> <p> DON’T PREPARE FOR A CLASS </p>{" "}
          <p> Saraswathi’s wisdom wall: Be ready to change on your feet.</p>{" "}
          <p> Bonus point: Respect the learner. Don’t wear blinkers. </p>{" "}
        </>
      ),
      image: article2img,
    },
  ];
  const heading = (
    <>
      Blog: <span tw="text-primary-500">{articles[index].title}</span>
    </>
  );
  return (
    <Fragment>
      <HeadingTitle> {heading} </HeadingTitle>
      <div id="article_container">
      <img src={articles[index].title_img} alt="article_img"></img>
        <Description
          style={{ width: "70vw", fontSize: "2em", padding: "0.5em" }}
        >
          {articles[index].artcile}
        </Description>
        <img src={articles[index].image} alt="article_img"></img>
        <h1 style={{ color: "orangered", fontSize: "2em" }}>
          {" "}
          <b> END </b>{" "}
        </h1>
      </div>
    </Fragment>
  );
}

export default BlogArticle;
