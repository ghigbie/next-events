import Link from 'next/link';
import classes from './button.module.css';

const Button = ({link, onClick, children}) => {
    {link ?
        <Link href={link}>
            <a className={classes.btn}>
                {children}
            </a>
        </Link>
    :
        <button 
            className={className.btn}
            onClick={onClick}>
            {children}
        </button>
    }
}

export default Button
