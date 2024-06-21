import clsx from "clsx"
import cn from "./style.module.scss"


function Span(props) {
    const { children, className, } = props;
    return (
        <span
            className={clsx(
                cn.span,
                className
            )}
        >
            {children}
        </span>
    );
}
export default Span;