export default function getDate(isoDateString) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
        // timeZoneName: "short",
    };

    const date = new Date(isoDateString);

    const humanReadableDate = date.toLocaleDateString("en-US", options);

    return humanReadableDate;
}
