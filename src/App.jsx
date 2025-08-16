import Product from './components/ProductCard.jsx'

function App() {
  const products = [
    {
      id: 1,
      name: 'Cat Scratching Post',
      price: '799₱',
      description: 'A sturdy scratching post wrapped in sisal rope—helps keep cats’ claws healthy and protects furniture.',
      img: '/catsupplies1.jpg'
    },
    {
      id: 2,
      name: 'Cat Tree with Hammock',
      price: '2499₱',
      description: 'Multi-level cat condo with platforms, hammock, and scratching poles—great for climbing, resting, and play.',
      img: '/catsupplies2.jpg'
    },
    {
      id: 3,
      name: 'Automatic Cat Feeder',
      price: '3299₱',
      description: 'Programmable feeder that dispenses food on schedule—keeps cats fed even when you’re not home.',
      img: '/catsupplies3.jpg'
    },
    {
      id: 4,
      name: 'Cat water Fountain',
      price: '1099₱',
      description: 'Flowing water fountain encourages cats to drink more—helps prevent dehydration and urinary problems.',
      img: '/catsupplies4.jpg'
    },
    {
      id: 5,
      name: 'Cozy Cat Bed',
      price: '899₱',
      description: 'Ultra-soft round bed with plush lining—gives cats a warm and secure spot to nap.',
      img: '/catsupplies5.jpg'
    },
    {
      id: 5,
      name: 'Interactive Cat Toy',
      price: '499₱',
      description: 'Battery operated feather teaser that spins and hides andkeeps cats active and entertained.',
      img: '/catsupplies6.jpg'
    },
  ]

  return (
    <div className="app">
      <header className="app-header">
          <div className="app-title">
            <img src="/logo.png" alt="doydy cat toys" className="app-logo" />
            <h1>Shop @ Cat Supplies Shop</h1>
          </div>
      </header>
      <main className="product-list">
        {products.map(product => (
          <Product key={product.id} products={product} />
        ))}
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Cat Supplies Shop. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
