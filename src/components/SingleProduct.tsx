"use client"
import  { useState } from 'react'
import styles from "@/styles/components/SingleProduct.module.css"
import Image from 'next/image'
import { FaCartPlus } from "react-icons/fa";
import { TbShoppingCartMinus } from "react-icons/tb";



const SingleProduct = () => {
    const [count , setCount ] = useState(1)

    const handleDeincress = () => {
      if(count > 0){
        setCount(prev => prev - 1)
      }else{
        setCount(0)
      }
    }
    const handleIncress = () => {
      setCount(prev => prev + 1)
    }
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.ImgContainer}>
            <Image className={styles.Image} src="/images/hat.jpg" width={300} height={4000} alt='hat'/>
        </div>
        <div className={styles.InfoContainer}>
        <h3 className={styles.Title}>Denim Jumpsuit</h3>
          <p className={styles.Des}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className={styles.Price}>$ 20</span>
          <div className={styles.FilterContainer}>
            <select className={styles.Filter}>
                <span className={styles.FilterTitle}>Color</span>
                <option className={styles.FilterColor}>Black</option>
                <option className={styles.FilterColor}>darkblue</option>
                <option className={styles.FilterColor}>Gray</option>
            </select>
            <select className={styles.Filter}>
                <span className={styles.FilterTitle}>XS</span>
                <option className={styles.FilterColor}>S</option>
                <option className={styles.FilterColor}>M</option>
                <option className={styles.FilterColor}>L</option>
                <option className={styles.FilterColor}>XL</option>
            </select>
          </div>
          <div className={styles.AddContainer}>
            <div className={styles.AmountContainer}>
                <TbShoppingCartMinus className={styles.Btn} onClick={() => handleDeincress()}/>
                <span className={styles.Amount}>{count}</span>
                <FaCartPlus className={styles.Btn} onClick={() => handleIncress()}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
