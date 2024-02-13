export default function getDate(isoDateString) {
    const now = new Date();
    const isoString = now.toISOString();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
        // timeZoneName: "short",
    };

    const date = new Date(isoDateString ?? isoString);

    const humanReadableDate = date.toLocaleDateString("en-US", options);

    return humanReadableDate;
}
