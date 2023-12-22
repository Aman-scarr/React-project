import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ክሌላው የተሻለ በካርድ የሚፈጸም የባንክ አገልግሎት <br className="sm:block hidden" /> ከኛ ጋር ያግኙ
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ከትልቅ የምዝገባ ጉርሻዎች እስከ ለጋስ ሽልማቶች ፣ ምርጥ የካርዶች አገልግሎት ከቀሪው ይበልጣል። ከፍላጎትዎ ጋር የሚስማማ ለማግኘት እነዚህን ከአጋሮቻችን የሚመጡ ቅናሾችን ያወዳድሩ።
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
