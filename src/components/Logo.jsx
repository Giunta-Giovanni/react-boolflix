import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <>
            <Link to={'/'}>
                <div className="logo">
                    <img src="../../public/img/logo/boolflix-extended-logo.png" alt="" />
                </div>
            </Link>
        </>

    )
}