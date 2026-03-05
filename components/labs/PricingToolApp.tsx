"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Info, Percent, ChevronRight } from "lucide-react";

interface Product {
    id: string;
    name: string;
    category: "hardware" | "training" | "accessories";
    price: number;
    description: string;
}

const PRODUCTS: Product[] = [
    { id: "p1", name: "Professional Six-Piece Instrument Set", category: "hardware", price: 2995, description: "Complete professional grade stainless steel instrument set with carrying case." },
    { id: "p2", name: "Clinical Three-Piece Set", category: "hardware", price: 1495, description: "Essential set for localized treatments in smaller clinic settings." },
    { id: "p3", name: "M1 Basic Training Course", category: "training", price: 650, description: "Fundamental training on instrument-assisted soft tissue mobilization." },
    { id: "p4", name: "M2 Advanced Practitioner Certification", category: "training", price: 850, description: "Advanced clinical reasoning and comprehensive treatment strategies." },
    { id: "p5", name: "Emollient Jar (15oz)", category: "accessories", price: 45, description: "Standard clinical emollient for optimal instrument glide." },
];

export default function PricingToolApp() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<"all" | "hardware" | "training" | "accessories">("all");
    const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);

    const filteredProducts = PRODUCTS.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "all" || p.category === filter;
        return matchesSearch && matchesFilter;
    });

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                return prev.map((item) => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...prev, { product, qty: 1 }];
        });
    };

    const updateQty = (id: string, delta: number) => {
        setCart((prev) => prev.map((item) => {
            if (item.product.id === id) {
                const newQty = Math.max(0, item.qty + delta);
                return { ...item, qty: newQty };
            }
            return item;
        }).filter(item => item.qty > 0));
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const monthlyEstimate = subtotal > 1000 ? (subtotal / 36).toFixed(2) : null;

    return (
        <div className="flex flex-col lg:flex-row h-full max-h-[85vh] bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">

            {/* LEFT PANEL: PRODUCT CATALOG */}
            <div className="flex-1 flex flex-col border-r border-neutral-800">
                <div className="p-6 border-b border-neutral-800 bg-neutral-900/50">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        Smart Quoting & Pricing
                    </h2>
                    <p className="text-sm text-neutral-400 mt-1">Build dynamic quotes with real-time financing options.</p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-white placeholder-neutral-500"
                            />
                        </div>
                        <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
                            {["all", "hardware", "training"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat as any)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${filter === cat ? "bg-emerald-600 text-white shadow" : "text-neutral-400 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <AnimatePresence>
                            {filteredProducts.map((p) => (
                                <motion.div
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-600 transition-colors"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-lg leading-tight">{p.name}</h3>
                                            <span className="font-mono text-emerald-400">${p.price.toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-neutral-500 mb-4">{p.description}</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(p)}
                                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        Add to Quote
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {filteredProducts.length === 0 && (
                            <div className="col-span-full py-12 text-center text-neutral-500">
                                No products found matching your search.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: CART & FINANCING */}
            <div className="w-full lg:w-96 flex flex-col bg-neutral-900 h-full">
                <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/80">
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-neutral-400" />
                        <span className="font-semibold text-white">Current Quote</span>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full font-medium">
                        {cart.reduce((a, b) => a + b.qty, 0)} items
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                    <AnimatePresence>
                        {cart.map((item) => (
                            <motion.div
                                key={item.product.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 flex gap-3"
                            >
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-white mb-1 leading-snug">{item.product.name}</h4>
                                    <span className="text-emerald-400 font-mono text-sm">${item.product.price.toLocaleString()}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 bg-neutral-900 rounded-md px-1 border border-neutral-800">
                                    <button onClick={() => updateQty(item.product.id, 1)} className="p-1 text-neutral-400 hover:text-white">+</button>
                                    <span className="text-xs font-medium w-4 text-center">{item.qty}</span>
                                    <button onClick={() => updateQty(item.product.id, -1)} className="p-1 text-neutral-400 hover:text-white">-</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {cart.length === 0 && (
                        <div className="text-center text-neutral-500 py-12 text-sm">
                            Your quote is empty.<br /> Add products to view financing.
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-neutral-800 bg-neutral-950">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-neutral-400">Subtotal</span>
                        <span className="text-xl font-mono font-bold text-white">${subtotal.toLocaleString()}</span>
                    </div>

                    <AnimatePresence>
                        {monthlyEstimate && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-4 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Percent className="w-4 h-4 text-emerald-400" />
                                        <span className="text-sm font-semibold text-emerald-400">Financing Available</span>
                                    </div>
                                    <div className="text-xs text-neutral-400">
                                        Estimated <span className="text-white font-mono font-bold">${monthlyEstimate}</span> /mo for 36 months via partner financing.
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        disabled={cart.length === 0}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        Generate Proposal <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
