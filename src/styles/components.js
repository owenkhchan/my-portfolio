import tw from "tailwind-styled-components";

export const H1 = tw.h1`
    text-4xl
    font-bold
`;

export const H2 = tw.h2`
    text-3xl
    font-semibold
`;

export const H3 = tw.h3`
    text-xl
    font-semibold
`;

export const PBlack = tw.p`
    text-lg
    text-[#050505]
`;

export const PGrey = tw.p`
    text-lg
    text-[#5A5A5A]
`;

export const Button = tw.button`
    text-lg
    text-white
    bg-[#DDB3E3]
    rounded-lg
    p-3
    w-48

`;

export const HeaderWrapper = tw.div`
    text-center
    mt-16
`;

export const SubheaderWrapper = tw.div`
    flex
    flex-row
    justify-center
    space-x-2
`;

export const Subheaderline = tw.div`
    bg-[#5A5A5A]
    h-px
    w-14
    mt-[22px]
`;
