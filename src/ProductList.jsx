import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

const ProductList = ({ onHomeClick }) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  // Retrieve cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of all items in cart for the dynamic navbar badge
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 18 Unique Houseplants grouped into 3 distinct categories (6 per category)
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bac?auto=format&fit=crop&w=600&q=80',
          description: 'Produces oxygen at night, improves indoor air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
          description: 'Filters formaldehyde and xylene from living spaces.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
          description: 'Elegant white blooms that remove airborne toxins.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
          description: 'Feathery green foliage that acts as a natural humidifier.',
          cost: '$14',
        },
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Ultra resilient plant with glossy emerald foliage.',
          cost: '$22',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
          description: 'Soothing succulent that purifies air and heals skin.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80',
          description: 'Calming floral aroma that promotes restful sleep.',
          cost: '$16',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80',
          description: 'Sweet, intoxicating perfume that fills the room.',
          cost: '$20',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80',
          description: 'Crisp piney scent that boosts concentration.',
          cost: '$12',
        },
        {
          name: 'Peppermint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
          description: 'Invigorating minty fragrance for home and tea.',
          cost: '$10',
        },
        {
          name: 'Eucalyptus',
          image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
          description: 'Fresh menthol aroma beneficial for respiratory ease.',
          cost: '$18',
        },
        {
          name: 'Gardenia',
          image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80',
          description: 'Creamy white flowers with legendary fragrant notes.',
          cost: '$24',
        },
      ],
    },
    {
      category: 'Medicinal & Culinary Plants',
      plants: [
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
          description: 'Citrusy herb that reduces stress and relieves anxiety.',
          cost: '$11',
        },
        {
          name: 'Chamomile',
          image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80',
          description: 'Gentle daisy-like blooms ideal for relaxing teas.',
          cost: '$13',
        },
        {
          name: 'Thyme',
          image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=600&q=80',
          description: 'Antioxidant-rich culinary herb with aromatic leaves.',
          cost: '$9',
        },
        {
          name: 'Oregano',
          image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80',
          description: 'Robust savory herb packed with natural antimicrobial power.',
          cost: '$10',
        },
        {
          name: 'Stevia',
          image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
          description: 'Natural sweet leaf plant used as zero-calorie sweetener.',
          cost: '$12',
        },
        {
          name: 'Tulsi Holy Basil',
          image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
          description: 'Revered adaptogenic herb that strengthens immune health.',
          cost: '$15',
        },
      ],
    },
  ];

  // Helper to check if plant is already in cart
  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  // Handler to add product to cart
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Navigation handlers
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navigation bar visible on both Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="nav-brand" onClick={onHomeClick}>
          <span className="nav-logo-icon">🪴</span>
          <div className="nav-title-group">
            <h1>Paradise Nursery</h1>
            <p>Where Greenery Meets Serenity</p>
          </div>
        </div>

        <div className="nav-links">
          <button className="nav-link-btn" onClick={onHomeClick}>
            🏠 Home
          </button>
          <button className="nav-link-btn" onClick={handlePlantsClick}>
            🌿 Plants
          </button>
          <div className="cart-icon-container" onClick={handleCartClick}>
            <span className="cart-icon">🛒</span>
            {totalCartQuantity > 0 && (
              <span className="cart-badge">{totalCartQuantity}</span>
            )}
          </div>
        </div>
      </nav>

      {/* Render Cart page if showCart is true, otherwise render Product Listing */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <div className="product-container">
          <div className="product-header">
            <h2>Explore Our Botanical Collection</h2>
            <p>Handpicked indoor houseplants to elevate your sanctuary</p>
          </div>

          {plantsArray.map((categoryGroup, index) => (
            <div className="category-section" key={index}>
              <div className="category-title-wrapper">
                <h3 className="category-title">{categoryGroup.category}</h3>
                <span className="category-badge">
                  {categoryGroup.plants.length} Variety Plants
                </span>
              </div>

              <div className="product-grid">
                {categoryGroup.plants.map((plant, plantIdx) => {
                  const added = isPlantInCart(plant.name);
                  return (
                    <div className="product-card" key={plantIdx}>
                      <div className="product-image-wrapper">
                        <img 
                          src={plant.image} 
                          alt={plant.name} 
                          className="product-image" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                      </div>
                      <div className="product-details">
                        <h4 className="product-name">{plant.name}</h4>
                        <div className="product-price">{plant.cost}</div>
                        <p className="product-description">{plant.description}</p>
                        
                        <button
                          className="add-to-cart-btn"
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? '✓ Added to Cart' : '🛒 Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;