import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    mobileLittle: "(max-width: 400px)",
    mobile: "(max-width: 991px)",
    tablet: "(max-width: 1300px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
