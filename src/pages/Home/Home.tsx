import styles from './Home.module.sass';
import Background from '../../assets/img/bg-pattern-desktop.svg';
import Box from '../../assets/img/illustration-box-desktop.svg';
import Banner from '../../assets/img/illustration-woman-online-desktop.svg';
import { ReactComponent as ArrowDown } from '../../assets/img/icon-arrow-down.svg';
import data from '../../data/options.json';
import {useState} from "react";

interface DescriptionData {
    [key: string]: string;
}

export default function Home(){
    const [open, setOpen] = useState('')

    const json: { description: DescriptionData } = data;

    function changeOpen(title: string){
        if(title === open){
            setOpen('')
        }else{
            setOpen(title)
        }
    }

    return(
        <section className={styles.container}>
            <div className={styles.container__box}>
                <div className={styles.container__box__images}>
                    <img src={Background} alt='' className={styles.container__box__images_background}/>
                    <img src={Banner} alt='' className={styles.container__box__images_banner}/>
                    <img src={Box} alt='' className={styles.container__box__images_box}/>
                </div>
                <div className={styles.container__box__faq}>
                    <h1 className={styles.container__box__faq_title}>FAQ</h1>
                    <div className={styles.container__box__faq_options}>
                        {
                            data.title.map((element: string) => (
                                <div key={element}>
                                    <div className={styles.container__box__faq_options_div}>
                                        <span style={open === element ? {fontWeight: 700} : {}} className={styles.container__box__faq_options_div_title} onClick={() => changeOpen(element)}>{element}</span>
                                        <ArrowDown
                                            className={open === element ? `${styles.rotateArrow} ${styles.arrowIcon}` : styles.arrowIcon}
                                            onClick={() => changeOpen(element)}
                                        />                                        {
                                            element === open ?
                                                <div className={styles.container__box__faq_options_div_text}>
                                                    <p>{json.description[open]}</p>
                                                </div>
                                                :
                                                ''
                                        }
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}