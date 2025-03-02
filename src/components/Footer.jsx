import BoxLink from "./BoxLinks";
import categorylinks from "../data/categorylinks";

const { categorylinks1, categorylinks2, categorylinks3, categorylinks4 } = categorylinks
console.log(categorylinks1)

export default function Footer() {
    return (
        <footer>
            < div className="container" >

                {/* social link */}
                <div className="box-channel">

                    <ul className="channel">
                        <li className="single-channel">
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                        </li>
                        <li className="single-channel">
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                        </li>
                        <li className="single-channel">
                            <a href="">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                        </li>
                        <li className="single-channel">
                            <a href="">
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                        </li>

                    </ul>
                </div>

                {/* member footer links */}
                <div className="box-link d-flex">
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks1} />
                    </div>
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks2} />
                    </div>
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks3} />
                    </div>
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks4} />
                    </div>
                </div>



                {/* member footer service */}

                {/* member footer copyright */}


            </div >
        </footer>

    )
}