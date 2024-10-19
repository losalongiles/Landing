"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Eyes() {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const blink = async (isDouble = false) => {
      setIsBlinking(true)
      await new Promise(resolve => setTimeout(resolve, 50))
      setIsBlinking(false)
      if (isDouble) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setIsBlinking(true)
        await new Promise(resolve => setTimeout(resolve, 50))
        setIsBlinking(false)
      }
    }

    const scheduleNextBlink = () => {
      const nextBlinkDelay = Math.random() * 5000 + 1000 // Random delay between 1 and 6 seconds
      setTimeout(() => {
        const isDoubleBlink = Math.random() < 0.2 // 20% chance for a double blink
        blink(isDoubleBlink)
        scheduleNextBlink()
      }, nextBlinkDelay)
    }

    scheduleNextBlink()

    return () => {
      setIsBlinking(false)
    }
  }, [])

  const Eye = () => (
    <div className="w-16 h-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black rounded-full"
        animate={{
          scaleY: isBlinking ? 0.05 : 1,
        }}
        transition={{ duration: 0.05, ease: "easeInOut" }}
      />
    </div>
  )

  return (
    <div className="flex space-x-4">
      <Eye />
      <Eye />
    </div>
  )
}

export function ResponsiveLayoutWithLogoAndEyes() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="bg-black md:w-2/3 h-3/4 md:h-full relative flex items-center justify-center overflow-hidden">
          <svg
            width="328"
            height="243"
            viewBox="0 0 328 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-auto"
            title="Paul Blink Logo"
          >
            <path d="M152.194 198.552C153.692 197.292 154.85 196.167 156.179 195.214C162.174 190.922 168.203 186.698 174.197 182.406C177.706 179.92 181.18 177.365 184.689 174.879C186.187 173.823 187.516 173.993 188.265 175.151C189.185 176.514 188.674 177.604 187.55 178.557C185.744 180.124 184.109 181.861 182.202 183.292C173.039 190.104 165.444 198.586 157.507 206.693C154.305 209.963 151.444 213.573 148.481 217.081C147.255 218.512 145.415 219.023 143.712 218.376C141.975 217.695 140.953 216.06 141.123 214.016C141.498 209.622 142.009 205.194 142.384 200.8C143.099 192.148 143.78 183.496 144.496 174.845C144.598 173.448 144.734 172.052 144.564 170.587C144.325 170.996 144.087 171.404 143.882 171.847C142.282 175.151 140.238 178.149 137.479 180.601C131.484 185.881 125.353 191.024 119.426 196.372C115.815 199.642 112.341 203.082 109.003 206.624C100.624 215.412 92.3128 224.268 84.0017 233.091C81.8217 235.407 79.6418 237.689 77.4277 239.971C76.6784 240.754 75.8609 241.436 75.0094 242.117C73.9875 242.934 72.9316 243.003 71.9097 242.117C70.8538 241.197 71.1263 240.175 71.8416 239.222C75.0434 234.964 78.1771 230.672 81.5152 226.517C85.7729 221.237 90.0647 215.923 94.663 210.916C101.578 203.355 108.492 195.725 115.952 188.708C121.095 183.871 126.17 179.068 130.7 173.653C131.859 172.256 132.778 170.519 133.289 168.782C133.868 166.908 132.88 165.818 130.973 166.125C126.579 166.806 122.083 167.419 117.859 168.714C109.037 171.404 100.93 175.798 92.6534 179.818C91.6656 180.295 91.4272 180.976 91.4612 181.998C91.6656 189.321 91.8359 196.61 92.0062 203.934C92.0062 204.445 92.0062 204.955 91.9722 205.466C91.7337 207.067 90.5416 208.225 89.0088 208.225C87.4079 208.225 86.2157 207.408 85.9091 205.841C85.5685 204.172 85.3982 202.469 85.3642 200.766C85.1939 195.827 85.0917 190.888 84.9895 185.949C84.9895 185.676 84.9214 185.404 84.8532 184.62C82.7073 186.153 80.7658 187.448 78.9605 188.912C77.0531 190.445 75.3159 192.148 73.4425 193.715C72.7953 194.26 72.1141 194.941 71.3647 195.146C70.4791 195.35 69.2188 195.384 68.6057 194.907C68.0948 194.498 67.9586 193.17 68.1289 192.353C68.3673 191.331 69.1507 190.479 69.5595 189.457C72.6591 181.93 77.7002 175.73 82.9458 169.667C84.0698 168.373 84.4445 167.045 84.3423 165.341C84.0017 160.368 83.7973 155.361 83.5589 150.388C83.5589 149.946 83.4567 149.537 83.3545 148.787C81.6174 149.843 80.1186 150.797 78.5858 151.717C73.0678 155.089 67.5498 158.461 61.9977 161.799C61.2824 162.242 60.499 162.787 59.7156 162.855C58.7959 162.957 57.3994 162.889 56.9906 162.344C56.4797 161.663 56.5478 160.334 56.7863 159.381C56.9566 158.631 57.6719 157.916 58.285 157.371C60.1243 155.668 61.9296 153.931 63.9052 152.398C69.866 147.8 75.9631 143.303 81.9239 138.705C82.503 138.262 82.7755 137.377 83.1501 136.695C83.2523 136.525 83.2183 136.253 83.2183 136.014C83.2183 134.379 83.7633 132.846 85.4663 132.676C86.386 132.574 87.4079 133.63 88.7363 134.345C92.6193 132.54 97.0814 130.428 101.578 128.452C106.346 126.341 111.183 124.331 116.497 124.024C119.494 123.854 122.049 124.501 123.548 127.397C125.08 130.292 124.944 133.153 122.9 135.708C120.754 138.33 118.438 140.817 116.088 143.303C111.83 147.868 107.368 152.228 103.281 156.928C100.454 160.164 98.0692 163.775 95.4805 167.249C95.208 167.624 94.9696 168.066 94.9015 168.714C96.1277 167.93 97.2517 167.011 98.5461 166.431C104.166 163.843 109.855 161.39 115.475 158.836C121.572 156.043 128.146 155.429 134.686 154.578C140.749 153.795 145.177 157.507 145.449 163.57C145.62 163.57 145.79 163.57 145.96 163.57C145.96 161.322 145.858 159.074 145.96 156.826C146.505 146.573 147.084 136.321 147.765 126.068C147.834 124.774 148.345 123.377 149.06 122.321C150.048 120.857 151.751 121.061 152.704 122.56C153.079 123.173 153.352 123.888 153.454 124.603C154.237 131.007 155.259 137.445 155.6 143.883C155.872 148.958 155.361 154.067 155.021 159.176C154.408 168.237 153.658 177.297 153.011 186.324C152.739 190.275 152.568 194.226 152.33 198.518L152.194 198.552ZM111.83 135.299C111.592 135.299 111.49 135.265 111.387 135.299C104.439 138.33 97.4561 141.328 90.5416 144.462C90.0647 144.666 89.69 145.722 89.7241 146.369C89.9625 150.286 90.3372 154.169 90.6778 158.052C90.7459 158.665 90.78 159.313 90.8481 159.926C91.0184 159.96 91.1547 159.994 91.325 160.062C98.1374 151.853 104.95 143.61 111.796 135.333L111.83 135.299Z" fill="white"/>
            <path d="M276.417 123.241C277.303 121.47 278.359 119.801 279.074 117.961C282.037 110.366 286.091 103.349 290.246 96.3663C293.073 91.5976 295.662 86.6586 298.455 81.8559C299.409 80.1869 300.669 78.6882 301.827 77.1554C302.1 76.8148 302.44 76.372 302.849 76.3038C303.735 76.0995 304.825 75.7588 305.472 76.1335C306.017 76.4401 306.392 77.7685 306.221 78.4838C305.642 80.8 304.961 83.0821 304.041 85.2621C300.703 93.3348 297.263 101.339 293.823 109.378C290.587 116.94 287.181 124.399 282.582 131.28C282.276 131.722 282.071 132.267 281.833 132.71C282.003 132.881 282.071 133.017 282.174 133.017C290.519 133.255 298.489 135.844 306.664 136.968C312.318 137.751 317.768 139.216 323.15 140.953C324.478 141.362 325.773 142.043 326.897 142.861C328.021 143.712 328.293 146.028 327.68 147.118C326.829 148.617 324.989 149.298 323.082 148.958C311.603 146.812 300.124 144.7 288.645 142.588C285.205 141.941 281.765 141.26 278.188 140.545C278.188 141.021 278.256 141.566 278.291 142.111C279.381 153.181 280.471 164.252 281.56 175.288C281.663 176.173 281.697 177.127 281.56 178.013C281.186 180.431 279.074 182.27 276.758 182.27C274.407 182.27 272.534 180.703 272.193 178.081C271.035 168.85 269.979 159.619 268.924 150.388C268.344 145.415 267.834 140.476 267.22 135.503C266.437 128.963 265.688 122.424 264.734 115.918C263.985 110.774 263.065 105.631 262.145 100.522C261.021 94.2204 261.021 87.8849 261.668 81.5494C261.771 80.6297 262.247 79.71 262.758 78.9266C263.508 77.8026 265.143 77.8366 265.926 78.9947C266.505 79.8463 266.914 80.9022 267.152 81.924C268.958 89.1792 270.763 96.4344 272.432 103.724C273.318 107.573 273.897 111.524 274.578 115.441C275.055 118.064 275.497 120.652 275.974 123.275C276.111 123.275 276.247 123.275 276.383 123.275L276.417 123.241Z" fill="white"/>
            <path d="M37.6775 105.018C37.0985 105.972 36.5194 106.925 35.9404 107.913C33.0792 112.818 30.252 117.723 27.3908 122.628C26.4371  124.263 25.1087 125.251 23.1672 125.319C19.1819 125.455 16.6614 121.572 18.4666 118.064C19.6929 115.713 20.9191 113.329 22.4178 111.115C26.4712 105.154 30.6948 99.3297 34.7823 93.4029C35.2591 92.7217 35.5657 91.7339 35.4976 90.9505C34.646 83.3887 33.6923 75.8611 32.7045 68.3334C32.2958 65.336 31.6486 62.3726 31.0695 59.0345C27.4249 60.4311 23.5078 61.7935 19.7269 63.3944C15.5033 65.1997 11.4158 67.3115 7.22622 69.185C6.10218 69.6618 4.84189 69.8662 3.61566 69.9684C2.08288 70.1046 0.720406 69.5937 0.175416 68.0268C-0.335512 66.5281 0.311663 65.336 1.57195 64.5185C7.08997 61.0442 12.3696 57.093 18.1941 54.2659C24.1209 51.3706 30.4905 49.3269 36.826 47.3513C42.4462 45.5801 48.2026 44.1835 53.9932 43.0254C58.1146 42.208 62.3724 42.5145 66.2895 44.3539C66.9026 44.6264 67.4816 45.001 68.0266 45.4098C71.7734 48.1347 72.4206 51.1322 70.7175 56.0711C69.0826 60.8057 66.4939 64.9613 63.6667 69.0146C59.7155 74.703 55.7644 80.3913 51.7791 86.0456C49.6332 89.043 47.3511 91.9383 45.2393 94.9698C44.8305 95.5829 44.558 96.5707 44.7283 97.2519C47.7598 110.298 50.8935 123.309 53.9591 136.321C54.1635 137.241 54.3338 138.228 54.3338 139.182C54.3338 141.396 52.8351 143.099 50.6892 143.406C48.5092 143.712 46.4655 142.418 45.8864 140.238C42.8549 129.304 39.9597 118.336 38.5631 107.028C38.495 106.381 38.2906 105.733 38.1544 105.086C38.0181 105.086 37.8478 105.018 37.7116 104.984L37.6775 105.018ZM41.4584 85.739C42.0374 85.2622 42.5143 84.9556 42.9231 84.5809C48.4411 79.5057 53.6525 74.158 57.9103 67.9928C60.3627 64.4163 62.4405 60.5332 64.4161 56.6502C65.9829 53.6187 65.0973 52.3584 61.6571 52.3243C59.5793 52.3243 57.4334 52.4265 55.4238 52.8693C49.1904 54.2999 42.9912 55.9008 36.7579 57.4336C35.9063 57.638 35.0888 57.9786 34.3395 58.217C36.2469 67.55 37.9841 76.7467 41.4584 85.739Z" fill="white"/>
            <path d="M223.758 150.695C224.132 151.921 224.507 153.181 224.848 154.408C227.572 163.536 227.879 172.937 227.913 182.372C227.913 186.119 227.743 189.866 227.607 193.579C227.572 194.464 227.368 195.384 227.13 196.236C226.755 197.734 225.869 198.926 224.268 198.995C222.668 199.097 221.578 197.939 221.169 196.542C220.454 194.056 219.84 191.535 219.466 188.98C218.376 181.419 217.115 173.857 216.536 166.261C216.06 160.028 214.629 153.999 213.573 147.868C213.266 145.994 212.551 144.155 212.074 142.316C211.836 141.498 211.427 140.647 211.495 139.863C211.563 138.944 211.836 137.581 212.483 137.24C213.198 136.866 214.629 137.036 215.378 137.547C219.84 140.544 224.132 143.848 228.628 146.778C235.202 151.07 241.947 155.157 248.623 159.347C248.793 159.21 248.963 159.04 249.134 158.904C248.827 158.052 248.486 157.201 248.214 156.349C245.693 148.106 243.002 139.931 240.788 131.586C239.085 125.251 238.098 118.711 236.701 112.273C235.747 107.845 234.589 103.451 233.567 99.023C233.295 97.8649 233.056 96.6727 233.022 95.5146C232.92 92.9941 234.487 90.9844 236.769 90.5416C239.222 90.0647 241.572 91.1888 242.287 93.6753C243.854 99.0571 245.387 104.473 246.511 109.957C249.202 122.968 251.518 136.014 255.708 148.651C258.33 156.485 260.749 164.422 263.269 172.29C263.814 173.993 263.406 175.185 262.111 175.969C260.647 176.854 259.795 175.969 258.909 174.981C254.72 170.553 249.985 166.84 244.774 163.604C240.55 160.982 236.599 157.916 232.409 155.157C229.718 153.386 226.857 151.921 224.064 150.32C223.962 150.422 223.86 150.525 223.758 150.661V150.695Z" fill="white"/>
            <path d="M170.723 88.3957C172.494 86.7267 174.129 85.1258 175.832 83.5249C181.282 78.4156 186.732 73.2723 192.25 68.2311C195.759 65.0293 199.369 61.9297 203.014 58.83C203.797 58.1829 204.785 57.5697 205.773 57.3994C207.169 57.161 207.919 58.1147 207.578 59.5113C207.34 60.4309 206.999 61.3847 206.42 62.134C204.683 64.2799 202.912 66.4258 200.97 68.4355C194.124 75.5204 186.8 82.2305 180.397 89.7241C175.458 95.4806 171.438 102.055 168.884 109.378C167.998 111.898 166.363 112.988 164.047 112.682C161.901 112.375 160.436 110.604 160.539 107.981C160.845 100.965 161.22 93.9478 161.765 86.9311C163.161 68.0267 165.001 49.1565 165.478 30.2181C165.682 22.997 167.113 15.8099 168.032 8.62286C168.271 6.78352 168.645 4.94417 169.02 3.10483C169.156 2.38953 169.395 1.60611 169.803 1.09519C170.246 0.550196 171.03 -0.0629167 171.575 0.00520705C172.222 0.107393 173.21 0.822689 173.346 1.40174C173.993 4.94417 174.708 8.55473 174.879 12.1312C175.049 15.9802 174.64 19.8292 174.504 23.6782C174.402 26.0625 174.334 28.4469 174.197 30.8312C173.448 43.6725 172.699 56.5479 171.915 69.3892C171.541 75.7247 171.098 82.0602 170.689 88.4639L170.723 88.3957Z" fill="white"/>
            <path d="M108.015 76.9169C109.276 76.3379 110.468 75.7929 111.626 75.2479C114.215 74.0557 116.667 74.771 117.723 77.0532C118.745 79.2672 117.825 81.5834 115.339 82.8096C113.806 83.559 112.273 84.2743 110.672 84.8874C109.718 85.2621 109.378 85.773 109.616 86.8289C110.774 91.9723 111.864 97.1156 112.954 102.293C113.806 106.346 114.623 110.4 115.441 114.453C115.679 115.713 115.611 116.974 114.078 117.28C112.546 117.621 112.001 116.565 111.66 115.271C109.31 106.04 106.959 96.8431 104.507 87.3058C102.497 88.0892 100.454 88.8386 98.478 89.7242C98.1373 89.8945 97.8989 90.5076 97.7627 90.9845C95.3783 99.7384 93.0281 108.492 90.6437 117.246C90.1328 119.085 89.5538 120.959 88.6681 122.662C88.2594 123.479 86.8629 124.501 86.2838 124.297C85.3641 124.024 84.2742 122.866 84.0698 121.913C83.6951 120.312 83.7973 118.506 83.9676 116.837C84.8192 109.753 85.807 102.668 86.7266 95.5828C86.7607 95.3103 86.7266 95.0378 86.7266 94.6972C82.9117 96.4003 79.2671 98.2056 75.4862 99.6702C72.8634 100.692 70.1044 101.407 67.3795 102.089C66.3236 102.361 64.9611 102.395 64.5523 100.931C64.1777 99.5681 65.0292 98.6484 66.1533 98.0353C73.3062 94.05 80.4252 90.0989 87.6122 86.1817C88.6341 85.6367 89.1109 85.0236 89.3494 83.8996C91.5975 72.2164 93.9137 60.4991 96.2299 48.8499C96.6386 46.8062 97.1836 44.7625 97.8308 42.7869C98.5461 40.607 100.181 39.6873 102.123 40.062C103.962 40.4026 104.882 41.7991 104.779 44.1494C104.337 54.8789 106.04 65.404 107.743 75.9291C107.777 76.2016 107.913 76.44 108.049 76.8829L108.015 76.9169ZM100.011 80.0506C100.181 80.2209 100.385 80.3912 100.556 80.5956C101.373 79.9144 102.872 79.2331 102.872 78.5859C102.838 76.5422 102.191 74.5326 101.782 72.5229C101.646 72.5229 101.475 72.5229 101.339 72.5229C100.896 75.0435 100.454 77.5641 99.9767 80.0506H100.011Z" fill="white"/>
            <path d="M139.522 88.5318C140.101 85.7728 140.749 83.0138 141.294 80.2548C142.588 73.6127 143.95 66.9707 144.972 60.2605C145.585 56.2412 145.551 52.1538 145.79 48.0663C146.13 41.833 146.403 35.5997 146.812 29.4004C146.88 28.1742 147.254 26.948 147.697 25.7899C148.447 23.7802 149.469 23.3034 151.717 23.6099C153.42 23.8484 154.476 24.9383 154.68 26.8117C155.395 33.1132 154.987 39.3806 154.169 45.6139C152.943 54.7765 151.751 63.9051 150.286 73.0337C149.537 77.6661 148.106 82.1623 147.084 86.7606C146.267 90.3371 145.62 93.9817 144.87 97.5582C144.768 98.1032 144.495 98.6482 144.257 99.1591C142.826 102.293 139.659 103.247 137.206 100.828C135.265 98.9207 133.596 96.5704 132.438 94.0839C127.328 83.1501 124.433 71.569 122.56 59.6814C121.776 54.7765 120.925 49.8376 120.243 44.9327C120.073 43.7745 120.243 42.5483 120.482 41.3902C120.72 40.0959 121.402 39.0059 122.934 39.0059C124.501 39.0059 125.08 40.0618 125.421 41.3562C125.727 42.5824 125.864 43.8086 126.17 45.0348C127.158 48.986 128.112 52.9712 129.168 56.8884C131.075 63.7689 132.949 70.6834 135.026 77.4958C136.15 81.2085 137.717 84.8191 139.08 88.4637C139.216 88.4637 139.386 88.4978 139.522 88.5318Z" fill="white"/>
            <path d="M208.736 205.296C208.668 206.182 208.634 206.693 208.6 207.204C208.293 210.133 206.284 212.04 203.627 212.006C200.97 212.006 199.131 209.997 198.722 207.101C197.973 201.651 197.053 196.236 196.27 190.786C194.192 176.48 191.637 162.276 190.513 147.834C190.207 144.053 189.253 140.34 188.742 136.593C188.606 135.401 188.742 134.005 189.253 132.983C189.662 132.199 190.854 131.62 191.808 131.382C192.932 131.075 193.408 132.063 193.817 133.017C198.654 144.632 201.958 156.622 202.946 169.259C203.184 172.188 204.036 175.049 204.513 177.944C205.466 184.041 206.284 190.173 207.238 196.27C207.544 198.211 207.987 200.153 208.328 202.128C208.532 203.286 208.702 204.479 208.838 205.296H208.736Z" fill="white"/>
          </svg>
        </div>
        <div className="bg-yellow-400 h-1/4 md:w-1/3 md:h-full flex items-center justify-center">
          <Eyes />
        </div>
      </div>
    </div>
  )
}