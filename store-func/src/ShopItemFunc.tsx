import style from './main.module.css'

interface ShopItemProps {
    cardInfo: {
        brand: string;
        title: string;
        description: string;
        descriptionFull: string;
        price: number;
        currency: string;
    };
}

export default function ShopItemFunc (props: ShopItemProps){
    const { brand, title, description, descriptionFull, price, currency } = props.cardInfo
     return (
        <div className={style.mainContent}>
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className={style.description}>
                {descriptionFull}
            </div>
            <div className={style['highlight-window.mobile']} ><div className={style.highlightOverlay}></div></div>
            <div className={style.divider}></div>
            <div className={style['purchase-info']}>
                <div className={style.price}>{currency}{price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}