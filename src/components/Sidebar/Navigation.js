import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineShoppingCart,
} from "react-icons/md";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [
  {
    text: "Главная",
    icon: <AiOutlineHome />,
    link: "#",
  },
  {
    text: "О компани",
    icon: <AiOutlineInfoCircle />,
    link: "#about",
  },
  {
    text: "Услуги",
    icon: <MdOutlineFeaturedPlayList />,
    link: "#services",
  },
  {
    text: "Продукты",
    icon: <MdOutlineShoppingCart />,
    link: "#products",
  },
  {
    text: "Контакты",
    icon: <AiOutlinePhone />,
    link: "#contacts",
  },
];

export const Navigation = ({ close }) => (
  <motion.ul variants={variants} className="sidebar-ul">
    {itemIds.map((item, ind) => (
      <MenuItem key={ind} data={item} close={close} />
    ))}
  </motion.ul>
);
