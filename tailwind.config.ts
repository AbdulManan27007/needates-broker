import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	screens: {
    		sm: '480px',
    		md: '768px',
    		lg: '1022px',
    		xl: '1202px',
    		custom: '1920px'
    	},
    	colors: {
    		orange: '#FFA62A',
    		'gray-dark': '#D9D9D9',
    		red: '#94131B',
    		black: '#1C1B18',
    		'dark-black': ' #101828',
    		oliveGreen: '#252603',
    		white: '#FFFFFF',
    		gray: '#F6F6F6',
    		EerieBlack: '#1C1B18',
    		ZinnwalditeBrown: '#252603',
    		SpanishGray: '#9B9B9B',
    		RubyRed: '#94131B',
    		BackGray: '#f6f6f6',
    		TextGray: '#525252'
    	},
    	fontFamily: {
    		poppins: [
    			'Poppins',
    			'sans-serif'
    		],
    		inter: [
    			'Inter',
    			'sans-serif'
    		]
    	},
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		boxShadow: {
    			custom: '0px 1.05px 2.09px 0px #38414A26',
    			'subscription-shadow': '15px 15px 20px 0px rgba(0, 0, 0, 0.12)',
    			'subscription-shadow-2': '-4px 4px 30px 0px rgba(0, 0, 0, 0.04)'
    		},
    		fontSize: {
    			h1: [
    				'23px',
    				{
    					lineHeight: '32px'
    				}
    			],
    			h2: [
    				'22px',
    				{
    					lineHeight: '26px'
    				}
    			],
    			h3: [
    				'20px',
    				{
    					lineHeight: '24px'
    				}
    			],
    			h4: [
    				'19px',
    				{
    					lineHeight: '22px'
    				}
    			],
    			h5: [
    				'18px',
    				{
    					lineHeight: '24px'
    				}
    			],
    			h6: [
    				'16px',
    				{
    					lineHeight: '22px'
    				}
    			],
    			h7: [
    				'16px',
    				{
    					lineHeight: '20px'
    				}
    			],
    			h8: [
    				'15px',
    				{
    					lineHeight: '20px'
    				}
    			],
    			h9: [
    				'15px',
    				{
    					lineHeight: '26px'
    				}
    			],
    			h10: [
    				'14px',
    				{
    					lineHeight: '17px'
    				}
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			backgroundImage: {
    				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    			},
    			borderRadius: {
    				lg: 'var(--radius)',
    				md: 'calc(var(--radius) - 2px)',
    				sm: 'calc(var(--radius) - 4px)'
    			},
    			sidebar: {
    				DEFAULT: 'var(--sidebar-background)',
    				foreground: 'var(--sidebar-foreground)',
    				primary: 'var(--sidebar-primary)',
    				'primary-foreground': 'var(--sidebar-primary-foreground)',
    				accent: 'var(--sidebar-accent)',
    				'accent-foreground': 'var(--sidebar-accent-foreground)',
    				border: 'var(--sidebar-border)',
    				ring: 'var(--sidebar-ring)'
    			},
    			text: {
    				primary: 'var(--text-primary)',
    				secondary: 'var(--text-secondary)',
    				tertiary: 'var(--text-tertiary)'
    			},
    			body: 'var(--body-bg)',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
