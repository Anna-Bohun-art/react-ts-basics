import { type ReactNode /*type PropsWithChildren*/ } from "react"
/*type HeaderProps = {

}*/
type HeaderProps = {
    image: {src: string;
    alt: string;
};
    children: ReactNode
}
//type HeaderProps = PropsWithChildren<{ image: object}>
const Header =({ image, children }: HeaderProps)=> {
 return(
    <header>
        <img src={image.src} alt={image.alt}></img>
        {image.alt}
        {children}
    </header>
 )
}
export default Header