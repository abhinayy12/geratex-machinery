type Pin = {
    name: string;
    x: number;
    y: number;
  };
  
  const pins: Pin[] = [
    // Americas
    { name: "USA", x: 326, y: 230 },
    { name: "El Salvador", x: 276, y: 278 },
    { name: "Colombia", x: 350, y: 330 },
    { name: "Ecuador", x: 326, y: 360 },
  
    // Brazil multiple installations
    { name: "Brazil", x: 410, y: 380 },
    { name: "Brazil East", x: 455, y: 420 },
    { name: "Brazil South", x: 415, y: 485 },
    { name: "Brazil Southeast", x: 435, y: 465 },
  
    // Europe
    { name: "Portugal", x: 566, y: 180 },
    { name: "Germany", x: 620, y: 135 },
    { name: "Norway", x: 633, y: 75 },
    { name: "Europe", x: 610, y: 155 },
    { name: "Europe Central", x: 635, y: 140 },
    { name: "Europe East", x: 650, y: 155 },
    { name: "Turkey", x: 705, y: 180 },
  
    // Middle East / Africa
    { name: "Egypt", x: 695, y: 235 },
  
    // India / Asia
    { name: "Ahmedabad", x: 832, y: 252 },
    { name: "Chandigarh", x: 843, y: 225 },
    // { name: "India South", x: 865, y: 277 },
    { name: "Bangladesh", x: 889, y: 252 },
  ];
  
  export default function WorldMap() {
    return (
      <svg
        viewBox="0 0 1200 600"
        className="h-full w-full"
        role="img"
        aria-label="Geratex worldwide installations map"
      >
        <image
          href="/images/world-map.svg"
          x="0"
          y="0"
          width="1200"
          height="600"
          preserveAspectRatio="xMidYMid meet"
        />
  
        {pins.map((pin, index) => (
        <g
            key={pin.name}
            transform={`translate(${pin.x}, ${pin.y})`}
            className="group cursor-pointer"
        >
            {/* Pin */}
            <g
            className="map-svg-pin"
            style={{
                animationDelay: `${700 + index * 320}ms`,
            }}
            >
            {/* Glow */}
            <circle
                r="10"
                fill="rgba(244,123,32,0.14)"
            />

            {/* Pin Icon */}
            <svg
                x="-8"
                y="-24"
                width="16"
                height="24"
                viewBox="0 0 30 42"
            >
                <path
                d="M15 0C7 0 1 6 1 14c0 11 14 27 14 27s14-16 14-27C29 6 23 0 15 0z"
                fill="#f47b20"
                stroke="white"
                strokeWidth="2.8"
                />
                <circle
                cx="15"
                cy="14"
                r="5"
                fill="white"
                />
            </svg>
            </g>

            {/* Label Background */}
            {/* <rect
            x={-(pin.name.length * 3.8 + 12)}
            y="-52"
            rx="8"
            ry="8"
            width={pin.name.length * 7.6 + 24}
            height="24"
            fill="white"
            stroke="#f47b20"
            strokeWidth="1.5"
            opacity="0"
            className="transition-opacity duration-200 group-hover:opacity-100"
            /> */}

            {/* Label */}
            <text
            x="0"
            y="-36"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#e8752a"
            opacity="0"
            className="pointer-events-none transition-opacity duration-200 group-hover:opacity-100"
            >
            {pin.name}
            </text>
        </g>
        ))}
      </svg>
    );
}