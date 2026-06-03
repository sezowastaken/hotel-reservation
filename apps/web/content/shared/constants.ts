import type { PhysicalRoomUnit } from "@/lib/types/hotel";

export const HOTEL_NAME = "Palmiye Nature Hotel & Yacht Club";
export const HOTEL_SHORT_NAME = "Palmiye Nature";
export const PUBLIC_ROOM_COUNT = 14;

export const physicalRoomUnits: PhysicalRoomUnit[] = Array.from(
  { length: PUBLIC_ROOM_COUNT },
  (_, index) => {
    const roomNumber = String(101 + index);

    return {
      id: `room-${roomNumber}`,
      roomNumber,
      isActive: true,
      notes: "Prepared for future internal reservation calendar tracking.",
    };
  },
);
