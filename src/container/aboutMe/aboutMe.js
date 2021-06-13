import React from "react";
import img from "../../assets/Dylan.jpeg";
import { AboutMe } from "../../components";
import { DownloadCVButton } from "../../components/buttons";
import cv from "../../assets/cv/Dylan_cv.pdf";
import letter from "../../assets/cv/NGOMPE Lele Dylan_letter.pdf";

export default function AboutMeContainer() {
  return (
    <AboutMe>
      <AboutMe.Container>
        <AboutMe.Column>
          <AboutMe.Image src={img} />
        </AboutMe.Column>
        <AboutMe.Column>
          <AboutMe.Heading2>About Me</AboutMe.Heading2>
          <AboutMe.Heading4>
            My name is Mettalurgical engineering.
            <AboutMe.Text>
              I was born in the year 1997 on the 14th of June.
            </AboutMe.Text>
            <AboutMe.Text>
              Just like her I aspired to change the world the best way I can. As
              a skilled person, I found my passion for metals at a young age.
            </AboutMe.Text>
            <AboutMe.Text>
              Since that day I had given myself the responsibility to expand my
              knowledge and gain enough power to own a chemical plant where I
              can train and employ many jobless people and set a name for myself
              and my family.
            </AboutMe.Text>
          </AboutMe.Heading4>
          <AboutMe.Text>
            I am doing Mettalurgical Engineering which is the course i desire
            the most because I am passionate about my work and Because I love
            what I do.
          </AboutMe.Text>
        </AboutMe.Column>
      </AboutMe.Container>
      <AboutMe.Buttons>
        <DownloadCVButton href={cv} target="_blank">
          CV
        </DownloadCVButton>
        <DownloadCVButton href={letter} target="_blank">
          Cover Letter
        </DownloadCVButton>
      </AboutMe.Buttons>
    </AboutMe>
  );
}
