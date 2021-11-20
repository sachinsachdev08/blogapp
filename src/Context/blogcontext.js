import { createContext } from "react";

const blogs = [{
    id:1,
    title:"5 ways to animate in React",
    category:"Technology",
    img1:"https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png",
    img2:"https://miro.medium.com/max/875/1*08y12Sp1d9cLSKE9nz1EaA.png",
    description:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags.",
    paragraph:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.Let’s talk about them",
    date:"12 August 2021",
    likes:1500,
    tags:["Technology","React","Animation"],
    user:"Rohan Singh",
    joined:"19 April 2020"
},
{
    id:2,
    category:"Bollywood",
    title:"Sooryavanshi Day 1 Box Office Collection",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    description:"Sooryavanshi first day box office collection: Akshay Kumar starter Sooryavanshi is off to a bumper opening, collected Rs 26.29 crore on its first day.",
    paragraph:"With the opening day collection of Rs 26.29 crores, Sooryavanshi is now the second-highest opening day grosser for Akshay Kumar after Mission Mangal, which had grossed Rs 29.16 crore on its opening day. Check the list of Akshay Kumar highest opening day grossers.Akshay Kumar starrer created tremendous pre-release buzz and was always expected to take a good opening at the box office. However, it has exceeded expectations and set the box office on fire. A bumper opening is a testimony that the audience is ready to come out and enjoy movies in theatres.",
    date:"13 October 2021",
    likes:3000,
    tags:["Bollywood", "Sooryavanshi", "Akshay Kumar"],
    user:"Yash",
    joined:"23 October 2020"

},

{
    id:3,
    title:"Velveeta Mac and Cheese",
    category:"Food",
    img1:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    img2:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    description:"If you’re looking for the creamy mac and cheese of your childhood, this is it! Homemade Velveeta cheese sauce with tender mac is what mac and cheese dreams are made of.",
    paragraph:"These days we have fancy mac and cheese with gruyere and breadcrumbs and all that, but do you ever dream of just easy plain mac and cheese, like the box kind, but without the powdered cheese and that mushy pasta? Enter this Velveeta mac and cheese.",
    date:"14 November 2021",
    likes:9000,
    tags:["Food","Cheese","tutorial"],
    user:"Nikhil",
    joined:"12 June 2020"

},  
{
    id:4,
    title:"Red Notice Sequel",
    category:"Hollywood",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    description:"Dwayne Johnson, Ryan Reynolds, and Gal Gadot could return for Red Notice 2, and here’s everything we know about it.",
    paragraph:"Fans are absolutely loving Netflix’s latest action-comedy movie Red Notice. Premiered on Nov 12, 2021, the big-budget spectacle records the biggest opening in Netflix history. It garnered more than 4 million views in the first weekend in the United States. This feat becomes even more impressive as critics have penned down the movie and it has premiered on Netflix post a limited release in theatres on Nov 5, 2021.",
    date:"15 November 2021",
    likes:6000,
    tags:["Hollywood","Dwayne Johnshon", "Ryan Reynolds"],
    user:"Rohit",
    joined:"10 December 2020"
    
},
{
    id:5,
    title:"Change Your Breathing, Change Your Life",
    category:"Fitness",
    img1:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    img2:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    description:"Your environment, stress and how you breathe can alter and even impede your breathing, but simply practicing nasal breathing may be the key to tapping into some powerful health and fitness benefits.",
    paragraph:"The good news is that simply practicing nasal breathing can turn it all around.Taking slower, longer breaths in and out through your nose can help with everything from reducing anxiety to boosting athletic performance. Basically, nasal breathing slows your rate of breathing down, which means your body doesn’t have to work as hard to get oxygen into your bloodstream. This is great for overall health and athletic performance, according to a 2018 study in the International Journal of Kinesiology and Sports Science.",
    date:"12 June 2021",
    likes:5000,
    tags:["Fitness","Environment","Nature"],
    user:"Rohit Gupta",
    joined:"12 June 2020"
},
{
    id:1,
    title:"5 ways to animate in React",
    category:"Technology",
    img1:"https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png",
    img2:"https://miro.medium.com/max/875/1*08y12Sp1d9cLSKE9nz1EaA.png",
    description:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags.",
    paragraph:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.Let’s talk about them",
    date:"12 August 2021",
    likes:0,
    tags:["Technology","React","Animation"]
},
{
    id:2,
    category:"Bollywood",
    title:"Sooryavanshi Day 1 Box Office Collection",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    description:"Sooryavanshi first day box office collection: Akshay Kumar starter Sooryavanshi is off to a bumper opening, collected Rs 26.29 crore on its first day.",
    paragraph:"With the opening day collection of Rs 26.29 crores, Sooryavanshi is now the second-highest opening day grosser for Akshay Kumar after Mission Mangal, which had grossed Rs 29.16 crore on its opening day. Check the list of Akshay Kumar highest opening day grossers.Akshay Kumar starrer created tremendous pre-release buzz and was always expected to take a good opening at the box office. However, it has exceeded expectations and set the box office on fire. A bumper opening is a testimony that the audience is ready to come out and enjoy movies in theatres.",
    date:"13 October 2021",
    likes:0,
    tags:["Bollywood", "Sooryavanshi", "Akshay Kumar"]

},

{
    id:3,
    title:"Velveeta Mac and Cheese",
    category:"Food",
    img1:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    img2:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    description:"If you’re looking for the creamy mac and cheese of your childhood, this is it! Homemade Velveeta cheese sauce with tender mac is what mac and cheese dreams are made of.",
    paragraph:"These days we have fancy mac and cheese with gruyere and breadcrumbs and all that, but do you ever dream of just easy plain mac and cheese, like the box kind, but without the powdered cheese and that mushy pasta? Enter this Velveeta mac and cheese.",
    date:"14 November 2021",
    likes:0,
    tags:["Food","Cheese","tutorial"]

},  
{
    id:4,
    title:"Red Notice Sequel",
    category:"Hollywood",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    description:"Dwayne Johnson, Ryan Reynolds, and Gal Gadot could return for Red Notice 2, and here’s everything we know about it.",
    paragraph:"Fans are absolutely loving Netflix’s latest action-comedy movie Red Notice. Premiered on Nov 12, 2021, the big-budget spectacle records the biggest opening in Netflix history. It garnered more than 4 million views in the first weekend in the United States. This feat becomes even more impressive as critics have penned down the movie and it has premiered on Netflix post a limited release in theatres on Nov 5, 2021.",
    date:"15 November 2021",
    likes:0,
    tags:["Dwayne Johnshon", "Ryan Reynolds","Hollywood"]
},
{
    id:5,
    title:"Change Your Breathing, Change Your Life",
    category:"Fitness",
    img1:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    img2:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    description:"Your environment, stress and how you breathe can alter and even impede your breathing, but simply practicing nasal breathing may be the key to tapping into some powerful health and fitness benefits.",
    paragraph:"The good news is that simply practicing nasal breathing can turn it all around.Taking slower, longer breaths in and out through your nose can help with everything from reducing anxiety to boosting athletic performance. Basically, nasal breathing slows your rate of breathing down, which means your body doesn’t have to work as hard to get oxygen into your bloodstream. This is great for overall health and athletic performance, according to a 2018 study in the International Journal of Kinesiology and Sports Science.",
    date:"12 June 2021",
    likes:0,
    tags:["Fitness","Environment","Nature"]
},
{
    id:1,
    title:"5 ways to animate in React",
    category:"Technology",
    img1:"https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png",
    img2:"https://miro.medium.com/max/875/1*08y12Sp1d9cLSKE9nz1EaA.png",
    description:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags.",
    paragraph:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.Let’s talk about them",
    date:"12 August 2021",
    likes:0,
    tags:["Technology","React","Animation"]
},
{
    id:2,
    category:"Bollywood",
    title:"Sooryavanshi Day 1 Box Office Collection",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    description:"Sooryavanshi first day box office collection: Akshay Kumar starter Sooryavanshi is off to a bumper opening, collected Rs 26.29 crore on its first day.",
    paragraph:"With the opening day collection of Rs 26.29 crores, Sooryavanshi is now the second-highest opening day grosser for Akshay Kumar after Mission Mangal, which had grossed Rs 29.16 crore on its opening day. Check the list of Akshay Kumar highest opening day grossers.Akshay Kumar starrer created tremendous pre-release buzz and was always expected to take a good opening at the box office. However, it has exceeded expectations and set the box office on fire. A bumper opening is a testimony that the audience is ready to come out and enjoy movies in theatres.",
    date:"13 October 2021",
    likes:0,
    tags:["Bollywood", "Sooryavansham", "Akshay Kumar"]

},

{
    id:3,
    title:"Velveeta Mac and Cheese",
    category:"Food",
    img1:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    img2:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    description:"If you’re looking for the creamy mac and cheese of your childhood, this is it! Homemade Velveeta cheese sauce with tender mac is what mac and cheese dreams are made of.",
    paragraph:"These days we have fancy mac and cheese with gruyere and breadcrumbs and all that, but do you ever dream of just easy plain mac and cheese, like the box kind, but without the powdered cheese and that mushy pasta? Enter this Velveeta mac and cheese.",
    date:"14 November 2021",
    likes:0,
    tags:["Food","Cheese","tutorial"]

},  
{
    id:4,
    title:"Red Notice Sequel",
    category:"Hollywood",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    description:"Dwayne Johnson, Ryan Reynolds, and Gal Gadot could return for Red Notice 2, and here’s everything we know about it.",
    paragraph:"Fans are absolutely loving Netflix’s latest action-comedy movie Red Notice. Premiered on Nov 12, 2021, the big-budget spectacle records the biggest opening in Netflix history. It garnered more than 4 million views in the first weekend in the United States. This feat becomes even more impressive as critics have penned down the movie and it has premiered on Netflix post a limited release in theatres on Nov 5, 2021.",
    date:"15 November 2021",
    likes:0,
    tags:["Dwayne Johnshon", "Ryan Reynolds","Hollywood"]
},
{
    id:5,
    title:"Change Your Breathing, Change Your Life",
    category:"Fitness",
    img1:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    img2:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    description:"Your environment, stress and how you breathe can alter and even impede your breathing, but simply practicing nasal breathing may be the key to tapping into some powerful health and fitness benefits.",
    paragraph:"The good news is that simply practicing nasal breathing can turn it all around.Taking slower, longer breaths in and out through your nose can help with everything from reducing anxiety to boosting athletic performance. Basically, nasal breathing slows your rate of breathing down, which means your body doesn’t have to work as hard to get oxygen into your bloodstream. This is great for overall health and athletic performance, according to a 2018 study in the International Journal of Kinesiology and Sports Science.",
    date:"12 June 2021",
    likes:0,
    tags:["Fitness","Environment","Nature"]
}
];


export const BlogContext = createContext();

function BlogProvider(props){
    return(
        <BlogContext.Provider value = {blogs}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;