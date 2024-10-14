# Stations

Types:

- <code><a href="./src/resources/stations.ts">StationListResponse</a></code>

Methods:

- <code title="get /stations">client.stations.<a href="./src/resources/stations.ts">list</a>({ ...params }) -> StationListResponsesPageNumberURLPagination</code>

# Trips

Types:

- <code><a href="./src/resources/trips.ts">TripListResponse</a></code>

Methods:

- <code title="get /trips">client.trips.<a href="./src/resources/trips.ts">list</a>({ ...params }) -> TripListResponsesPageNumberURLPagination</code>

# Bookings

Types:

- <code><a href="./src/resources/bookings.ts">Booking</a></code>
- <code><a href="./src/resources/bookings.ts">BookingPayment</a></code>
- <code><a href="./src/resources/bookings.ts">BookingListResponse</a></code>

Methods:

- <code title="post /bookings">client.bookings.<a href="./src/resources/bookings.ts">create</a>({ ...params }) -> Booking</code>
- <code title="get /bookings/{bookingId}">client.bookings.<a href="./src/resources/bookings.ts">retrieve</a>(bookingId) -> Booking</code>
- <code title="get /bookings">client.bookings.<a href="./src/resources/bookings.ts">list</a>() -> BookingListResponsesPageNumberURLPagination</code>
- <code title="delete /bookings/{bookingId}">client.bookings.<a href="./src/resources/bookings.ts">delete</a>(bookingId) -> void</code>
- <code title="post /bookings/{bookingId}/payment">client.bookings.<a href="./src/resources/bookings.ts">payment</a>(bookingId, { ...params }) -> BookingPayment</code>
