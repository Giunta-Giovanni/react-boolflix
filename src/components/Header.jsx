import SearchBar from "./SearchBar";
import Logo from "./logo";

export default function Header() {

    return (
        <header>
            < div className="container my-0 py-0" >
                <div className="row ">
                    <div className="col">
                        <Logo />
                    </div>
                    <div className="col">
                        <SearchBar />
                    </div>
                </div>
            </div >
        </header>


    )
}