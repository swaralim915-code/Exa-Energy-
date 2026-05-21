"use client";
import React from 'react';

// Explicitly typing the style sets to prevent compiling mismatches
const inputStyle: React.CSSProperties = { 
  width: '100%', 
  padding: '12px', 
  background: '#04040d', 
  color: 'white', 
  border: '1px solid rgba(255,255,255,0.1)', 
  borderRadius: '8px', 
  fontSize: '14px',
  outline: 'none'
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: 'none'
};

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'system-ui, sans-serif', backgroundColor: '#0a0a1a', color: '#e2e8f0', lineHeight: '1.6', minHeight: '100vh' }}>
      
      {/* NAVBAR */}
      <header style={{ background: 'rgba(10, 10, 26, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* SAPLING BRAND LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '22px', fontWeight: 800, color: 'white' }}>
            <div style={{ width: '32px', height: '32px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', boxShadow: '0 0 15px rgba(16,185,129,0.2)' }}>
              🌱
            </div>
            <div><span style={{ color: '#10b981' }}>Exa</span><span style={{ fontWeight: 300, color: '#94a3b8' }}>Energy</span></div>
          </div>

          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#platform" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '14px' }}>Platform</a>
            <a href="#optimization" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '14px' }}>Logistics</a>
            <a href="#partner" style={{ background: '#10b981', color: '#03140b', padding: '8px 16px', borderRadius: '99px', textDecoration: 'none', fontWeight: 700, fontSize: '13px' }}>Partner Portal</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: '180px 24px 100px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.04) 0%, #0a0a1a 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', color: 'white', lineHeight: 1.2, letterSpacing: '-1px' }}>
            Smart Cities Powered by Optimized Waste <span style={{ color: '#10b981' }}>Logistics</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '32px' }}>
            Exa Energy tracks urban organic waste streams in real time, instantly generating optimal transit paths to supply biogas facilities with maximum efficiency.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <a href="#partner" style={{ background: '#10b981', color: '#03140b', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>Deploy with Us</a>
            <a href="#platform" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: 600 }}>Explore Platform</a>
          </div>
        </div>
      </section>
      {/* ECOSYSTEM GRID */}
      <section id="platform" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#10b981', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', fontWeight: 700 }}>OUR SYSTEM</span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'white' }}>Core Ecosystem</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          
          {/* CARD 1 */}
          <div style={{ background: '#0d0d1e', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>📍</div>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 700, color: 'white' }}>Real-Time Streams</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>We use smart data to track exactly where and how fast garbage is piling up across the city, in real time.</p>
          </div>

          {/* CARD 2 */}
          <div style={{ background: '#0d0d1e', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>⚡</div>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 700, color: 'white' }}>Logistics Engine</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Smart dispatch sequences that dramatically reduce vehicle mileage and fuel consumption costs.</p>
          </div>

          {/* CARD 3 */}
          <div style={{ background: '#0d0d1e', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>🚛</div>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 700, color: 'white' }}>Waste Delivery</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Ensuring reliable, steady organic feedstocks are collected and transported directly to biogas plants for processing.</p>
          </div>

          {/* CARD 4 */}
          <div style={{ background: '#0d0d1e', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>🌱</div>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 700, color: 'white' }}>Bio-Fertilizer Yield</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Tracking the outbound organic manure byproduct generated by partner plants, closing the full loop back to agriculture.</p>
          </div>
        </div>
      </section>

      {/* OPTIMIZATION AREA */}
      <section id="optimization" style={{ background: '#050512', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'white' }}>Dynamic Fleet Routing</h2>
          </div>
          <div style={{ background: '#0a0a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ height: '160px', background: '#020205', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(16,185,129,0.08)', marginBottom: '16px' }}>
              <div style={{ color: '#10b981', fontWeight: 700, fontSize: '16px' }}>🚚 Route Engine Active</div>
              <div style={{ color: '#64748b', fontSize: '13px' }}>Simulating real-time grid adjustments...</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', fontSize: '13px' }}>
              <div><span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '8px' }}></span> Truck #04 — On Schedule</div>
              <div><span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '8px' }}></span> Truck #07 — Optimized</div>
              <div><span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '8px' }}></span> Hub East — Imbalance</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="partner" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'white', textAlign: 'center', marginBottom: '32px' }}>Connect With Us</h2>
          <form style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', padding: '32px', borderRadius: '16px' }} onSubmit={(e) => { e.preventDefault(); alert('Submitted successfully!'); }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '13px' }}>Organization Name</label>
              <input type="text" style={inputStyle} placeholder="Sustainable Logistics Corp" required />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '13px' }}>Facility / Zone Node</label>
              <input type="text" style={inputStyle} placeholder="Industrial Biogas Unit 2" required />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '13px' }}>Logistics Message</label>
              <textarea style={textareaStyle} rows={3} placeholder="Describe waste volumes or constraints..." required />
            </div>
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#10b981', color: '#03140b', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
              Deploy Core Route Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#04040d', color: '#64748b', textAlign: 'center', padding: '40px 24px', fontSize: '13px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <p style={{ color: '#e2e8f0', marginBottom: '4px' }}>🌱 Exa Energy</p>
        <p>&copy; 2026 Exa Energy.</p>
      </footer>

    </div>
  );
}