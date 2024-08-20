import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import banner from "../../assets/bannerImg.png"
import { BannerContainer, BannerContent, BannerTitle, BenefitsItems, ButtonItem, GridProducts, Item, ProductsContainer } from "./styles"
import { CardProduct } from "./CardProduct";

import { coffees } from '../../data/coffees.json'

export function Home() {
  return (
    <main>
      <BannerContainer>
        <BannerContent>

          <BannerTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

            <BenefitsItems>
              <Item>
                <ButtonItem buttonsColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </ButtonItem>
                <p>Compra simples e segura</p>
              </Item>

              <Item>
                <ButtonItem buttonsColor="gray">
                  <Package size={16} weight="fill"/>
                </ButtonItem>
                <p>Embalagem mantém o café intacto</p>

              </Item>
              <Item>
                <ButtonItem buttonsColor="yellowLight">
                  <Timer size={16} weight="fill" />
                </ButtonItem>
                <p>Entrega rápida e rastreada</p>
              </Item>

              <Item>
                <ButtonItem buttonsColor="purple">
                  <Coffee size={16} weight="fill" />
                </ButtonItem>
                <p>O café chega fresquinho até você</p>
              </Item>

            </BenefitsItems>
          </BannerTitle>

          <img src={banner} alt="Imagem de copo de café com a logo do coffee delivery" />
        </BannerContent>
      </BannerContainer>

      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <GridProducts>
          {
            coffees.map(coffee => (
              <CardProduct key={coffee.id} coffee={coffee}/>
            ))
          }
        </GridProducts>
      </ProductsContainer>
    </main>
  )
}