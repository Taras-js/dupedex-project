import styles from "./resultItem.module.css";
import { useAppDispatch } from "../../../app/hooks";
import { showItem } from "../../ToolbarContainer/toolbarSlice";
import { setProducts, setReviews } from "../../../features/Search/productSlice";
import { randomReviewsMock } from "../../../shared/mocks/setMock";

interface ResultItemProps {
  id: number;
  title?: string;
  subtitle?: string;
  image?: string;
}

const ResultItem: React.FC<ResultItemProps> = (props: ResultItemProps) => {
  const {
    title,
    subtitle,
    image,
    id,
  } = props;

  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setProducts([id]));
    dispatch(setReviews({ id, reviews: randomReviewsMock() }));
    dispatch(showItem([id]));
  };
  return (
    <button onClick={handleClick} className={styles.search__item}>
      {image && <img src={image} alt={title} className={styles.search__image} />}
      <p className={styles.search__title}>{`${title} `}</p>
      <p className={styles.search__subtitle}>{` - ${subtitle} (meccabeauty.co.nz)`}</p>
    </button>
  );
};

export default ResultItem;
