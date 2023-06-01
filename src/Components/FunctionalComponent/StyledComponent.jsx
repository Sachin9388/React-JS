import React from 'react';
import styled from 'styled-components';
import abstract from '../../Image/abstract-1278077_1280.webp'
import analytics from '../../Image/analytics-3088958_1280.webp'
import digital from '../../Image/digital-1742687_1280.webp'
import FEimg from '../../Image/FE img.jpg'
import img5 from '../../Image/img5.jpg'
import img6 from '../../Image/img6.jpg'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  margin:10px 5px;
  padding:5px 20px;
  color: black;
  text-decoration: none;
  // box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.25);
  &:hover {
    color: antiquewhite;
    background-color: black;
    padding: 5px 15px;
    border-radius: 20px 20px 0 20px ;
  }
`;

const HeroSection = styled.section`
  background-color: #f2f2f2;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
   background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #08a0ecba;
    color: #000000;
    border-radius: 10px;
  }
`;

const ProductSection = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;



function StyledComponent(){
    return(
      <Container>
      <Header>
        <Logo>Shopping Site</Logo>
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Products</NavItem>
          <NavItem href="#">Cart</NavItem>
          <NavItem href="#">Contact Us</NavItem>
        </Nav>
      </Header>
  
      <HeroSection>
        <div>
          <HeroTitle>Welcome to our Shopping Site</HeroTitle>
        </div>
      </HeroSection>
  
      <ProductSection>
        <ProductCard>
          <ProductImage src={abstract} alt="Product 1" />
          <ProductTitle>Product 1</ProductTitle>
          <ProductPrice>$19.99</ProductPrice>
          <HeroButton>Shop Now</HeroButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={analytics} alt="Product 2" />
          <ProductTitle>Product 2</ProductTitle>
          <ProductPrice>$24.99</ProductPrice>
          <HeroButton>Shop Now</HeroButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={digital} alt="Product 3" />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$28.99</ProductPrice>
          <HeroButton>Shop Now</HeroButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={FEimg} alt="Product 3" />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$32.99</ProductPrice>
          <HeroButton>Shop Now</HeroButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={img5} alt="Product 3" />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$38.99</ProductPrice>
          <HeroButton>Shop Now</HeroButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={img6} alt="Product 3" />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$45.99</ProductPrice>
          <HeroButton>Shop Now</HeroButton>
        </ProductCard>
      </ProductSection>
    </Container>
    )
}

export default StyledComponent;