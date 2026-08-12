import atis_img from './atis.jpeg'
import blacksnail_img from './blacksnail.jpeg'
import cosrx_img from './cosrx.jpeg'
import cupbab_img from './cupbab.jpeg'
import doshirak_img from './doshirak.jpeg'
import greentomato_img from './greentomato.jpeg'
import hotdog_img from './hotdog.jpeg'
import jejuater_img from './jejuater.jpeg'
import jin_mild_img from './jin-mild.jpg'
import kimbab_img from './kimbab.jpeg'
import lotte_img from './lotte.jpeg'
import napa_img from './napa.jpeg'
import ottogi_img from './ottogi.jpg'
import panthecell_img from './panthecell.jpeg'
import pear_img from './pear.jpeg'
import rameyon_img from './rameyon.jpeg'
import redapple_img from './redapple.jpeg'
import redkii_img from './redkii.jpeg'
import seafood_img from './seafood.jpeg'
import tigim_img from './tigim.jpeg'
import toner_img from './toner.jpeg'
import ullacrispyroll_img from './ullacrispyroll.jpeg'
import hero_ramen_img from './hero_ramen.jpeg'

import logo from './logo.png'
import hero_img from './basket.png'
import cart_icon from './cart.jpeg'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import product from './product.png'
import store2 from './store2.jpg'
import mart from './mart.png'
import visa from './visa.jpeg'
import mastercard from './mastercard.jpeg'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    product,
    store2,
    mart,
    visa,
    mastercard,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "grocery001",
        name: "Fresh Sugar Apple (Atis)",
        description: "Fresh and sweet Sugar Apple (Atis).",
        price: 150,
        image: [atis_img],
        category: "Fresh Produce",
        subCategory: "Fruits",
        sizes: ["1 kg"],
        bestseller: false
    },
    {
        _id: "grocery002",
        name: "Black Snail Repair Cream",
        description: "Premium black snail mucin repair cream for skin rejuvenation.",
        price: 850,
        image: [blacksnail_img],
        category: "K-Beauty",
        subCategory: "Skincare",
        sizes: ["50ml"],
        bestseller: true
    },
    {
        _id: "grocery003",
        name: "COSRX Snail Mucin Essence",
        description: "Advanced snail 96 mucin power essence.",
        price: 950,
        image: [cosrx_img],
        category: "K-Beauty",
        subCategory: "Skincare",
        sizes: ["100ml"],
        bestseller: true
    },
    {
        _id: "grocery004",
        name: "Instant Cupbab (Spicy Pork)",
        description: "Convenient and delicious spicy pork cup rice.",
        price: 180,
        image: [cupbab_img],
        category: "K-Food",
        subCategory: "Instant Meals",
        sizes: ["1 Bowl"],
        bestseller: false
    },
    {
        _id: "grocery005",
        name: "Paldo Doshirak Cup Noodle",
        description: "Classic Korean lunch box style cup noodles.",
        price: 65,
        image: [doshirak_img],
        category: "K-Food",
        subCategory: "Noodles",
        sizes: ["1 Cup"],
        bestseller: false
    },
    {
        _id: "grocery006",
        name: "Fully Green Tomato Clay Mask Cleanser",
        description: "Deep pore cleansing with green tomato extract.",
        price: 750,
        image: [greentomato_img],
        category: "K-Beauty",
        subCategory: "Cleanser",
        sizes: ["120ml"],
        bestseller: false
    },
    {
        _id: "grocery007",
        name: "Korean Corn Dog (Cheese & Sausage)",
        description: "Popular street food corn dog filled with cheese and sausage.",
        price: 120,
        image: [hotdog_img],
        category: "Korean Food Stall",
        subCategory: "Street Food",
        sizes: ["1 Piece"],
        bestseller: true
    },
    {
        _id: "grocery008",
        name: "Jeju water deep cleansing foam",
        description: "Pure volcanic bedrock water from Jeju Island.",
        price: 45,
        image: [jejuater_img],
        category: "K-Beauty",
        subCategory: "Skincare",
        sizes: ["500ml"],
        bestseller: false
    },
    {
        _id: "grocery009",
        name: "Ottogi Jin Ramen (Mild)",
        description: "Korean instant noodle soup with a mild flavor.",
        price: 55,
        image: [jin_mild_img],
        category: "K-Food",
        subCategory: "Noodles",
        sizes: ["1 Pack", "Box of 5"],
        bestseller: true
    },
    {
        _id: "grocery010",
        name: "Classic Beef Kimbab",
        description: "Freshly made Korean seaweed rice roll with beef and vegetables.",
        price: 150,
        image: [kimbab_img],
        category: "Korean Food Stall",
        subCategory: "Meals",
        sizes: ["1 Roll"],
        bestseller: true
    },
    {
        _id: "grocery011",
        name: "Lotte Binch Chocolate Biscuits",
        description: "Premium half chocolate half biscuit snacks.",
        price: 165,
        image: [lotte_img],
        category: "Korean Snacks",
        subCategory: "Biscuits",
        sizes: ["Box (204g)"],
        bestseller: true
    },
    {
        _id: "grocery012",
        name: "Fresh Napa Cabbage",
        description: "Fresh Napa Cabbage, perfect for making kimchi.",
        price: 180,
        image: [napa_img],
        category: "Fresh Produce",
        subCategory: "Vegetables",
        sizes: ["1 Whole"],
        bestseller: false
    },
    {
        _id: "grocery013",
        name: "Ottogi Cooked White Rice",
        description: "Convenient microwaveable cooked white rice.",
        price: 450,
        image: [ottogi_img],
        category: "K-Food",
        subCategory: "Instant Rice",
        sizes: ["Box of 6"],
        bestseller: true
    },
    {
        _id: "grocery014",
        name: "Panthecell Repair Ointment",
        description: "Intensive skin barrier repair ointment.",
        price: 650,
        image: [panthecell_img],
        category: "K-Beauty",
        subCategory: "Skincare",
        sizes: ["30ml"],
        bestseller: false
    },
    {
        _id: "grocery015",
        name: "Premium Korean Singo Pear",
        description: "Large, sweet, and juicy Korean Singo Pear.",
        price: 220,
        image: [pear_img],
        category: "Fresh Produce",
        subCategory: "Fruits",
        sizes: ["1 Piece"],
        bestseller: true
    },
    {
        _id: "grocery016",
        name: "Nongshim Shin Ramyun",
        description: "Spicy and savory classic Korean instant ramen.",
        price: 60,
        image: [rameyon_img],
        category: "K-Food",
        subCategory: "Noodles",
        sizes: ["1 Pack", "Box of 5"],
        bestseller: true
    },
    {
        _id: "grocery017",
        name: "Fresh Red Apple",
        description: "Crisp and sweet fresh red apples.",
        price: 120,
        image: [redapple_img],
        category: "Fresh Produce",
        subCategory: "Fruits",
        sizes: ["1 kg"],
        bestseller: false
    },
    {
        _id: "grocery018",
        name: "Sweet Red Kiwi",
        description: "Unique and sweet red-fleshed kiwi.",
        price: 250,
        image: [redkii_img],
        category: "Fresh Produce",
        subCategory: "Fruits",
        sizes: ["500g"],
        bestseller: false
    },
    {
        _id: "grocery019",
        name: "Nongshim Neoguri Cup Noodles",
        description: "Spicy seafood udon style cup noodles.",
        price: 65,
        image: [seafood_img],
        category: "K-Food",
        subCategory: "Noodles",
        sizes: ["1 Cup"],
        bestseller: true
    },
    {
        _id: "grocery020",
        name: "Assorted Twigim (Korean Tempura)",
        description: "Crispy fried Korean street food snacks.",
        price: 180,
        image: [tigim_img],
        category: "Korean Food Stall",
        subCategory: "Street Food",
        sizes: ["1 Serving"],
        bestseller: false
    },
    {
        _id: "grocery021",
        name: "Hydrating Facial Toner",
        description: "Deeply hydrating and soothing facial toner.",
        price: 550,
        image: [toner_img],
        category: "K-Beauty",
        subCategory: "Skincare",
        sizes: ["150ml"],
        bestseller: false
    },
    {
        _id: "grocery022",
        name: "Grain Crispy Roll 21",
        description: "Healthy and delicious baked grain crispy rolls.",
        price: 190,
        image: [ullacrispyroll_img],
        category: "Korean Snacks",
        subCategory: "Snacks",
        sizes: ["1 Bag"],
        bestseller: true
    },
    {
        _id: "grocery023",
        name: "Special Premium Ramen",
        description: "Delicious premium Korean ramen.",
        price: 85,
        image: [hero_ramen_img],
        category: "K-Food",
        subCategory: "Noodles",
        sizes: ["1 Pack"],
        bestseller: true
    }
]