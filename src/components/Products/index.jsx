import './Products.css'

import opedt1 from '../../assets/opedt1.jpg'

import opedt2 from '../../assets/opedt2.jpg'

import ndtmo from '../../assets/ndtmo.webp'

import ndtdm1 from '../../assets/ndtdm1.webp'

import ndtdm2 from '../../assets/ndtdm2.jpg'

import ndtdm3 from '../../assets/ndtdm3.jpg'

import ndtdm4 from '../../assets/ndtdm4.webp'

import ndtdm5 from '../../assets/ndtdm5.webp'

import ndtdm6 from '../../assets/ndtdm6.webp'

import ndtdm7 from '../../assets/ndtdm7.jpg'

export default function Products() {
    return (
        <section className='products'>
            <div className="titles">
                <h2>Products</h2>

                <p>Meet our books and choose which will be privileged to be read by you. All of them are DC originals and are in brand new condition.</p>

                <div className="products_grid">
                    <div className="card">
                        <div className="card-image">
                            <img src={opedt1} alt="Batman: O Príncipe Encantado das Trevas Vol.1" />

                            <span className='sale-badge'>Mais recomendado para novos fãs</span>
                        </div>

                        <div className="card_inf">
                            <h3>Batman: O Príncipe Encantado das Trevas Vol.1</h3>

                            <p className='price'>R$ 37,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={opedt2} alt="Batman: O Príncipe Encantado das Trevas Vol.2" />
                        </div>

                        <div className="card_inf">
                            <h3>Batman: O Príncipe Encantado das Trevas Vol.2</h3>

                            <p className='price'>R$ 100,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtmo} alt="Noites de Trevas: Metal (Omnibus)" />

                            <span className='sale-badge'>Mais vendido</span>
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Metal (Omnibus)</h3>

                            <p className='price'>R$ 237,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm1} alt="Noites de Trevas: Death Metal Vol.1" />
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.1</h3>

                            <p className='price'>R$ 25,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm2} alt="Noites de Trevas: Death Metal Vol.2" />

                            <span className='sale-badge'>ùltimas unidades restantes</span>
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.1</h3>

                            <p className='price'>R$ 38,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm3} alt="Noites de Trevas: Death Metal Vol.3" />
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.3</h3>

                            <p className='price'>R$ 25,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm4} alt="Noites de Trevas: Death Metal Vol.4" />
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.4</h3>

                            <p className='price'>R$ 60,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm5} alt="Noites de Trevas: Death Metal Vol.5" />
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.5</h3>

                            <p className='price'>R$ 27,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm6} alt="Noites de Trevas: Death Metal Vol.6" />
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.6</h3>

                            <p className='price'>R$ 37,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ndtdm7} alt="Noites de Trevas: Death Metal Vol.7" />
                        </div>

                        <div className="card_inf">
                            <h3>Noites de Trevas: Death Metal Vol.7</h3>

                            <p className='price'>R$ 25,00</p>

                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}