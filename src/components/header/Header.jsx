import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.Header}>
        <div className={styles.item}>
            <a href="">All</a>
            <a href="">Footwear</a>
            <a href="">Apparel</a>
            <a href="">Basketball</a>
            <a href="">Slides</a>
            <input type="text" name="" id="" placeholder='SEARCH'/>
        </div>
    </div>
  );
}

export default Header;
