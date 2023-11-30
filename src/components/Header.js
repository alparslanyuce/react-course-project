import { memo } from "react"
function Header() {
    console.log("header render edildi")
    return(
        <header>header</header>
    )
}
export default memo(Header)