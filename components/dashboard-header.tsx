'use client'

import Link from 'next/link'
import { Bell, Search, LayoutGrid, ShoppingBag, Package, Users, BarChart, ShoppingCart, Home, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useState } from 'react'

export function DashboardHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', icon: Home, href: '/dashboard', active: true },
    { name: 'الطلبات', icon: ShoppingCart, href: '#' },
    { name: 'المنتجات', icon: Package, href: '#' },
    { name: 'التسويق', icon: BarChart, href: '#' },
    { name: 'المتجر وقنوات البيع', icon: ShoppingBag, href: '#' },
    { name: 'التقارير', icon: BarChart, href: '#' },
  ];

  return (
    <header className="flex items-center justify-between p-4 md:px-8 border-b border-gray-800 bg-gray-950 text-white" dir="rtl">
      {/* Right side: Logo and Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">سلة</span>
          <span className="text-sm text-gray-400">salla</span>
        </div>
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-400 hover:text-teal-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              item.active ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-teal-400'
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Left side: Icons and User Profile */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
          <LayoutGrid className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
          <Search className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.png" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden sm:block">جدنا</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
            <DropdownMenuLabel>حسابي</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">الإعدادات</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">تسجيل الخروج</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-0 z-50 md:hidden transition-opacity duration-300" onClick={() => setIsMobileMenuOpen(false)} style={{ opacity: isMobileMenuOpen ? 0.75 : 0 }}>
          <nav className="absolute top-0 right-0 w-64 h-full bg-gray-950 p-6 border-l border-gray-800 flex flex-col space-y-4 animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">سلة</span>
                <span className="text-sm text-gray-400">salla</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-teal-400"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  item.active ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-teal-400 hover:scale-[1.02] hover:shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
