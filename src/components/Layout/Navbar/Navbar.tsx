// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
  height: 100vh; // 전체 뷰포트 높이
  width: 250px; // 너비 설정
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/posts">Posts</StyledLink>
    </Nav>
  );
};

export default Navbar;
