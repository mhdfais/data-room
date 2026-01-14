import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { BiSolidLockAlt } from "react-icons/bi";

const FolderGrid = ({ folders, selectedFolder, onSelect, onLockedClick }) => {
  return (
    <div className="px-10 mt-5">
      <Swiper
        modules={[Mousewheel]}
        spaceBetween={8}
        slidesPerView="auto"
        mousewheel
        className="!overflow-visible"
      >
        {folders.map((folder) => {
          const isActive = folder.id === selectedFolder?.id;

          return (
            <SwiperSlide
              key={folder.id}
              style={{ width: "7rem" }}
              className="cursor-pointer"
            >
              <div
                onClick={() => {
                  if (folder.locked) {
                    onLockedClick(folder);
                  } else {
                    onSelect(folder);
                  }
                }}
                className="text-center flex flex-col items-center"
              >
                {/* Folder Icon */}
                <div className="relative flex items-center justify-center">
                  {isActive ? (
                    <svg
                      width="90"
                      height="90"
                      viewBox="0 0 168 168"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_284)">
                        <g filter="url(#filter0_d_3_284)">
                          <path
                            d="M157.5 47.25V38.0625C157.5 36.322 156.809 34.6528 155.578 33.4221C154.347 32.1914 152.678 31.5 150.937 31.5H64.3125C63.4468 31.5142 62.5871 31.3541 61.7844 31.0294C60.9818 30.7046 60.2527 30.2217 59.6405 29.6095C59.0283 28.9973 58.5454 28.2682 58.2206 27.4656C57.8958 26.6629 57.7358 25.8032 57.75 24.9375V17.0625C57.75 15.322 57.0586 13.6528 55.8279 12.4221C54.5972 11.1914 52.928 10.5 51.1875 10.5H6.7725C4.97541 10.5473 3.26642 11.2886 2.00384 12.5683C0.741251 13.848 0.0231191 15.5668 -9.10368e-07 17.3644V149.034C-0.0438813 150.109 0.12552 151.181 0.498418 152.189C0.871315 153.197 1.44032 154.122 2.17255 154.909C2.90478 155.696 3.78573 156.33 4.7645 156.775C5.74327 157.22 6.80046 157.466 7.875 157.5H157.5"
                            fill="#112635"
                          />
                        </g>
                        <g filter="url(#filter1_d_3_284)">
                          <path
                            d="M7.875 157.5C8.92563 157.563 9.97771 157.403 10.9618 157.029C11.9458 156.656 12.8395 156.078 13.5837 155.334C14.328 154.589 14.9059 153.696 15.2793 152.712C15.6527 151.728 15.8132 150.676 15.75 149.625L16.2619 67.0294V55.125C16.2856 54.2608 16.4799 53.4098 16.8335 52.621C17.1871 51.8321 17.6931 51.1208 18.3225 50.5281C18.9518 49.9354 19.692 49.4728 20.5006 49.167C21.3092 48.8613 22.1703 48.7182 23.0344 48.7462H161.227C162.092 48.7182 162.953 48.8613 163.761 49.167C164.57 49.4728 165.31 49.9354 165.939 50.5281C166.569 51.1208 167.075 51.8321 167.428 52.621C167.782 53.4098 167.976 54.2608 168 55.125V149.625C167.862 151.668 166.988 153.592 165.54 155.04C164.092 156.488 162.168 157.362 160.125 157.5H7.875Z"
                            fill="#14597C"
                            fillOpacity="0.5"
                            shapeRendering="crispEdges"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_3_284"
                          x="-15.0068"
                          y="-4.5"
                          width="187.507"
                          height="177"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="7.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3_284"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3_284"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d_3_284"
                          x="-7.125"
                          y="33.7428"
                          width="190.125"
                          height="138.771"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="7.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3_284"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3_284"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_3_284">
                          <rect width="168" height="168" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="90"
                      height="90"
                      viewBox="0 0 168 168"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_291)">
                        <path
                          d="M157.5 47.25V38.0625C157.5 36.322 156.809 34.6528 155.578 33.4221C154.347 32.1914 152.678 31.5 150.938 31.5H64.3125C63.4468 31.5142 62.5871 31.3541 61.7844 31.0294C60.9818 30.7046 60.2527 30.2217 59.6405 29.6095C59.0283 28.9973 58.5454 28.2682 58.2206 27.4656C57.8959 26.6629 57.7358 25.8032 57.75 24.9375V17.0625C57.75 15.322 57.0586 13.6528 55.8279 12.4221C54.5972 11.1914 52.928 10.5 51.1875 10.5H6.77251C4.97541 10.5473 3.26643 11.2886 2.00384 12.5683C0.741259 13.848 0.0231268 15.5668 6.71903e-06 17.3644V149.034C-0.0438737 150.109 0.125528 151.181 0.498425 152.189C0.871323 153.197 1.44032 154.122 2.17256 154.909C2.90479 155.696 3.78574 156.33 4.76451 156.775C5.74328 157.22 6.80047 157.466 7.87501 157.5H157.5"
                          fill="#E0E3E5"
                        />
                        <path
                          d="M7.875 157.5C8.92563 157.563 9.97771 157.403 10.9618 157.029C11.9458 156.656 12.8395 156.078 13.5837 155.334C14.328 154.589 14.9059 153.696 15.2793 152.712C15.6527 151.728 15.8132 150.676 15.75 149.625L16.2619 67.0294V55.125C16.2856 54.2608 16.4799 53.4098 16.8335 52.621C17.1871 51.8321 17.6931 51.1208 18.3225 50.5281C18.9518 49.9354 19.692 49.4728 20.5006 49.167C21.3092 48.8613 22.1703 48.7182 23.0344 48.7462H161.227C162.092 48.7182 162.953 48.8613 163.761 49.167C164.57 49.4728 165.31 49.9354 165.939 50.5281C166.569 51.1208 167.075 51.8321 167.428 52.621C167.782 53.4098 167.976 54.2608 168 55.125V149.625C167.862 151.668 166.988 153.592 165.54 155.04C164.092 156.488 162.168 157.362 160.125 157.5H7.875Z"
                          fill="#F2F4F5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_291">
                          <rect width="168" height="168" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}

                  {folder.locked && (
                    <div className="absolute inset-0 flex items-center justify-center top-3 text-2xl">
                      <BiSolidLockAlt/>
                    </div>
                  )}
                </div>

                <p className="text-sm font-medium mt-3">{folder.name}</p>
                <p className="text-xs text-gray-400">{folder.opened}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FolderGrid;
