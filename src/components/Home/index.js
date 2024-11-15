import { useEffect, useState } from "react";
import CardItem from "../CardItem"
import "./index.css"

const data=[
    {
      id: 1,
      title: "Fjallraven ackpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity:1
    },
    {
      id: 2,
      title: "Mens T-Shirts ",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
     quantity:1
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     quantity:1
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
     description: "The color could be slightly different between on the screen and in practice.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
     quantity:1
    },
    {
      id4: 5,
      title: "Chain Bracelet",
      price: 695,
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. ",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
     quantity:1
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
     quantity:1
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
     quantity:1
    },
    {
      id: 8,
      title: "Stainless Steel Double",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
     quantity:1
    },
    {
      id: 9,
      title: "External Hard Drive",
      price: 64,
      description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
     quantity:1
    },
    {
      id: 10,
      title: "SanDisk SSD",
      price: 109,
      description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive. ",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
     quantity:1
    },
    {
      id: 11,
      title: "Boost SATA III 2.5",
      price: 109,
      description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
     quantity:1
    },
    {
      id: 12,
      title: "External Hard Drive",
      price: 114,
      description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
     quantity:1
    },
    {
      id: 13,
      title: "Acer",
      price: 599,
      description: "250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
     quantity:1
    },
    {
      id: 14,
      title: "Samsung Monitor",
      price: 999.99,
      description: "HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
     quantity:1
    },
    {
      id: 15,
      title: "Jacket Winter Coats",
      price: 56.99,
      description: "Note:The Jackets is US standard size, Please choose size as your usual wear",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
     quantity:1
    },
    {
      id: 16,
      title: "Leather Moto Biker Jacket",
      price: 29.95,
      description: "2 pockets of front, 2-For-One Hooded denim style faux leather jacket",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
     quantity:1
    },
    {
      id: 17,
      title: "Rain Jacket Women",
      price: 39.99,
      description: "Lightweight Long sleeve with hooded, adjustable drawstring waist design.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
     quantity:1
    },
    {
      id: 18,
      title: "Sleeve Boat Neck V ",
      price: 9.85,
      description: "Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
     quantity:1
    },
    {
      id: 19,
      title: "Women's Short Sleeve Moisture",
      price: 7.95,
      description: "Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
     quantity:1
    },
    {
      id: 20,
      title: "Womens T-Shirt",
      price: 12.99,
      description: "Print,V-Neck,Fashion Tees,The fabric is soft and has some stretch.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
     quantity:1
    }
  ]
const length=data.length;
console.log(length)
let pageSize=5;

const Home = ({search}) => {
    const [allData,setAllData]=useState(data)
    const [pageIndex,setPageIndex]=useState(1)
    const [pageData,setPageData]=useState([])

    useEffect(()=>{
        
        nextPageData();
    },[pageIndex,allData])

    const nextPageData=()=>{
        let start=pageSize*(pageIndex-1);
       /* let end=start+pageSize;
        while (start<0) {
            start=0
            end=5
            
        }
        if(end > length){
            start=16;
            end=length;
        }*/
        const end = Math.min(start + pageSize, allData.length);
        let newData=allData.slice(start,end);
        setPageData(newData);  
        

    }


    const Increase=(id)=>{
        console.log(id)
        setAllData((prevData)=>
        prevData.map((each)=>each.id===id?{...each,quantity:each.quantity+1}:each))  
        }
    

    const Decrease=(id)=>{
        setAllData((prevData)=>
            prevData.map((each)=>each.id===id?{...each,quantity:each.quantity>1?each.quantity-1:0}:each))
        }

        const filterData=pageData.filter((each)=>each.title.includes(search))
console.log(filterData)

  return (
    <div className="home-container">
<h2 className="home-heading">Products</h2>
<div className="items-container">
    
    {filterData.map((each)=>{
        return( <CardItem key={each.id} item={each} Increase={Increase} Decrease={Decrease}/>)
    })}
    {filterData.length===0?<p>No Data found</p>:null}

   
   
</div>
<div className="page-btn">
    <button className="btn btn-sm btn-secondary align-self-end" disabled={pageIndex==1}  onClick={()=>setPageIndex(pageIndex-1)}>Prev</button>
    <button className="btn btn-sm btn-secondary align-self-end" disabled={pageIndex==Math.ceil(allData.length/pageSize)} onClick={()=>setPageIndex(pageIndex+1)}>Next</button>
    </div>
    </div>
  )
}

export default Home


/* <div className="card-container">
        <h2>Title</h2>
        <img src={data[0].image} className="card-img" alt=""/>
        <p className="card-desc">{data[0].description}</p>
        <p className="card-price">{data[0].price}.Rs</p>
        <div className="btn-container">
            <button className="btn btn-secondary btn-sm">+</button>
            <p>{data[0].quantity}</p>
            <button className="btn btn-secondary btn-sm ">+</button>
        </div>
    </div> */