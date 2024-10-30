import { Tag } from "@/shared";
import { TAG_COLOR_DICT, TagType } from "../../../domain";

type Props = {
  tags: TagType[];
};
export const Tags = ({ tags }: Props) => {
  return (
    <>
      {tags.map((tag) => {
        const color = TAG_COLOR_DICT[tag];

        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })}
    </>
  );
};
