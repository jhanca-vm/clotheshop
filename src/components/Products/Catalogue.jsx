import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Section = styled.section`
  display: grid;
  padding: 4.8rem 0;
  row-gap: 4rem;

  @media (min-width: 640px) {
    column-gap: 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    column-gap: 36px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Ancle = styled(Link)`
  background-color: white;
  box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.1),
    0 4px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  padding: 2.4rem 20px;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }
`

const Image = styled.figure`
  display: flex;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 3.2rem 0 1.6rem;
`

const Price = styled.b`
  font-size: 1.8rem;
  margin: auto 0 0.2rem;
`

const Category = styled.p`
  color: #9f99a1;
  font-size: 1.5rem;
`

const Card = () => {
  const products = useSelector(({ products }) => products)

  return (
    <Section>
      {products.map(({ id, title, price, category, image }) => (
        <Ancle key={id} to={`/product/${id}`}>
          <Image>
            <img height="250" src={image} alt={title} />
          </Image>
          <Title>{title}</Title>
          <Price>${price}</Price>
          <Category>{category}</Category>
        </Ancle>
      ))}
    </Section>
  )
}

export default Card
