import { GetDestinationsResponseDto } from 'src/destinations/dtos/get-destinations-dto';

export default function generateBookingUrl(
  destination: GetDestinationsResponseDto,
  checkinDate: string,
  checkoutDate: string,
) {
  const baseUrl = 'https://www.booking.com/searchresults.html';
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // If dates don't match the format, return generic city page
  if (!dateRegex.test(checkinDate) || !dateRegex.test(checkoutDate)) {
    return baseUrl;
  }

  const params = new URLSearchParams({
    ss: `${destination.city}, ${destination.country}`,
    checkin: checkinDate,
    checkout: checkoutDate,
    group_adults: '1',
    no_rooms: '1',
  });

  return `${baseUrl}?${params.toString()}`;
}
