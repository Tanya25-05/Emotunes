import React from 'react';
import { aboutUs } from "../../assets/aboutUs.png"
export const AboutUs = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col md:flex-row'>
        {/* Text section */}
        <div className='md:w-1/2'>
          <p className="text-bold text-white">About Us</p>
          <div>
            <p>
              Lorem epsum
            </p>
          </div>
        </div>
        {/* Image section */}
        <div className='md:w-1/2'>
          <img src={aboutUs} alt="About Us" />
        </div>
      </div>
    </div>
  );
}








// import React from 'react'

// export const AboutUs = () => {
//   return (
//     <div className='flex justify-center items-center'>
//         <p className="text-bold text-white"> About Us</p>
//     <div className='flex flex-col'>
//         <div className=''>
//             <p>
//             Lorem epsum
//             </p>
//         </div>

//         <div className=''>
//             <img src={}/>
//         </div>
//     </div>
    {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
//     </div> */}
//   )
// }
