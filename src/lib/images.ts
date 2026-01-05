export const CDN_URL = "https://cdn.nkbus.com";

export const getImageUrl = (section: string, filename: string) => {
    // Handling leading slash just in case
    const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
    return `${CDN_URL}/picasso/${section}/${cleanFilename}`;
};
