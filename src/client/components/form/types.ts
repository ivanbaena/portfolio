export type refsObj =
  | {
      [key: string]: React.MutableRefObject<
        HTMLInputElement | null | HTMLTextAreaElement
      >;
    }
  | { [key: string]: any };
