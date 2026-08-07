import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { socialLinks } from "../config/socialLinks";
import { Menu, X } from 'lucide-react';
import "../styles/NavBar.css";

export default function NavBar() {
    const [activeTab, setActiveTab] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = useMemo(() => [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Certifications'}
    ], []);

    useEffect(() => {
        const handleScroll = () => {
        // Check if scrolled
        setIsScrolled(window.scrollY > 10);

        // Update active tab
        const sections = tabs.map(tab => tab.id);
        const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });

        if (currentSection) {
            setActiveTab(currentSection);
        }
        };

        const handleResize = () => {
        // Close mobile menu if screen becomes desktop size
        if (window.innerWidth >= 768 && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        };
    }, [tabs, isMobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        // If we're not on the home page, navigate there first
        if (location.pathname !== '/') {
        navigate('/', { replace: true });
        // Wait for navigation and then scroll
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        } else {
        // We're already on the home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
        className={`navigation ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Main navigation">
        <div className="nav-container">
            <button className="signature-name"
            onClick={() => window.location.href = '/'}
            aria-label="Sara Nguyen - Go to homepage">
                Sara Nguyen
            </button>
            
            {/* Desktop Navigation */}
            <div className="nav-tabs desktop-nav">
            {tabs.map((tab) => (
                <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                aria-label={`Navigate to ${tab.label} section`}
                >
                {tab.label}
                </button>
            ))}
            </div>

            {/* Mobile Menu Button */}
            <button
            className="mobile-menu-btn relative"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}>
            <div style={{ position: 'relative', width: '24px', height: '24px' }}>
                <Menu
                size={24}
                style={{
                    position: 'absolute',
                    transition: 'opacity 0.3s ease',
                    opacity: isMobileMenuOpen ? 0 : 1
                }}
                />
                <X
                size={24}
                style={{
                    position: 'absolute',
                    transition: 'opacity 0.3s ease',
                    opacity: isMobileMenuOpen ? 1 : 0
                }}
                />
            </div>
            </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {tabs.map((tab, index) => (
            <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`mobile-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                aria-label={`Navigate to ${tab.label} section`}>
                {tab.label}
            </button>
            ))}
        </div>
        </nav>
    );
}