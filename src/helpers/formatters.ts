export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

export const truncatePortableText = (blocks: any, maxLength = 200) => {
  if (!blocks) return [];

  let text = "";
  let truncatedBlocks = [];

  for (const block of blocks) {
    let blockText = block.children?.map((child:any) => child.text).join(" ") || "";

    if (text.length + blockText.length > maxLength) {
      blockText = blockText.substring(0, maxLength - text.length) + "...";
      truncatedBlocks.push({ ...block, children: [{ text: blockText }] });
      break;
    }

    text += blockText + " ";
    truncatedBlocks.push(block);
  }

  return truncatedBlocks;
};
