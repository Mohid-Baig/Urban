const BuildingMock = [
  {
    id: 1,
    name: "Sunset Apartments",
    type: "Apartment",
    pricePerMonth: "$1200",
    pricePerDay: "$50",
    pricePerNight: "$60",
    locationCity: "New York",
    address: "123 Main St, New York, NY 10001",
    owner: {
      name: "John Doe",
      contact: "john.doe@example.com",
      image:
        "https://img.freepik.com/free-photo/front-view-happy-lawyer-with-smartphone_23-2148230858.jpg",
    },
    reviews: [
      {
        reviewer: "Alice Smith",
        comment: "Great place to stay!",
        rating: 4.5,
        image:
          "https://img.freepik.com/free-photo/smiling-woman-confident-successful-giving-thumbs-up-sign-generated-by-artificial-intelligence_188544-94303.jpg",
      },
      {
        reviewer: "Bob Johnson",
        comment: "Clean and comfortable.",
        rating: 4.0,
        image:
          "https://img.freepik.com/free-photo/confident-young-man-stylishly-dressed-exploring-city-with-smile-generated-by-artificial-intelligence_25030-64730.jpg",
      },
    ],
    rating: 4.2,
    propertyImage:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799723.jpg",
    similarPropertyImages: [
      "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004668.jpg",
      "https://img.freepik.com/free-photo/view-3d-graphic-apartment-complex_23-2150849049.jpg",
    ],
  },
  {
    id: 2,
    name: "Downtown Loft",
    type: "Loft",
    pricePerMonth: "$1500",
    pricePerDay: "$70",
    pricePerNight: "$80",
    locationCity: "Canada",
    address: "456 Market St, San Francisco, CA 94103",
    owner: {
      name: "Jane Smith",
      contact: "jane.smith@example.com",
      image: "https://img.freepik.com/free-photo/man-talking_23-2148006272.jpg",
    },
    reviews: [
      {
        reviewer: "Charlie Brown",
        comment: "Modern and stylish.",
        rating: 4.8,
      },
      {
        reviewer: "Dave Wilson",
        comment: "Excellent location.",
        rating: 4.7,
      },
    ],
    rating: 4.75,
    propertyImage:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799743.jpg",
    similarPropertyImages: [
      "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004691.jpg",
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799721.jpg",
    ],
  },
  {
    id: 3,
    name: "Cozy Cottage",
    type: "House",
    pricePerMonth: "$800",
    pricePerDay: "$40",
    pricePerNight: "$45",
    locationCity: "Austin",
    address: "789 Elm St, Austin, TX 73301",
    owner: {
      name: "Emily Davis",
      contact: "emily.davis@example.com",
      image:
        "https://img.freepik.com/free-photo/business-man-phone-park_23-2148018573.jpg",
    },
    reviews: [
      {
        reviewer: "Eve Turner",
        comment: "Charming and quiet.",
        rating: 4.3,
        image:
          "https://img.freepik.com/free-photo/young-adults-smiling-sitting-together-looking-camera-indoors-generated-by-artificial-intelligence_188544-127595.jpg",
      },
      {
        reviewer: "Frank Moore",
        comment: "Perfect getaway.",
        rating: 4.5,
      },
    ],
    rating: 4.4,
    propertyImage:
      "https://img.freepik.com/free-photo/view-3d-house-model_23-2150761166.jpg",
    similarPropertyImages: [
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799663.jpg",
      "https://img.freepik.com/free-photo/3d-rendering-isometric-house-model_23-2150799737.jpg",
    ],
  },
  {
    id: 4,
    name: "Urban Studio",
    type: "Studio",
    pricePerMonth: "$1000",
    pricePerDay: "$55",
    pricePerNight: "$65",
    locationCity: "Los Angeles",
    address: "101 Hollywood Blvd, Los Angeles, CA 90028",
    owner: {
      name: "George Martin",
      contact: "george.martin@example.com",
      image:
        "https://img.freepik.com/free-photo/business-men-carry-laptops-office-building_1359-1382.jpg",
    },
    reviews: [
      {
        reviewer: "Hannah Scott",
        comment: "Convenient and cozy.",
        rating: 4.6,
      },
      {
        reviewer: "Ian Clark",
        comment: "Great amenities.",
        rating: 4.7,
      },
    ],
    rating: 4.65,
    propertyImage:
      "https://img.freepik.com/free-photo/3d-rendering-isometric-house-model_23-2150799737.jpg",
    similarPropertyImages: [
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799727.jpg",
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg",
    ],
  },
  {
    id: 5,
    name: "Beachside Villa",
    type: "Villa",
    pricePerMonth: "$2000",
    pricePerDay: "$90",
    pricePerNight: "$100",
    locationCity: "Miami",
    address: "202 Ocean Dr, Miami, FL 33139",
    owner: {
      name: "Isabella Martinez",
      contact: "isabella.martinez@example.com",
      image:
        "https://img.freepik.com/free-photo/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg",
    },
    reviews: [
      {
        reviewer: "Jack White",
        comment: "Stunning views.",
        rating: 4.9,
      },
      {
        reviewer: "Karen Green",
        comment: "Luxurious stay.",
        rating: 4.8,
      },
    ],
    rating: 4.85,
    propertyImage:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799639.jpg",
    similarPropertyImages: [
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799673.jpg",
      "https://img.freepik.com/free-photo/3d-rendering-isometric-house-model_23-2150799737.jpg",
    ],
  },
  {
    id: 6,
    name: "Mountain Cabin",
    type: "GuestHouse",
    pricePerMonth: "$900",
    pricePerDay: "$50",
    pricePerNight: "$55",
    locationCity: "Denver",
    address: "303 Pine St, Denver, CO 80202",
    owner: {
      name: "Liam Johnson",
      contact: "liam.johnson@example.com",
      image:
        "https://img.freepik.com/free-photo/young-businessman-standing-against-old-wall-opening-laptop_23-2147937526.jpg",
    },
    reviews: [
      {
        reviewer: "Mia Brown",
        comment: "Cozy and peaceful.",
        rating: 4.4,
      },
      {
        reviewer: "Nathan Lee",
        comment: "Great for nature lovers.",
        rating: 4.6,
      },
    ],
    rating: 4.5,
    propertyImage:
      "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004668.jpg",
    similarPropertyImages: [
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799743.jpg",
      "https://img.freepik.com/free-photo/view-3d-house-model_23-2150761166.jpg",
    ],
  },
];

export default BuildingMock;
