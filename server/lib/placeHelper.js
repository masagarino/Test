export function toSearchPlacesParams(params) {
  const result = {
    term: 'food',
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    categories: params.cuisines,
    limit: 50,
    price: params.price,
    open_now: true,
  };
  return result;
}

export function fromSearchPlacesParams(params) {
  const result = {
    rating: params.rating,
    price: params.price,
    phone: params.phone,
    id: params.id,
    name: params.name,
    img: params.image_url,
    distance: params.distance,
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    reviewCount: params.review_count,
    photos: params.photos,
    coordinates: params.coordinates,
  };
  return result;
}
