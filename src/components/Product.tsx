import styles from '@/styles/components/Product.module.css'
import { FaShoppingBag , FaSearch , FaRegHeart } from "react-icons/fa";

const Product = ({item}) => {
  return (
    <div className={styles.Container}>
        <span className={styles.Circle}></span>
      <img className={styles.Image} src={item.img} />
      <div className={styles.Info}>
        <div className={styles.Icon}><FaShoppingBag/></div>
        <div className={styles.Icon}><FaSearch/></div>
        <div className={styles.Icon}><FaRegHeart/></div>
      </div>
    </div>
  )
}

export default Product
