
const Footer = () => {
    const date = new Date();
    return(
        <footer className="text-center text-xs">
        © {date.getFullYear()} Landon Zigler. All rights reserved.
        </footer>  
    ) 
}

export default Footer;