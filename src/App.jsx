import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      if (currentItems.some((item) => item.id === product.id)) {
        return currentItems
      }
      return [...currentItems, product]
    })
  }

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
