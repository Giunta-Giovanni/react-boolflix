import SearchBar from "./SearchBar";
import Logo from "./logo";

export default function Header() {

    return (
        <header>
            < div className="container my-0 py-0" >
                <div className="row ">
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col-4">
                        <SearchBar />
                    </div>
                </div>
            </div >
        </header>


    )
}