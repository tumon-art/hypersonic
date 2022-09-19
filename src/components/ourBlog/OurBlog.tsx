import Image from "next/image";
import styles from "./OurBlog.module.scss";
const data = [
  {
    id: "1",
    img: "/4g.png",
    title: "4G MOBILE INTERNET SERVICE LAUNCHED IN BANGLADESH",
    text: "A new chapter of “digital Bangladesh” began through the introduction of fourth-generation (4G) mobile internet in the country on Monday.",
  },
  {
    id: "2",
    img: "/fb.jpg",
    title: "FACEBOOK TAKES BABY STEPS TOWARD REBUILDING TRUST",
    text: "Facebook has introduced a set of changes designed to empower members to protect their account information.",
  },
  {
    id: "3",
    img: "/5g.jpg",
    title: "WHAT IS 5G? THE NEXT WIRELESS REVOLUTION EXPLAINED",
    text: "As smartphones and other digital devices get smarter and more numerous",
  },
];

const OurBlog = () => {
  return (
    <section className={styles.section}>
      <h1> Our Blogs </h1>
      <div className={styles.cardHold}>
        {data.map((post) => (
          <div key={post.id} className={styles.card}>
            {/* === IMG HOLD */}
            <div className={styles.imgHold}>
              <Image
                src={post.img}
                className={styles.img}
                width="400"
                height="300"
                layout="fill"
                alt="img"
              />
            </div>

            {/* === TEXT HOLD */}
            <div className={styles.textHold}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurBlog;
