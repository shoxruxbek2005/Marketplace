import clsx from "clsx"
import cn from "./style.module.scss"


function P(props) {
  const { children, className,  } = props;
  return (
    <p
      className={clsx(
        cn.p,
        className
      )}
    >
      {children}
    </p>
  );
}
export default P;