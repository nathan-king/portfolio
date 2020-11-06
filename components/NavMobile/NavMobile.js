import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import styles from "./NavMobile.module.scss";

export default function NavMobile() {
  return (
    <nav className={styles.nav}>
      <Burger />
    </nav>
  );
}

// const [width, setWidth] = useState();
// const [open, setOpen] = useState(false);
// const breakpoint = 1200;

// function updateMedia() {
//     setWidth(window.innerWidth);
// }

// useEffect(() => {
//     window.addEventListener("resize", updateMedia);
//     return () => window.removeEventListener("resize", updateMedia);
// });
