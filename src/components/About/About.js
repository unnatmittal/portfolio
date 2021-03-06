import React, { useState, useEffect } from "react";
import "./style.css";
import repo from "../../assets/repo.png";
import follower from "../../assets/follower.png";
import { Social } from "../Footer/Social";

export const About = () => {
  const api = "https://api.github.com/users/unnatmittal";

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <div className="about">
      {/* <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <path
            fill="#FF0066"
            d="M13.5,-18.5C25.2,-13.6,47.5,-22.7,53.1,-21.1C58.7,-19.5,47.5,-7.2,48.3,8.9C49,24.9,61.6,44.7,60.2,59.4C58.7,74.1,43.1,83.8,30.2,74.7C17.4,65.6,7.2,37.7,-3.3,27.3C-13.9,16.9,-24.9,24,-37.1,24.2C-49.4,24.4,-63,17.7,-62,10.2C-61,2.8,-45.5,-5.4,-38.2,-15.8C-30.9,-26.2,-31.9,-38.7,-26.9,-46.7C-21.9,-54.7,-11,-58.2,-5,-50.4C0.9,-42.6,1.9,-23.5,13.5,-18.5Z"
            transform="translate(100 100)"
          />
        </svg> */}

      <div className="git-box">
        <div className="av-box">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="ele">
          <h1>{name}</h1>
          <h2>{username}</h2>
          <div className="repo-box">
            <img src={repo} alt="repo" />
            <h3> Repositories {repos}</h3>
          </div>
          <div className="f-box">
            <img src={follower} alt="follower" />
            <h4>
              Followers {followers}. Following {following}
            </h4>
          </div>
        </div>
        <div className="s-box">
          <Social />
        </div>
      </div>
      <div className="me-box">
        <h1>ABOUT ME</h1>
        <p className="para">
          Hi! I am Unnat Mittal, a passionate programmer and a developer, lives
          in Delhi. I am currently pursuing Instrumentaion and Control
          Engineering from NSUT, Dwarka, New Delhi.
          <br />I am Full Stack Developer with React.js, Redux, Node.js, React
          Native, MongoDB, Firebase as my tech stack. I have worked with Team
          Vrikshandolan as Web Developer.
          <br />
          Also I am a Software Programmer with Database Management, Data
          Structures and Algorithms as my skills.
          <br />
          Working with the clients, my goal is always driven towards providing
          amazing experience with the best level of quality and service to them.
          I love exploring new technologies and solve the riddles which every
          programmer face while doing his job.
        </p>
      </div>
    </div>
  );
};
