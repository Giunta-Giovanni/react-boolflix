export default function BoxLink(props) {
    return (
        <ul>
            {props.linkCategory.map(link => (
                <li className="netlink" key={link.id} >
                    <a className="netlinka" href={link.url}>{link.text}</a>
                </li>
            ))}
        </ul >
    )
}