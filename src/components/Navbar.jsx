import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[15vh] px-[4vw] bg-primary flex items-center justify-between">
      <svg
        width="153"
        height="67"
        viewBox="0 0 153 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51 24.2482C52.0539 23.3115 64.5441 14.178 71.0234 9.14286L92.1007 25.0679H82.9672L71.0234 16.9883L59.3138 25.0679V37.363H101V9.14286L91.5152 2L81.9133 9.14286V17.3708"
          stroke="white"
          strokeWidth="2"
        />
        <rect x="102" y="41" width="51" height="2" fill="white" />
        <rect y="41" width="51" height="2" fill="white" />
        <path
          d="M1.6543 62L5.0166 46.166H8.29297L7.00391 52.2031H13.1914L14.4805 46.166H17.7676L14.4053 62H11.1182L12.6113 54.9316H6.42383L4.93066 62H1.6543ZM21.0547 54.9746H25.8135C25.9352 54.1654 25.8171 53.5531 25.459 53.1377C25.1081 52.7152 24.6068 52.5039 23.9551 52.5039C23.2461 52.5039 22.6481 52.7259 22.1611 53.1699C21.6813 53.6139 21.3125 54.2155 21.0547 54.9746ZM28.5742 52.2568C28.8893 52.9515 29.0146 53.7572 28.9502 54.6738C28.9215 55.2109 28.7926 55.9844 28.5635 56.9941H20.5498C20.3421 58.1686 20.5355 58.9922 21.1299 59.4648C21.488 59.7585 21.9642 59.9053 22.5586 59.9053C23.1888 59.9053 23.7402 59.7262 24.2129 59.3682C24.4635 59.1748 24.7106 58.9062 24.9541 58.5625H28.0801C27.8509 59.2572 27.3389 59.9626 26.5439 60.6787C25.2979 61.8174 23.7725 62.3867 21.9678 62.3867C20.4782 62.3867 19.2643 61.9069 18.3262 60.9473C17.3952 59.9876 17.1589 58.4264 17.6172 56.2637C18.0469 54.237 18.8883 52.6829 20.1416 51.6016C21.402 50.5202 22.8522 49.9795 24.4922 49.9795C25.4661 49.9795 26.304 50.1621 27.0059 50.5273C27.7148 50.8926 28.2376 51.4691 28.5742 52.2568ZM37.2324 56.3066C37.0176 56.4284 36.8027 56.5286 36.5879 56.6074C36.373 56.679 36.0866 56.7471 35.7285 56.8115L35.0195 56.9404C34.3464 57.055 33.8522 57.1947 33.5371 57.3594C33.0072 57.6387 32.6813 58.0719 32.5596 58.6592C32.445 59.182 32.5059 59.5615 32.7422 59.7979C32.9857 60.027 33.3151 60.1416 33.7305 60.1416C34.3893 60.1416 35.0374 59.9482 35.6748 59.5615C36.3122 59.1748 36.7526 58.4694 36.9961 57.4453L37.2324 56.3066ZM35.6748 54.8779C36.262 54.8063 36.6882 54.7168 36.9531 54.6094C37.4258 54.4232 37.7051 54.1331 37.791 53.7393C37.8913 53.2594 37.7946 52.93 37.501 52.751C37.2074 52.5648 36.7383 52.4717 36.0938 52.4717C35.3704 52.4717 34.819 52.6507 34.4395 53.0088C34.1745 53.2738 33.9561 53.6318 33.7842 54.083H30.8301C31.1165 53.0589 31.582 52.2174 32.2266 51.5586C33.2578 50.5273 34.7581 50.0117 36.7275 50.0117C38.0094 50.0117 39.0944 50.266 39.9824 50.7744C40.8704 51.2829 41.1641 52.2425 40.8633 53.6533L39.7139 59.0244C39.6351 59.3968 39.5492 59.848 39.4561 60.3779C39.3916 60.779 39.3916 61.0511 39.4561 61.1943C39.5277 61.3376 39.653 61.4557 39.832 61.5488L39.7461 62H36.416C36.373 61.7637 36.3551 61.5417 36.3623 61.334C36.3695 61.1263 36.391 60.89 36.4268 60.625C35.904 61.0833 35.3346 61.4736 34.7188 61.7959C33.974 62.1755 33.1862 62.3652 32.3555 62.3652C31.2956 62.3652 30.4827 62.0645 29.917 61.4629C29.3584 60.8542 29.1973 59.9948 29.4336 58.8848C29.7415 57.4453 30.5186 56.4033 31.7646 55.7588C32.445 55.4079 33.3939 55.1572 34.6113 55.0068L35.6748 54.8779ZM51.5195 50.291H54.8066L48.1035 62H44.8701L43.1514 50.291H46.5889L47.1904 58.9277L51.5195 50.291ZM57.793 54.9746H62.5518C62.6735 54.1654 62.5553 53.5531 62.1973 53.1377C61.8464 52.7152 61.3451 52.5039 60.6934 52.5039C59.9844 52.5039 59.3864 52.7259 58.8994 53.1699C58.4196 53.6139 58.0508 54.2155 57.793 54.9746ZM65.3125 52.2568C65.6276 52.9515 65.7529 53.7572 65.6885 54.6738C65.6598 55.2109 65.5309 55.9844 65.3018 56.9941H57.2881C57.0804 58.1686 57.2738 58.9922 57.8682 59.4648C58.2262 59.7585 58.7025 59.9053 59.2969 59.9053C59.9271 59.9053 60.4785 59.7262 60.9512 59.3682C61.2018 59.1748 61.4489 58.9062 61.6924 58.5625H64.8184C64.5892 59.2572 64.0771 59.9626 63.2822 60.6787C62.0361 61.8174 60.5107 62.3867 58.7061 62.3867C57.2165 62.3867 56.0026 61.9069 55.0645 60.9473C54.1335 59.9876 53.8971 58.4264 54.3555 56.2637C54.7852 54.237 55.6266 52.6829 56.8799 51.6016C58.1403 50.5202 59.5905 49.9795 61.2305 49.9795C62.2044 49.9795 63.0423 50.1621 63.7441 50.5273C64.4531 50.8926 64.9759 51.4691 65.3125 52.2568ZM78.6006 54.1152L76.9248 62H73.7881L75.292 54.8779C75.4281 54.262 75.446 53.7894 75.3457 53.46C75.1738 52.8584 74.6654 52.5576 73.8203 52.5576C72.7819 52.5576 71.9762 52.998 71.4033 53.8789C71.1025 54.3444 70.877 54.9388 70.7266 55.6621L69.3838 62H66.333L68.8145 50.3125H71.7686L71.4033 52.0205C71.9261 51.4189 72.3916 50.9857 72.7998 50.7207C73.5303 50.248 74.3789 50.0117 75.3457 50.0117C76.556 50.0117 77.4762 50.3304 78.1064 50.9678C78.7438 51.598 78.9085 52.6471 78.6006 54.1152ZM79.9863 62L83.3486 46.166H86.625L85.3359 52.2031H91.5234L92.8125 46.166H96.0996L92.7373 62H89.4502L90.9434 54.9316H84.7559L83.2627 62H79.9863ZM104.93 56.167C105.18 54.9925 105.13 54.0902 104.779 53.46C104.436 52.8226 103.816 52.5039 102.921 52.5039C102.026 52.5039 101.27 52.8226 100.654 53.46C100.038 54.0902 99.6051 54.9925 99.3545 56.167C99.1038 57.3415 99.1504 58.2474 99.4941 58.8848C99.8451 59.5221 100.468 59.8408 101.363 59.8408C102.258 59.8408 103.014 59.5221 103.63 58.8848C104.246 58.2474 104.679 57.3415 104.93 56.167ZM100.826 62.4082C98.8138 62.4082 97.4424 61.7995 96.7119 60.582C95.9886 59.3574 95.8096 57.8857 96.1748 56.167C96.5329 54.4769 97.3385 53.0124 98.5918 51.7734C99.8451 50.5345 101.478 49.915 103.49 49.915C105.503 49.915 106.87 50.5345 107.594 51.7734C108.317 53.0124 108.5 54.4769 108.142 56.167C107.776 57.8857 106.967 59.3574 105.714 60.582C104.468 61.7995 102.839 62.4082 100.826 62.4082ZM127.338 51.3867C127.574 51.7949 127.689 52.2962 127.682 52.8906C127.667 53.2845 127.581 53.861 127.424 54.6201L125.834 62H122.697L124.276 54.5449C124.369 54.1009 124.377 53.7357 124.298 53.4492C124.14 52.9049 123.696 52.6328 122.966 52.6328C122.121 52.6328 121.462 52.9837 120.989 53.6855C120.746 54.0579 120.567 54.5055 120.452 55.0283L118.98 62H115.897L117.369 55.0283C117.52 54.3337 117.555 53.8288 117.477 53.5137C117.34 52.9479 116.896 52.665 116.145 52.665C115.271 52.665 114.623 52.9479 114.2 53.5137C113.971 53.8359 113.788 54.3158 113.652 54.9531L112.159 62H109.055L111.536 50.3125H114.512L114.146 52.0205C114.655 51.4118 115.106 50.9785 115.5 50.7207C116.188 50.2624 117.004 50.0332 117.949 50.0332C118.844 50.0332 119.528 50.2301 120.001 50.624C120.366 50.9893 120.603 51.4583 120.71 52.0312C121.254 51.3438 121.859 50.8389 122.525 50.5166C123.22 50.1943 123.954 50.0332 124.728 50.0332C125.243 50.0332 125.73 50.1335 126.188 50.334C126.647 50.5345 127.03 50.8854 127.338 51.3867ZM132.408 54.9746H137.167C137.289 54.1654 137.171 53.5531 136.812 53.1377C136.462 52.7152 135.96 52.5039 135.309 52.5039C134.6 52.5039 134.002 52.7259 133.515 53.1699C133.035 53.6139 132.666 54.2155 132.408 54.9746ZM139.928 52.2568C140.243 52.9515 140.368 53.7572 140.304 54.6738C140.275 55.2109 140.146 55.9844 139.917 56.9941H131.903C131.696 58.1686 131.889 58.9922 132.483 59.4648C132.841 59.7585 133.318 59.9053 133.912 59.9053C134.542 59.9053 135.094 59.7262 135.566 59.3682C135.817 59.1748 136.064 58.9062 136.308 58.5625H139.434C139.204 59.2572 138.692 59.9626 137.897 60.6787C136.651 61.8174 135.126 62.3867 133.321 62.3867C131.832 62.3867 130.618 61.9069 129.68 60.9473C128.749 59.9876 128.512 58.4264 128.971 56.2637C129.4 54.237 130.242 52.6829 131.495 51.6016C132.756 50.5202 134.206 49.9795 135.846 49.9795C136.82 49.9795 137.658 50.1621 138.359 50.5273C139.068 50.8926 139.591 51.4691 139.928 52.2568ZM144.096 58.2617C144.046 58.806 144.106 59.1927 144.278 59.4219C144.565 59.8301 145.22 60.0342 146.244 60.0342C146.846 60.0342 147.343 59.9447 147.737 59.7656C148.131 59.5866 148.368 59.318 148.446 58.96C148.518 58.6162 148.428 58.3548 148.178 58.1758C147.927 57.9967 146.928 57.6888 145.181 57.252C143.927 56.9225 143.082 56.5107 142.646 56.0166C142.201 55.5296 142.08 54.8278 142.28 53.9111C142.509 52.8298 143.129 51.9023 144.139 51.1289C145.156 50.3483 146.434 49.958 147.974 49.958C149.435 49.958 150.562 50.2516 151.357 50.8389C152.152 51.4189 152.467 52.4251 152.303 53.8574H149.241C149.277 53.4635 149.23 53.152 149.102 52.9229C148.851 52.5075 148.321 52.2998 147.512 52.2998C146.846 52.2998 146.348 52.4036 146.019 52.6113C145.696 52.819 145.507 53.0625 145.449 53.3418C145.37 53.6927 145.467 53.9469 145.739 54.1045C146.004 54.2692 147.007 54.5521 148.747 54.9531C149.9 55.2396 150.72 55.6729 151.207 56.2529C151.687 56.8402 151.834 57.5742 151.647 58.4551C151.397 59.6152 150.763 60.5641 149.746 61.3018C148.729 62.0322 147.318 62.3975 145.514 62.3975C143.673 62.3975 142.395 62.0107 141.679 61.2373C140.97 60.4567 140.741 59.4648 140.991 58.2617H144.096Z"
          fill="white"
        />
      </svg>

      <div className="w-1/3 text-secondary flex items-center justify-between ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/support">Support</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
