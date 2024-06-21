import clsx from "clsx"
import cn from "./style.module.scss"


function H2(props) {
    const { children, className, } = props;
    return (
        <h2
            className={clsx(
                cn.h2,
                className
            )}
        >
            {children}
        </h2>
    );
}
export default H2;