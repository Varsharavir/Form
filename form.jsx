import React, { useState } from "react";
import './form.css';

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState("");
  const [link, setLink] = useState("");
  const [git, setGit] = useState("");
  const [about, setAbout] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSkills([]);
    setResume("");
    setLink("");
    setGit("");
    setAbout("");
  };

  // Validate contact number (must be 10 digits)
  const validateContact = (contact) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(contact);
  };

  // Validate email (simple email validation)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (firstName === "") {
      alert("Please enter your first name.");
      return;
    }

    if (lastName === "") {
      alert("Please enter your last name.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validateContact(contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    if (gender === "") {
      alert("Please select your gender.");
      return;
    }

    if (skills.length === 0) {
      alert("Please select at least one skill.");
      return;
    }

    if (resume === "") {
      alert("Please upload your resume.");
      return;
    }

    if (link === "") {
      alert("Please enter your LinkedIn URL.");
      return;
    }

    if (git === "") {
      alert("Please enter your GitHub URL.");
      return;
    }

    if (about === "") {
      alert("Please provide information about yourself.");
      return;
    }

    alert(`Form submitted successfully! ${firstName}`);
  };

  // Handle skill selection
  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <>
      <h1>Form</h1>
      <form>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contact</label>
        <input
          type="tel"
          placeholder="Enter your Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Skills</label>
        <input
          type="checkbox"
          value="HTML"
          onChange={handleSkillChange}
        />HTML
        <input
          type="checkbox"
          value="CSS"
          onChange={handleSkillChange}
        />CSS
        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleSkillChange}
        />JavaScript
        <input
          type="checkbox"
          value="Bootstrap"
          onChange={handleSkillChange}
        />Bootstrap
        <input
          type="checkbox"
          value="ReactJS"
          onChange={handleSkillChange}
        />ReactJS
        <input
          type="checkbox"
          value="Java"
          onChange={handleSkillChange}
        />Java
        <input
          type="checkbox"
          value="Python"
          onChange={handleSkillChange}
        />Python
        <input
          type="checkbox"
          value="SQL"
          onChange={handleSkillChange}
        />SQL

        <label>Upload Resume</label>
        <input
          type="file"
          onChange={(e) => setResume(e.target.value)}
          required
        />

        <label>LinkedIn URL</label>
        <input
          type="url"
          placeholder="Enter your LinkedIn URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <label>GitHub URL</label>
        <input
          type="url"
          placeholder="Enter your GitHub URL"
          value={git}
          onChange={(e) => setGit(e.target.value)}
          required
        />

        <label>About</label>
        <textarea
          placeholder="About Yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />

        <button type="reset" onClick={handleReset}>Reset</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
