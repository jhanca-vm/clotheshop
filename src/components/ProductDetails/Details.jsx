import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const BaseStyle = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.1),
    0 4px 4px -1px rgba(0, 0, 0, 0.06);
`

const Section = styled.section`
  display: grid;
  padding: 4rem 0;
  row-gap: 0.8rem;

  @media (min-width: 640px) {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    column-gap: 32px;
    padding: 4.8rem;
  }
`

const ImageContainer = styled(BaseStyle)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 40px;
`

const Image = styled.img`
  max-width: 100%;
`

const Div = styled(BaseStyle)`
  height: fit-content;
  padding: 24px;
`

const Category = styled.span`
  color: #9f99a1;
  display: block;
  line-height: 1.25;
  text-align: right;
`

const Price = styled.b`
  color: #2dc653;
  display: inline-block;
  font-size: 2.1rem;
  margin-bottom: 1.6rem;
`

const Button = styled.button`
  background-color: tomato;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-weight: 600;
  margin-top: 2.4rem;
  padding: 0.8rem 4rem 1rem;
`

const Details = () => {
  const product = useSelector(({ selectedProduct }) => selectedProduct)

  return (
    <Section>
      <ImageContainer>
        <Image src={product.image} alt={product.title} />
      </ImageContainer>
      <Div>
        <h2>{product.title}</h2>
        <Category>{product.category}</Category>
        <Price>$ {product.price}</Price>
        <p>{product.description}</p>
        <Button>Add to Cart</Button>
      </Div>
    </Section>
  )
}

export default Details
