import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="bg-green-700 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Hedging Platform for Oilseed Price Risk Management</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Digital platform empowering farmers to hedge against oilseed price volatility using AI, blockchain, and forward contracts.
        </p>
      </header>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Problem Statement</h2>
        <p>
          Oilseed farmers in India face sharp price volatility without effective hedging tools. Suspension of commodity trading platforms
          has increased exposure to unpredictable market fluctuations, leading to distress sales and income instability.
        </p>
      </section>

      <section className="py-12 px-6 bg-white max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>AI-driven price forecasting and trend analytics</li>
          <li>Virtual futures trading simulation for FPOs and smallholders</li>
          <li>Blockchain-secured forward e-contracts</li>
          <li>Real-time market alerts and NCDEX-style integration</li>
          <li>Farmer-friendly UI with education modules on risk management</li>
        </ul>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">AI Price Prediction</h3>
            <p>Predictive analytics to forecast oilseed market prices for better decision making.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Virtual Hedging</h3>
            <p>Simulated futures trading that helps farmers hedge against volatility without real capital risk.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Secure Contracts</h3>
            <p>Blockchain-based e-contracts ensure transparency and trust in forward sales.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Market Alerts</h3>
            <p>Real-time updates and notifications so farmers never miss critical price movements.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-green-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">Have questions or want to collaborate? Reach out to our team.</p>
        <a
          href="mailto:team@sparkinno.com"
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
        >
          Contact Us
        </a>
      </section>

      <footer className="bg-green-700 text-white py-4 text-center">
        <p>Team Spark Innovation | Hackathon 2025</p>
      </footer>
    </div>
  );
}
