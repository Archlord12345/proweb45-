import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products3D.css';

const products = [
    {
        id: 1,
        name: 'T-Shirt Premium',
        category: 'Gadgets',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
        rating: 4.8,
        price: 'À partir de 8.50€'
    },
    {
        id: 2,
        name: 'Mug Personnalisé',
        category: 'Gadgets',
        image: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?q=80&w=600&auto=format&fit=crop',
        rating: 4.9,
        price: 'À partir de 5.00€'
    },
    {
        id: 3,
        name: 'Bannière Grand Format',
        category: 'Impression',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=600&auto=format&fit=crop',
        rating: 4.7,
        price: 'Sur devis'
    },
    {
        id: 4,
        name: 'Logo & Design',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
        rating: 5.0,
        price: 'Sur devis'
    },
    {
        id: 5,
        name: 'Casquette Brodée',
        category: 'Gadgets',
        image: 'https://images.unsplash.com/photo-1579260434007-c2a12e36e2d5?q=80&w=600&auto=format&fit=crop',
        rating: 4.6,
        price: 'À partir de 12.00€'
    },
    {
        id: 6,
        name: 'Flyer Professionnel',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
        rating: 4.9,
        price: 'À partir de 0.05€/u'
    }
];

const Products3D = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e, productId) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotY = (x - centerX) / (rect.width / 2) * 15;
        const rotX = -(y - centerY) / (rect.height / 2) * 15;
        
        setRotateX(rotX);
        setRotateY(rotY);
        setHoveredProduct(productId);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setHoveredProduct(null);
    };

    return (
        <section className="section products-3d-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Produits Phares</h2>
                    <p className="section-subtitle">Découvrez nos solutions les plus populaires avec des prix compétitifs</p>
                </div>

                <div className="products-3d-container">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-3d-card"
                            onMouseMove={(e) => handleMouseMove(e, product.id)}
                            onMouseLeave={handleMouseLeave}
                            style={
                                hoveredProduct === product.id
                                    ? {
                                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                                    }
                                    : {}
                            }
                        >
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} loading="lazy" />
                                <div className="product-overlay-3d">
                                    <Link to="/contact" className="add-to-cart-btn">
                                        <ShoppingCart size={20} />
                                        Demander un devis
                                    </Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < Math.floor(product.rating) ? 'filled' : ''}
                                        />
                                    ))}
                                    <span className="rating-value">{product.rating}</span>
                                </div>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products3D;
