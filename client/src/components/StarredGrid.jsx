import { FaStar } from "react-icons/fa";

const StarredGrid = ({files}) => {
     if (!files || files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <FaStar className="text-gray-400" size={24} />
        </div>

        <p className="text-lg font-medium">
          No starred items
        </p>
        <p className="text-sm text-gray-400">
          Mark files with a star to access them quickly.
        </p>
      </div>
    );
  }
  return (
    <div className="px-10 mt-6">
      <div className="flex flex-wrap gap-8">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* File Icon */}
            <div className="relative">
              <svg
              width="40"
              height="50"
              viewBox="0 0 69 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.8359 22.7891L45.9609 0.914064C45.6705 0.623956 45.3258 0.393912 44.9464 0.237075C44.567 0.0802369 44.1605 -0.000321831 43.75 9.66245e-07H6.25C4.5924 9.66245e-07 3.00268 0.658481 1.83058 1.83058C0.65848 3.00269 0 4.5924 0 6.25V75C0 76.6576 0.65848 78.2473 1.83058 79.4194C3.00268 80.5915 4.5924 81.25 6.25 81.25H62.5C64.1576 81.25 65.7473 80.5915 66.9194 79.4194C68.0915 78.2473 68.75 76.6576 68.75 75V25C68.7503 24.5895 68.6698 24.183 68.5129 23.8036C68.3561 23.4242 68.126 23.0795 67.8359 22.7891ZM43.75 25V7.8125L60.9375 25H43.75Z"
                fill="#11B0FF"
              />
            </svg>

              {/* Star Badge */}
              <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 shadow">
                <FaStar className="text-slate-900" size={10} />
              </div>
            </div>

            {/* Meta */}
            <p className="text-sm font-medium mt-2">
              {file.title}
            </p>
            <p className="text-xs text-gray-400">
              {file.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarredGrid