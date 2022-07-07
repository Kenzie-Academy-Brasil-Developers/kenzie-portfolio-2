import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
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
