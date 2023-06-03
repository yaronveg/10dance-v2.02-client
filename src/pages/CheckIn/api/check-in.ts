const base_url = import.meta.env.VITE_BASE_URL;

export const checkInAttendee = async (id: string): Promise<Response> => {
        const url = `${base_url}/attendee/check_in/${id}`;
        const res = await fetch(url, { method: "POST" });
        return res;
}