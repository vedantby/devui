import React from 'react';

import { CircleCard } from '../';

const Tools = () => {
  return (
    <>
      <div>
        <h3 className="text-xl font-medium text-primary dark:text-white text-center">
          Foydalanilgan elementlar
        </h3>
        <div className="flex overflow-x-scroll my-0 md:my-10 scrollbar-hide">
          <div className="flex justify-center mx-auto my-8 space-x-4 md:space-x-8 cursor-auto">
            <CircleCard
              src="/images/tools/javascript.png"
              title="Javascript"
              alt="Javascript logo"
            />
            <CircleCard
              src="/images/react.png"
              title="React js"
              alt="React logo"
            />
            <CircleCard
              src="/images/tools/next.svg"
              isHidden="block dark:hidden"
              title="Next js"
              alt="Next light logo"
            />
            <CircleCard
              src="/images/tools/next-dark.svg"
              isHidden="hidden dark:block"
              title="Next js"
              alt="Next dark logo"
            />
            <CircleCard
              src="/images/tailwind.svg"
              title="Tailwind css"
              alt="Tailwind logo"
            />
            <CircleCard
              src="/images/tools/react-icons.svg"
              title="React Icons"
              alt="React icons logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
