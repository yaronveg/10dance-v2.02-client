const base_url = import.meta.env.VITE_BASE_URL;

export async function getAttendeeById({ id }: { id: string }) {
    const res = await fetch(`${base_url}/attendee/${id}`);
    return res;
}

export async function getAllAttendees() {
    const res = await fetch(`${base_url}/attendee/`);
    return res;
}

export async function deleteAttendeeById({ id }: { id: string }) {
    const res = await fetch(`${base_url}/attendee/${id}`, { method: 'DELETE' });
    return res;
}

export const checkInAttendee = async (id: string): Promise<Response> => {
        const url = `${base_url}/attendee/check_in/${id}`;
        const res = await fetch(url, { method: "POST" });
        return res;
}