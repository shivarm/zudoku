"use client";

import { BentoGrid, BentoGridItem } from "@/app/components/BentoGrid";
import { TechStackBubble } from "@/app/components/TechStack";
import { cn } from "@/app/utils/cn";
import { type ReactNode, useState } from "react";

export function FeatureGrid() {
  return (
    <div className="max-w-4xl m-auto flex gap-6 flex-col">
      <h3 className="text-4xl font-bold text-center">
        Zudoku can do <span className="text-[#ff00bd]">more</span> than docs
      </h3>
      <p className="text-center text-gray-400">
        Zudoku is in beta, but it&apos;s already a powerful tool for building
        interactive API documentation. We are constantly adding new features and
        improving the platform. Here is what we have so far:
      </p>
      <BentoGrid className="w-full md:auto-rows-[20rem]">
        {features.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[10rem] mt-4">
        {simpleFeatures.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-black/20">
    {children}
  </div>
);

const InkeepLogo = () => {
  const [hover, setHover] = useState(false);
  const props = !hover
    ? {
        className: "transition",
        stroke: "white",
        fill: "transparent",
        paintOrder: "stroke",
        strokeDasharray: 3,
      }
    : {};
  return (
    <svg
      className="h-20 w-44 fill-white"
      viewBox="0 0 337 81"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g clipPath="url(#clip0_205_14)">
        <path
          d="M95.8611 6.03847V68.9606C95.8611 72.4644 92.8516 75.2383 89.3651 74.9463L50.7565 71.9535C46.2056 71.5885 41.6548 72.6104 37.6912 74.8368L24.369 82.3188C23.1946 82.9758 21.9101 81.6254 22.6441 80.4939L29.3235 70.3111L35.5258 60.8216C36.1865 59.7997 37.471 59.3252 38.6454 59.6902C48.3709 62.829 59.381 59.2157 65.2164 50.3103C72.1894 39.6164 69.1433 25.3093 58.4268 18.3747C47.6736 11.4036 33.2871 14.4695 26.3141 25.1268C20.4787 34.0688 21.6532 45.5291 28.4427 53.0841C29.2501 53.9966 29.3602 55.347 28.6629 56.3689L20.809 68.4132C20.3319 69.1066 19.5245 69.5081 18.6804 69.4716L4.29393 68.3767C1.83501 68.1942 0 66.2233 0 63.8145V11.1482C0 8.77581 1.83501 6.76843 4.25723 6.58594L89.3651 0.0163369C92.8516 -0.239148 95.8611 2.53468 95.8611 6.03847ZM45.6918 21.9515C36.9205 21.9515 29.8006 29.0321 29.8006 37.755C29.8006 41.9888 31.4888 45.8575 34.2413 48.7044C35.9296 50.4198 37.9848 51.7702 40.2969 52.6096C41.9851 53.2301 43.7834 53.5586 45.6918 53.5586C54.4632 53.5586 61.583 46.478 61.583 37.755C61.583 28.9956 54.4632 21.9515 45.6918 21.9515Z"
          fill="url(#paint0_linear_205_14)"
          {...props}
        />
        <path
          {...props}
          d="M129.438 7.46181C129.438 9.54218 128.778 11.1846 127.42 12.3525C126.062 13.5569 124.484 14.1409 122.649 14.1409C120.814 14.1409 119.236 13.5569 117.878 12.3525C116.52 11.1481 115.859 9.54218 115.859 7.46181C115.859 5.38144 116.52 3.73904 117.878 2.57111C119.236 1.36668 120.814 0.782715 122.649 0.782715C124.484 0.782715 126.062 1.36668 127.42 2.57111C128.778 3.73904 129.438 5.38144 129.438 7.46181ZM128.374 58.9237H116.997V18.9951H128.374V58.9237Z"
        />
        <path
          {...props}
          d="M135.863 20.3455C137.808 19.798 140.304 19.2871 143.35 18.7761C146.396 18.3016 149.625 18.0461 152.965 18.0461C156.378 18.0461 159.204 18.4841 161.48 19.3601C163.755 20.236 165.553 21.5134 166.875 23.1193C168.196 24.7252 169.15 26.6596 169.701 28.886C170.251 31.1123 170.545 33.5942 170.545 36.3315V58.8872H159.168V37.7185C159.168 34.0687 158.69 31.4773 157.7 29.9809C156.745 28.448 154.91 27.7181 152.268 27.7181C151.46 27.7181 150.58 27.7546 149.662 27.8275C148.745 27.9005 147.937 28.01 147.203 28.083V58.9237H135.826V20.3455H135.863Z"
        />
        <path
          {...props}
          d="M188.965 33.3387C190.066 32.1343 191.241 30.8569 192.452 29.5794C193.663 28.2655 194.801 26.9881 195.938 25.6742C197.039 24.3968 198.104 23.1558 199.095 22.0244C200.086 20.8565 200.93 19.871 201.664 18.9951H215.206C212.49 22.0609 209.885 25.0172 207.316 27.8275C204.746 30.6379 201.921 33.5212 198.874 36.514C200.416 37.9009 201.994 39.5068 203.609 41.4047C205.224 43.3026 206.802 45.2735 208.343 47.3174C209.885 49.3612 211.279 51.3686 212.527 53.4125C213.811 55.4564 214.876 57.2813 215.72 58.9602H202.655C201.847 57.6462 200.93 56.1863 199.865 54.5804C198.838 52.9745 197.737 51.3686 196.562 49.7992C195.388 48.1933 194.177 46.6604 192.856 45.2005C191.571 43.7406 190.287 42.4997 189.002 41.4777V58.9967H177.625V1.84112L189.002 0.0162354V33.3387H188.965Z"
        />
        <path
          {...props}
          d="M214.838 39.2515C214.838 35.7112 215.388 32.6089 216.489 29.9445C217.59 27.2802 219.022 25.0903 220.82 23.3019C222.618 21.5136 224.637 20.1996 226.949 19.2872C229.261 18.3747 231.647 17.9368 234.069 17.9368C239.757 17.9368 244.271 19.6887 247.574 23.1195C250.878 26.5867 252.529 31.6964 252.529 38.412C252.529 39.069 252.492 39.7989 252.456 40.5654C252.419 41.3684 252.346 42.0618 252.309 42.6458H226.509C226.765 44.9816 227.866 46.8065 229.775 48.1934C231.72 49.5439 234.289 50.2373 237.555 50.2373C239.647 50.2373 241.702 50.0548 243.684 49.6533C245.703 49.2884 247.318 48.8139 248.602 48.2664L250.144 57.4639C249.52 57.7559 248.712 58.0843 247.685 58.3763C246.657 58.6683 245.519 58.9603 244.271 59.1793C243.024 59.3983 241.702 59.5807 240.271 59.7632C238.84 59.9092 237.409 59.9822 236.014 59.9822C232.417 59.9822 229.261 59.4348 226.582 58.3763C223.903 57.3179 221.701 55.858 219.939 53.9966C218.178 52.1352 216.893 49.9453 216.049 47.427C215.278 44.9451 214.838 42.2078 214.838 39.2515ZM241.556 34.9447C241.519 33.9958 241.335 33.0469 241.042 32.1344C240.748 31.222 240.345 30.419 239.757 29.6891C239.17 28.9956 238.436 28.4116 237.555 27.9372C236.675 27.4992 235.574 27.2437 234.252 27.2437C232.968 27.2437 231.904 27.4627 230.986 27.9007C230.068 28.3386 229.298 28.8861 228.711 29.6161C228.087 30.3095 227.646 31.149 227.316 32.0979C226.986 33.0469 226.729 33.9958 226.582 34.9447H241.556Z"
        />
        <path
          {...props}
          d="M256.678 39.2515C256.678 35.7112 257.228 32.6089 258.329 29.9445C259.43 27.2802 260.862 25.0903 262.66 23.3019C264.458 21.5136 266.477 20.1996 268.789 19.2872C271.101 18.3747 273.486 17.9368 275.909 17.9368C281.597 17.9368 286.111 19.6887 289.414 23.1195C292.717 26.5867 294.369 31.6964 294.369 38.412C294.369 39.069 294.332 39.7989 294.295 40.5654C294.259 41.3684 294.185 42.0618 294.149 42.6458H268.348C268.605 44.9816 269.706 46.8065 271.615 48.1934C273.56 49.5439 276.129 50.2373 279.395 50.2373C281.487 50.2373 283.542 50.0548 285.524 49.6533C287.543 49.2884 289.157 48.8139 290.442 48.2664L291.983 57.4639C291.359 57.7559 290.552 58.0843 289.524 58.3763C288.497 58.6683 287.359 58.9603 286.111 59.1793C284.864 59.3983 283.542 59.5807 282.111 59.7632C280.68 59.9092 279.248 59.9822 277.854 59.9822C274.257 59.9822 271.101 59.4348 268.422 58.3763C265.743 57.3179 263.541 55.858 261.779 53.9966C260.017 52.1352 258.733 49.9453 257.889 47.427C257.118 44.9451 256.678 42.2078 256.678 39.2515ZM283.396 34.9447C283.359 33.9958 283.175 33.0469 282.882 32.1344C282.588 31.222 282.184 30.419 281.597 29.6891C281.01 28.9956 280.276 28.4116 279.395 27.9372C278.514 27.4992 277.413 27.2437 276.092 27.2437C274.808 27.2437 273.743 27.4627 272.826 27.9007C271.908 28.3386 271.138 28.8861 270.55 29.6161C269.927 30.3095 269.486 31.149 269.156 32.0979C268.826 33.0469 268.569 33.9958 268.422 34.9447H283.396Z"
        />
        <path
          {...props}
          d="M337.31 38.9594C337.31 42.0617 336.943 44.872 336.172 47.3904C335.402 49.9087 334.301 52.0986 332.796 53.9235C331.328 55.7484 329.493 57.1718 327.291 58.1572C325.089 59.1791 322.593 59.6901 319.731 59.6901C318.153 59.6901 316.685 59.5441 315.29 59.2521C313.932 58.9602 312.574 58.5222 311.326 57.9747V73.0118L299.949 74.9462V20.3455C300.977 20.0535 302.151 19.7615 303.472 19.4696C304.794 19.1776 306.188 18.9586 307.62 18.7396C309.088 18.5206 310.556 18.3746 312.06 18.2286C313.565 18.1191 314.996 18.0461 316.391 18.0461C319.694 18.0461 322.667 18.5571 325.236 19.5426C327.841 20.528 330.007 21.9149 331.805 23.7033C333.603 25.4917 334.961 27.6816 335.879 30.2729C336.833 32.9007 337.31 35.7841 337.31 38.9594ZM325.713 39.2514C325.713 35.7476 324.905 32.9737 323.364 30.8569C321.786 28.74 319.437 27.7181 316.354 27.7181C315.327 27.7181 314.409 27.7546 313.528 27.8275C312.648 27.9005 311.95 28.01 311.4 28.083V48.5218C312.097 48.9598 313.051 49.3612 314.189 49.6532C315.327 49.9452 316.501 50.0912 317.675 50.0912C322.997 50.1277 325.713 46.5144 325.713 39.2514Z"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_205_14"
          x1="4.75969"
          y1="69.4021"
          x2="71.8979"
          y2="23.8566"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00BFEA"></stop>
          <stop offset="1" stopColor="#26D6FF"></stop>
        </linearGradient>
        <clipPath id="clip0_205_14">
          <rect width="337" height="81" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

const OpenApiHeader = () => {
  const [hover, setHover] = useState(false);
  const props = !hover
    ? {
        // fill: "rgba(255,255,255,0.4)",
        stroke: "white",
        fill: "transparent",
      }
    : {};

  return (
    <svg
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="115"
    >
      <path
        d="M32.6 67.4H3.044l.017.433.05.833.022.356.08.962.02.215.115 1.065a1.16 1.16 0 0 0 .011.103l.15 1.144c.342 2.37.85 4.704 1.53 6.998l.01.03.353 1.14.02.063.325.968.086.244.304.837.143.378.27.7.213.52.226.54.3.658.175.4.368.787.122.252.443.895.07.137.54 1.025.115.2L34.447 74c-.996-2.1-1.616-4.332-1.846-6.6zM4.44 80.962l.008.027.954-.3z"
        fill="#93d500"
        {...props}
      />
      <path
        d="M39.865 80.977l-20.9 20.89.323.298.893.792.71.602.192.16.812.654.105.083.894.686a.23.23 0 0 1 .034.025l3.895 2.633.14.085.767.453.47.268.446.25.814.44.113.06 2.303 1.118 11.247-27.32c-1.142-.61-2.238-1.334-3.27-2.18z"
        fill="#4d5a31"
        {...props}
      />
      <path
        d="M37.697 78.904l-.65-.765-.54-.697-.578-.818-.54-.843-25.276 15.225 1.302 2.045.105.154.006.01 1.358 1.914.03.04.03.04.614.8.737.915.158.19.604.713.266.302.524.6.297.322.135.146.4.42.16.164.7.716 20.85-20.85-.683-.73z"
        fill="#6ba43a"
        {...props}
      />
      <path
        d="M65.334 80.966l-.697.54.052.087 15.202 25.235 2.08-1.432c1.47-1.085 2.895-2.26 4.267-3.527l-20.822-20.82z"
        fill="#4d5a31"
        {...props}
      />
      <g fill="#93d500" {...props}>
        <path d="M77.97 108.03l.034-.02-.001-.001-.033.02zm-.015.01h.001 0z" />
        <path d="M78.003 108l.2-.1-.004-.007-.196.117zm-.043.035l.01-.005z" />
        <path d="M77.955 108.04h.001l-.037-.062zm.015-.01l.034-.018-.034.018zm-.02.01l-.01.005.01-.004z" />
        <path d="M77.95 108.04v.001l.005-.003h-.001z" />
        <path d="M77.96 108.035l-.006.003.015-.01zm.044-.023l.198-.112-.198.112zm.198-.112l-.004-.007zm-.268.15h.002z" />
        <path d="M77.942 108.047l-.006.003.006-.003z" />
        <path d="M77.682 107.036l-14.706-24.4-.874.487-.896.45a20.15 20.15 0 0 1-8.632 1.953 20.1 20.1 0 0 1-5.742-.838l-.945-.332-.944-.335-11.226 27.265.082.03.086.033h.001l.022.01 2.155.825a49.94 49.94 0 0 0 10.12 2.422 17.83 17.83 0 0 1 .404.054l1.222.133.198.017.98.082.333.02.858.05.526.02.682.024 1.218.015a49.76 49.76 0 0 0 8.233-.686l.138-.02.864-.157.5-.095.505-.106.842-.185.152-.035a49.85 49.85 0 0 0 11.897-4.436l.001-.001.73-.4 1.483-.836-.024-.07.037.063.048-.028.195-.117zM39.876 49.852l.697-.54-.052-.087L25.32 24l-2.085 1.436c-1.47 1.082-2.893 2.257-4.262 3.522L39.795 49.77z" />
      </g>
      <path
        d="M17.53 30.334l-1.384 1.445c-1.538 1.665-2.944 3.4-4.212 5.22l-.182.26-.423.625-.43.656-.156.24a49.48 49.48 0 0 0-7.7 24.627l-.027 1-.017 1h29.488l.048-1 .055-1a20.01 20.01 0 0 1 4.447-10.74c.2-.256.447-.496.672-.743s.432-.504.67-.742zm60.843-7.32l-.122-.073-.783-.465-.457-.26-.46-.256-.8-.432-.126-.066c-1.73-.904-3.505-1.7-5.318-2.4l-.14-.054-1.2-.433c-3.22-1.125-6.552-1.914-9.936-2.358l-.415-.056-.415-.046-.8-.087-.224-.02-.953-.08-1.2-.073-.434-.017v29.56c1.517.157 3.02.48 4.478.975L80.83 24.63a48.97 48.97 0 0 0-2.464-1.614z"
        fill="#4d5a31"
        {...props}
      />
      <path
        d="M27.53 23.78l-.516-.857zm-.53-.86l.003.005zm24.606-7.095l-1 .02c-2.086.084-4.168.297-6.233.643l-.136.023-.865.157-.5.094-.508.106-.84.184-.153.034a49.89 49.89 0 0 0-11.898 4.438l-2.47 1.394.003.005 15.22 25.27.874-.487a19.71 19.71 0 0 1 .895-.451 20.05 20.05 0 0 1 6.601-1.85l1-.08 1-.034.001-29.487c-.334-.001-.667.013-1 .02z"
        fill="#6ba43a"
        {...props}
      />
      <path
        d="M102.15 62.97l-.048-.795-.026-.397-.077-.934-.02-.242-.11-1.043-.01-.084-.005-.04-.15-1.124c-.001-.01-.002-.025-.005-.035a49.56 49.56 0 0 0-1.524-6.972l-.014-.044-.328-1.063-.045-.14-.32-.954-.09-.258-.3-.823-.15-.39-.265-.678-.218-.534-.22-.526-.294-.67-.17-.378-.373-.797-.116-.242-.448-.906-.065-.125-.52-1c-.007-.01-.012-.024-.02-.035-.86-1.58-1.802-3.108-2.822-4.578L71.632 58.93a20.5 20.5 0 0 1 .974 4.477h29.56l-.016-.437z"
        fill="#4d5a31"
        {...props}
      />
      <path
        d="M72.722 65.408l-.048 1-.055 1c-.38 3.84-1.863 7.6-4.446 10.74-.2.256-.447.496-.672.743s-.432.504-.67.742l20.85 20.85c.237-.237.46-.482.69-.723l.69-.723c1.543-1.67 2.953-3.42 4.224-5.236l.148-.214.458-.673.395-.605.2-.295c4.782-7.51 7.34-16.02 7.685-24.607l.027-1 .017-1H72.722z"
        fill="#6ba43a"
        {...props}
      />
      <path
        d="M110.967 7.046c-5.395-5.395-14.142-5.395-19.536 0-4.304 4.303-5.164 10.736-2.6 15.902L58.74 53.04c-5.166-2.562-11.6-1.703-15.903 2.6a13.82 13.82 0 0 0 0 19.537 13.82 13.82 0 0 0 19.538-.001c4.303-4.303 5.162-10.736 2.6-15.903l30.09-30.09c5.167 2.562 11.6 1.703 15.902-2.6 5.396-5.393 5.396-14.14.001-19.535z"
        fill="#424143"
        {...props}
      />
    </svg>
  );
};

const PlatformHeader = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="from-orange-500 via-60% via-purple-700 to-indigo-950 rounded-lg flex w-full h-[150px] md:h-full justify-between bg-opacity-30 bg-[linear-gradient(138deg,var(--tw-gradient-stops))] md:bg-[linear-gradient(167deg,var(--tw-gradient-stops))]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 174 68"
        className={cn(
          "transition h-16 scale-[80%] md:scale-100",
          hover && "translate-x-8 translate-y-7",
          !hover && "translate-x-5 translate-y-5",
        )}
      >
        <defs>
          <linearGradient
            id="cloudflare-pages-logo-gradient"
            x1="118.18%"
            x2="10.8%"
            y1="-2.39%"
            y2="101.62%"
          >
            <stop offset="0%" stopColor="#fff"></stop>
            <stop offset="100%" stopColor="#fff"></stop>
            <stop offset="100%" stopColor="#fff"></stop>
          </linearGradient>
        </defs>
        <path
          fill="currentColor"
          d="M75.94 54V30h9.47c5.44 0 8.6 3.36 8.6 8.13 0 4.8-3.21 8.09-8.73 8.09H81V54h-5.07zM81 42.15h3.45c2.9 0 4.32-1.64 4.32-4.02 0-2.39-1.42-3.98-4.35-3.98h-3.42v8zm19.48 12.19c-3.43 0-5.98-1.8-5.98-5.37 0-4.02 3.2-5.21 6.77-5.54 3.12-.3 4.35-.46 4.35-1.62v-.07c0-1.47-.97-2.33-2.67-2.33-1.79 0-2.86.88-3.2 2.07l-4.61-.37c.69-3.28 3.52-5.34 7.84-5.34 4 0 7.64 1.8 7.64 6.09V54h-4.74v-2.5h-.14c-.88 1.68-2.6 2.84-5.26 2.84zm1.43-3.45c2.2 0 3.75-1.44 3.75-3.32v-1.91c-.6.4-2.38.65-3.47.8-1.76.25-2.92.94-2.92 2.35 0 1.37 1.1 2.08 2.64 2.08zm19.32 10.23c-4.86 0-7.63-2.17-8.23-5.01l4.62-.62c.4 1.09 1.52 2.05 3.72 2.05 2.17 0 3.75-.96 3.75-3.43v-3.3h-.2c-.66 1.5-2.27 2.93-5.14 2.93-4.06 0-7.3-2.79-7.3-8.78 0-6.12 3.34-9.2 7.29-9.2 3 0 4.47 1.8 5.14 3.26h.19V36h4.96v18.18c0 4.6-3.66 6.94-8.8 6.94zm.1-11.13c2.4 0 3.79-1.87 3.79-5.05 0-3.15-1.36-5.2-3.79-5.2-2.47 0-3.78 2.14-3.78 5.2 0 3.1 1.33 5.05 3.78 5.05zm19.5 4.36c-5.54 0-8.93-3.56-8.93-9.27 0-5.55 3.44-9.31 8.73-9.31 4.76 0 8.46 3.02 8.46 9.14v1.37h-12.25c0 2.7 1.58 4.35 4.08 4.35 1.66 0 2.95-.72 3.45-2.1l4.62.31c-.7 3.34-3.7 5.51-8.16 5.51zm-4-11.17h7.57a3.55 3.55 0 00-3.68-3.69 3.8 3.8 0 00-3.88 3.7zm29.12-2.05l-4.57.28c-.25-1.16-1.28-2.1-3.01-2.1-1.55 0-2.77.7-2.76 1.78 0 .86.61 1.44 2.29 1.8l3.26.66c3.49.71 5.19 2.27 5.2 4.87-.01 3.55-3.35 5.93-8.02 5.93-4.77 0-7.7-2.12-8.16-5.56l4.9-.26c.31 1.46 1.5 2.22 3.28 2.22 1.74 0 2.9-.76 2.92-1.82-.02-.9-.73-1.48-2.3-1.8l-3.12-.62c-3.52-.7-5.22-2.45-5.2-5.14-.02-3.47 3.02-5.6 7.62-5.6 4.55 0 7.22 2.05 7.67 5.36z"
        />
        <path
          fill="currentColor"
          fillOpacity=".6"
          d="M84.14 17.86h-2.02c-.15-1.04-.94-1.68-2.03-1.68-1.47 0-2.43 1.13-2.43 3.1 0 2.01.98 3.08 2.41 3.08 1.07 0 1.86-.58 2.05-1.6l2.02.02c-.21 1.74-1.68 3.35-4.1 3.35-2.53 0-4.4-1.77-4.4-4.86 0-3.09 1.9-4.85 4.4-4.85 2.19 0 3.84 1.25 4.1 3.44zm2.83-3.31V24H85v-9.45h1.97zm4.23 9.59c-2.16 0-3.5-1.47-3.5-3.66 0-2.2 1.34-3.66 3.5-3.66 2.15 0 3.49 1.46 3.49 3.66 0 2.19-1.34 3.66-3.5 3.66zm0-1.52c.98 0 1.49-.91 1.49-2.15 0-1.24-.51-2.15-1.49-2.15-.99 0-1.5.91-1.5 2.15 0 1.24.51 2.15 1.5 2.15zm8.77-1.64v-4.07h1.97V24h-1.89v-1.29h-.07c-.32.83-1.09 1.38-2.15 1.38-1.43 0-2.4-1-2.4-2.67v-4.51h1.96v4.16c0 .84.49 1.36 1.23 1.36.7 0 1.36-.5 1.35-1.45zm5.6 3.14c-1.6 0-2.87-1.28-2.87-3.66 0-2.43 1.32-3.64 2.87-3.64 1.19 0 1.76.7 2.02 1.28h.06v-3.55h1.96V24h-1.94v-1.14h-.08a2.1 2.1 0 01-2.01 1.26zm.63-1.57c.95 0 1.5-.83 1.5-2.1 0-1.26-.54-2.07-1.5-2.07-.97 0-1.49.85-1.49 2.07 0 1.24.53 2.1 1.5 2.1zm8.3-5.64v1.48h-1.42V24h-1.96v-5.61h-1V16.9h1v-.51c0-1.55 1-2.3 2.32-2.3.61 0 1.15.12 1.4.2l-.35 1.47c-.16-.05-.4-.1-.63-.1-.58 0-.78.28-.78.76v.48h1.41zm2.62-2.36V24h-1.97v-9.45h1.97zm3.04 9.58c-1.35 0-2.35-.7-2.35-2.11 0-1.58 1.26-2.05 2.66-2.18 1.24-.12 1.72-.18 1.72-.64v-.03c0-.58-.38-.92-1.05-.92-.7 0-1.13.35-1.26.82l-1.82-.15c.27-1.3 1.39-2.1 3.09-2.1 1.58 0 3 .7 3 2.4V24h-1.86v-.98h-.05c-.35.66-1.03 1.11-2.08 1.11zm.57-1.35c.86 0 1.47-.57 1.47-1.31v-.76c-.23.16-.93.26-1.36.32-.7.1-1.15.37-1.15.92s.43.83 1.04.83zm4.41 1.22v-7.1h1.9v1.25h.08c.26-.88.91-1.34 1.7-1.34.2 0 .45.03.62.07v1.74a3.3 3.3 0 00-.83-.1c-.86 0-1.5.6-1.5 1.47V24h-1.97zm7.67.14c-2.18 0-3.52-1.4-3.52-3.65 0-2.2 1.36-3.67 3.44-3.67 1.88 0 3.34 1.19 3.34 3.6v.54h-4.83c0 1.06.62 1.71 1.6 1.71.66 0 1.17-.28 1.36-.82l1.82.12c-.27 1.31-1.46 2.17-3.2 2.17zm-1.57-4.4h2.97c0-.85-.6-1.46-1.45-1.46a1.5 1.5 0 00-1.52 1.46z"
        />
        <path
          fill="rgba(255,255,255,0.2)"
          d="M45.94 10H60l2 2v44l-2 2H40.84l.97-1.5h17.57l1.12-1.12V12.62l-1.12-1.12H47.26l-1.43 7.39H44.3l1.37-7.46.28-1.43zM12 58l-2-2V12l2-2h19.9l-1.01 1.5H12.62l-1.12 1.12v42.76l1.12 1.12H27.1l-.24 1.5H12zm3-5h8.5l-.3 1.5H14l-.5-.5v-9l1.5 3v5zm34 0l1.5 1.5H43l1-1.5h5z"
        />
        <path
          fill="url(#cloudflare-pages-logo-gradient)"
          d="M32.67 40H19l-1.66-3.12 23-34 3.62 1.5L39.42 28H53l1.68 3.09-22 34-3.66-1.4L32.67 40zM15.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        />
      </svg>
      <div className="border rotate-45 scale-[60%] md:scale-100 md:rotate-[80deg] border-white/25" />
      <svg
        className={cn(
          "transition self-end scale-[80%] md:scale-100",
          hover && "-translate-x-12 -translate-y-9",
          !hover && "-translate-x-10 -translate-y-7",
        )}
        height="35"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 284 65"
      >
        <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
      </svg>
    </div>
  );
};

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "We build Zudoku with modern tools and technologies. React, Tailwind CSS, TypeScript, and Vite to create a fast and responsive experience." +
      "\n",
    header: (
      <div
        className={cn(
          "h-full rounded-xl z-40 w-full",
          "bg-indigo-900/30 [mask-image:radial-gradient(60%_60%_at_50%_50%,white_0%,transparent_100%)]",
        )}
      >
        <TechStackBubble />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Static Site Generation",
    description:
      "For best performance and SEO, generate static sites with ease.",
    header: (
      <Skeleton>
        <div className="flex flex-col w-full gap-2 p-5">
          <div className="border border-cyan-700 h-5 w-full rounded-sm bg-cyan-900" />
          <div className="border border-cyan-700 h-5 rounded-sm bg-cyan-900 w-1/2" />
          <div className="border border-cyan-700 h-5 rounded-sm bg-cyan-900 w-2/3" />
        </div>
      </Skeleton>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Platform Agnostic",
    description:
      "Run on Cloudflare Pages, Vercel, Netlify, AWS Lambda, and more.",
    header: <PlatformHeader />,
    className: "md:col-span-1",
  },
  {
    title: "AI Search",
    description:
      "Powered by Inkeep, Zudoku provides a powerful search experience.",
    header: (
      <div className="rounded-lg border-dashed border border-slate-800 h-full flex items-center justify-center">
        <InkeepLogo />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "OpenAPI Support",
    description: "Integrate with any OpenAPI spec to generate documentation.",
    header: (
      <div className="rounded-lg border-dashed border border-slate-800 h-full flex items-center justify-center">
        <OpenApiHeader />
      </div>
    ),
    className: "md:col-span-1",
  },
];

const simpleFeatures = [
  {
    title: "Authentication Integration",
    description:
      "Integrate with any Auth0, Firebase, or Supabase for authentication. Let user view & create API keys.",
    className: "md:col-span-1",
  },
  {
    title: "Plugin System",
    description:
      "Zudoku comes with a powerful plugin system. Most of its features are built on top of it. So you can easily extend Zudoku with your own plugins to unlock new features.",
    className: "md:col-span-1",
  },
  {
    title: "Interactive Playground",
    description:
      "Zudoku comes with an interactive playground. You can test your API directly from the documentation, support bringing your own API Keys",
    className: "md:col-span-1",
  },
  {
    title: "MDX Support",
    description:
      "Add any MDX content to your docs. Write your docs in Markdown and React components.",
    className: "md:col-span-1",
  },
  {
    title: "Theming",
    description:
      "Supports the same theming as shadcn, so you can easily customize the look and feel of your docs.",
    className: "md:col-span-1",
  },
  {
    title: "Dark Mode",
    description:
      "Comes with a built-in dark mode. Simply toggle between light and dark mode.",
    className: "md:col-span-1",
  },
];
