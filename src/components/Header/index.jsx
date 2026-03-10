import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="anuncio">
                <p>Tudo em 10x sem juros!</p>
            </div>
            <div className="header">
                <picture>
                    <a href="#">
                        <img src="./icon.png" />
                    </a>
                </picture>
            </div>
        </header>
    )
}