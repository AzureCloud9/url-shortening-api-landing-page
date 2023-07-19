import fb from '../assets/icon-facebook.svg'
import twit from '../assets/icon-twitter.svg'
import pin from '../assets/icon-pinterest.svg'
import insta from '../assets/icon-instagram.svg'

export default function Footer() {
  return (
    <div className="w-[100vw] h-[776px] flex flex-col justify-start items-center bg-color6">
      <svg className="mt-[54px] mb-[49.33px]" xmlns="http://www.w3.org/2000/svg" width="121" height="33" viewBox="0 0 121 33" fill="none">
        <path fill="white" fillRule="evenodd" clipRule="evenodd" d="M34.1681 24.82H39.6081V13.396C39.6081 12.6253 39.5401 11.8377 39.4041 11.033C39.2681 10.2283 39.0018 9.503 38.6051 8.857C38.2084 8.211 37.6418 7.67834 36.9051 7.259C36.1684 6.83966 35.1995 6.63 33.9981 6.63C32.7061 6.63 31.5218 6.919 30.4451 7.497C29.3684 8.075 28.5014 8.89666 27.8441 9.962V0H22.4041V24.82H27.8441V14.586C28.0028 14.11 28.2294 13.6793 28.5241 13.294C28.8188 12.9087 29.1418 12.5743 29.4931 12.291C29.8444 12.0077 30.2071 11.7923 30.5811 11.645C30.9551 11.4977 31.3008 11.424 31.6181 11.424C32.4114 11.424 33.0348 11.696 33.4881 12.24C33.9414 12.784 34.1681 13.634 34.1681 14.79V24.82ZM15.47 7.242C15.878 7.49133 16.116 7.66133 16.184 7.752L18.632 3.128C18.088 2.81067 17.493 2.49334 16.847 2.176C16.201 1.85867 15.504 1.57533 14.756 1.326C14.008 1.07667 13.226 0.872667 12.41 0.714C11.594 0.555333 10.7667 0.476 9.928 0.476C8.72666 0.476 7.58767 0.645998 6.511 0.986C5.43433 1.326 4.488 1.83033 3.672 2.499C2.856 3.16767 2.21 3.98933 1.734 4.964C1.258 5.93867 1.02 7.06066 1.02 8.33C1.02 9.23667 1.15033 10.03 1.411 10.71C1.67167 11.39 2.06833 11.9907 2.601 12.512C3.13367 13.0333 3.808 13.4923 4.624 13.889C5.44 14.2857 6.40333 14.654 7.514 14.994C7.84947 15.0937 8.17496 15.1898 8.49048 15.2823L10.192 15.7774C10.7602 15.9521 11.2616 16.1387 11.696 16.337C12.2173 16.575 12.6253 16.8413 12.92 17.136C13.2147 17.4307 13.362 17.8047 13.362 18.258C13.362 19.4593 12.376 20.06 10.404 20.06C9.47466 20.06 8.55667 19.9353 7.65 19.686C6.74333 19.4367 5.92167 19.1533 5.185 18.836C4.44833 18.5187 3.83067 18.2013 3.332 17.884C2.83333 17.5667 2.53867 17.3513 2.448 17.238L0 22.1C0.70267 22.576 1.46766 22.9953 2.295 23.358C3.12234 23.7207 3.978 24.0323 4.862 24.293C5.746 24.5537 6.65266 24.752 7.582 24.888C8.51134 25.024 9.418 25.092 10.302 25.092C11.458 25.092 12.58 24.9617 13.668 24.701C14.756 24.4403 15.7193 24.021 16.558 23.443C17.3967 22.865 18.071 22.1057 18.581 21.165C19.091 20.2243 19.346 19.074 19.346 17.714C19.346 16.6033 19.1703 15.6513 18.819 14.858C18.4677 14.0647 17.969 13.3903 17.323 12.835C16.677 12.2797 15.8893 11.815 14.96 11.441C14.0307 11.067 12.988 10.7213 11.832 10.404C11.5524 10.3284 11.2842 10.2554 11.0273 10.1849L9.622 9.792C8.98733 9.61067 8.46034 9.41233 8.041 9.197C7.62167 8.98167 7.30433 8.738 7.089 8.466C6.87367 8.194 6.766 7.854 6.766 7.446C6.766 6.10866 7.76332 5.44 9.758 5.44C10.4833 5.44 11.2087 5.542 11.934 5.746C12.6593 5.95 13.328 6.188 13.94 6.46C14.552 6.732 15.062 6.99267 15.47 7.242ZM51.9482 25.16C50.4295 25.16 49.0752 24.9107 47.8852 24.412C46.6952 23.9133 45.6922 23.239 44.8762 22.389C44.0602 21.539 43.4426 20.553 43.0232 19.431C42.6039 18.309 42.3942 17.136 42.3942 15.912C42.3942 14.688 42.6039 13.515 43.0232 12.393C43.4426 11.271 44.0602 10.285 44.8762 9.435C45.6922 8.585 46.6952 7.905 47.8852 7.395C49.0752 6.885 50.4295 6.63 51.9482 6.63C53.4669 6.63 54.8156 6.885 55.9942 7.395C57.1729 7.905 58.1702 8.585 58.9862 9.435C59.8022 10.285 60.4256 11.271 60.8562 12.393C61.2869 13.515 61.5022 14.688 61.5022 15.912C61.5022 17.136 61.2926 18.309 60.8732 19.431C60.4539 20.553 59.8362 21.539 59.0202 22.389C58.2042 23.239 57.2012 23.9133 56.0112 24.412C54.8212 24.9107 53.4669 25.16 51.9482 25.16ZM49.0922 19.295C48.3442 18.445 47.9702 17.3173 47.9702 15.912C47.9702 15.232 48.0722 14.603 48.2762 14.025C48.4802 13.447 48.7579 12.954 49.1092 12.546C49.4606 12.138 49.8799 11.8207 50.3672 11.594C50.8546 11.3673 51.3816 11.254 51.9482 11.254C53.0816 11.254 54.0222 11.679 54.7702 12.529C55.5182 13.379 55.8922 14.5067 55.8922 15.912C55.8922 16.592 55.7902 17.221 55.5862 17.799C55.3822 18.377 55.1046 18.87 54.7532 19.278C54.4019 19.686 53.9882 20.0033 53.5122 20.23C53.0362 20.4567 52.5149 20.57 51.9482 20.57C50.7922 20.57 49.8402 20.145 49.0922 19.295ZM75.7463 11.628C74.4317 11.6507 73.2417 11.866 72.1763 12.274C71.111 12.682 70.3403 13.294 69.8643 14.11V24.82H64.4243V6.97H69.4223V10.574C70.0343 9.37266 70.822 8.432 71.7853 7.752C72.7487 7.072 73.7743 6.72067 74.8623 6.698H75.4063C75.5197 6.698 75.633 6.70933 75.7463 6.732V11.628ZM87.2534 24.752C88.2168 24.48 89.0724 24.1853 89.8204 23.868L88.7664 19.55C88.4491 19.7087 88.0751 19.856 87.6444 19.992C87.2138 20.128 86.7944 20.196 86.3864 20.196C85.9331 20.196 85.5591 20.0657 85.2645 19.805C84.9698 19.5443 84.8224 19.1193 84.8224 18.53V11.084H88.4604V6.97H84.8224V1.292H79.3824V6.97H77.1044V11.084H79.3824V20.4C79.3824 21.2613 79.5128 21.998 79.7734 22.61C80.0341 23.222 80.3911 23.715 80.8444 24.089C81.2978 24.463 81.8248 24.735 82.4254 24.905C83.0261 25.075 83.6664 25.16 84.3464 25.16C85.3211 25.16 86.2901 25.024 87.2534 24.752ZM92.0966 0H97.5366V18.462C97.5366 19.822 98.1146 20.502 99.2706 20.502C99.5426 20.502 99.8429 20.4623 100.172 20.383C100.5 20.3037 100.801 20.1847 101.073 20.026L101.787 24.106C101.107 24.4233 100.325 24.6727 99.4406 24.854C98.5566 25.0353 97.7292 25.126 96.9586 25.126C95.3945 25.126 94.1932 24.718 93.3546 23.902C92.5159 23.086 92.0966 21.9073 92.0966 20.366V0ZM104.828 27.846C104.431 27.778 104.006 27.6647 103.553 27.506V32.164C104.029 32.3453 104.499 32.4757 104.964 32.555C105.428 32.6343 105.887 32.674 106.341 32.674C108.018 32.674 109.469 32.215 110.693 31.297C111.917 30.379 112.767 29.1833 113.243 27.71L120.043 6.97H114.943L111.373 20.162L107.225 6.97H101.615L108.415 24.82C108.12 25.9987 107.791 26.8147 107.429 27.268C107.066 27.7213 106.556 27.948 105.899 27.948C105.581 27.948 105.224 27.914 104.828 27.846Z" />
      </svg>
      <div className="mb-[38px] text-center text-white">
            <h1 className="mb-[22px] text-[16px] font-bold">Features</h1>
            <p className="mb-[10px] text-[15px] font-medium text-color2">Link Shortening</p>
            <p className="mb-[10px] text-color2">Branded Links</p>
            <p className="text-color2">Analytics</p>
      </div>
      <div className="mb-[38px] text-center text-white">
            <h1 className="mb-[22px] text-[16px] font-bold">Resources</h1>
            <p className="mb-[10px] text-[15px] font-medium text-color2">Blog</p>
            <p className="mb-[10px] text-color2">Developers</p>
            <p className="text-color2">Support</p>
      </div>
      <div className="mb-[38px] text-center text-white">
            <h1 className="mb-[22px] text-[16px] font-bold ">Company</h1>
            <p className="mb-[10px] text-[15px] font-medium text-color2">About</p>
            <p className="mb-[10px] text-color2">Our Team</p>
            <p className=" mb-[10px] text-color2">Careers</p>
            <p className=" text-color2">Contact</p>
      </div>
      <div className="flex w-[168px] justify-evenly">
        <img src={fb} alt='pic'></img>
        <img src={twit} alt='pic'></img>
        <img src={pin} alt='pic'></img>
        <img src={insta} alt='pic'></img>

      </div>
    </div>
  );
}
