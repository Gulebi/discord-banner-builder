export const palettes = [
    {
        mainBlue: "#003566",
        darkBlue: "#001D3D",
        progressBlue: "#0B2545",
        gray: "#2C333A",
        yellow: "#FFC300",
        orange: "#FB8500",
    },
];

export const convertNum = (num: number): string => {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(num);
};

export const banners = {
    rank: [
        {
            width: 1080,
            height: 360,
            base: {
                borderWidth: 15,
                borderRadius: 20,
            },
            avatar: {
                placeholder: {
                    x: 189,
                    y: 180,
                    radius: 117,
                },
                image: {
                    dx: 72,
                    dy: 63,
                    dw: 234,
                    dh: 234,
                },
            },
            progress: {
                x: 347,
                y: 262,
                w: 661,
                h: 50,
                radii: 25,
            },
            texts: {
                username: {
                    x: 988,
                    y: 88,
                    align: "right" as CanvasTextAlign,
                },
                level: {
                    x: 988,
                    y: 160,
                    align: "right" as CanvasTextAlign,
                },
                xp: {
                    x: 988,
                    y: 211,
                    align: "right" as CanvasTextAlign,
                },
            },
        },
    ],
};
