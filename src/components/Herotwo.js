import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
   
    <Carousel
    autoplay={true}
    loop={true}
    transition={{ duration: 2 }} 
     className="rounded-xl overflow-clip hero object-cover mx-auto max-h-96s mb-3"
     navigation={({ setActiveIndex, activeIndex, length }) => (
       <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
         {new Array(length).fill("").map((_, i) => (
           <span
             key={i}
             className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
               activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
             }`}
             onClick={() => setActiveIndex(i)}
           />
         ))}
       </div>
     )}
   >
    <div className="relative h-full w-full">
     <img
       src={require('../images/clarke-sanders-ybPJ47PMT_M-unsplash.jpg')}
      //  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
       alt="image1"
       className="h-full w-full object-cover"
     />
     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
       <div className="w-3/4 text-center md:w-2/4">
         <Typography
           variant="h1"
           color="white"
           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
         >
           The Beauty of Nature
         </Typography>
         <Typography
           variant="lead"
           color="white"
           className="mb-12 opacity-80"
         >
           It is not so much for its beauty that the forest makes a claim
           upon men&apos;s hearts, as for that subtle something, that quality
           of air that emanation from old trees, that so wonderfully changes
           and renews a weary spirit.
         </Typography>
         <div className="flex justify-center gap-2">
           <Button size="lg" color="white">
             Explore
           </Button>
           <Button size="lg" color="white" variant="text">
             Gallery
           </Button>
         </div>
       </div>
     </div>
   </div>


    <div className="relative h-full w-full">
     <img
       src={require('../images/pexels-nicolas-postiglioni-848554.jpg')}
      //  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
       alt="image1"
       className="h-full w-full object-contain"
     />
     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
       <div className="w-3/4 text-center md:w-2/4">
         <Typography
           variant="h1"
           color="white"
           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
         >
           The Beauty of Nature
         </Typography>
         <Typography
           variant="lead"
           color="white"
           className="mb-12 opacity-80"
         >
           It is not so much for its beauty that the forest makes a claim
           upon men&apos;s hearts, as for that subtle something, that quality
           of air that emanation from old trees, that so wonderfully changes
           and renews a weary spirit.
         </Typography>
         <div className="flex justify-center gap-2">
           <Button size="lg" color="white">
             Explore
           </Button>
           <Button size="lg" color="white" variant="text">
             Gallery
           </Button>
         </div>
       </div>
     </div>
   </div>
    <div className="relative h-full w-full">
     <img
       src={require('../images/atikh-bana-_KaMTEmJnxY-unsplash.jpg')}
      //  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
       alt="image1"
       className="h-full w-full object-cover"
     />
     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
       <div className="w-3/4 text-center md:w-2/4">
         <Typography
           variant="h1"
           color="white"
           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
         >
           The Beauty of Nature
         </Typography>
         <Typography
           variant="lead"
           color="white"
           className="mb-12 opacity-80"
         >
           It is not so much for its beauty that the forest makes a claim
           upon men&apos;s hearts, as for that subtle something, that quality
           of air that emanation from old trees, that so wonderfully changes
           and renews a weary spirit.
         </Typography>
         <div className="flex justify-center gap-2">
           <Button size="lg" color="white">
             Explore
           </Button>
           <Button size="lg" color="white" variant="text">
             Gallery
           </Button>
         </div>
       </div>
     </div>
   </div>



   
   </Carousel>


   

    
  );
}