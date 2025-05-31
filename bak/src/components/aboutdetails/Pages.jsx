import { useEffect } from "react";
import paragraphs from "./about.js";

const Pages = () => {
  const parseParagraph = [];

  function getText(source, start, end) {
    var rslt = source.substring(start, end);
    return rslt;
  }
  function resetData(source, tag) {
    var reset = source.indexOf(tag);
    return reset;
  }

  const test = (paragraph) => {
    var startPosition = 0;
    const openingTag = "<b>";
    const closingTag = "</b>";
    var index = 1;

    const data = paragraph.data;
    var paragraphLength = data.length;
    var boldStartPosition = resetData(data, openingTag);
    var boldEndPosition = resetData(data, closingTag);
    var paragraphSegment = "";
    var temp = data;

    if (boldStartPosition >= 0 && paragraphLength > 0) {
      while (boldStartPosition >= 0) {
        if (boldStartPosition === 0) {
          paragraphSegment = getText(
            temp,
            boldStartPosition + 3,
            boldEndPosition
          );
          parseParagraph.push({
            id: index,
            data: paragraphSegment,
            isBold: true,
          });
        } else if (boldStartPosition > startPosition) {
          paragraphSegment = getText(temp, 0, boldStartPosition);
          parseParagraph.push({
            id: index,
            data: paragraphSegment,
            isBold: false,
          });
          paragraphSegment = getText(
            temp,
            boldStartPosition + 3,
            boldEndPosition
          );
          parseParagraph.push({
            id: index,
            data: paragraphSegment,
            isBold: true,
          });
        }
        index++;
        startPosition = boldEndPosition + 4;
        temp = temp.substring(startPosition);
        boldStartPosition = resetData(temp, openingTag);
        boldEndPosition = resetData(temp, closingTag);
        startPosition = 0;
      }
    }
    if (startPosition < paragraphLength && temp != "") {
      parseParagraph.push({
        id: index,
        data: temp,
        isBold: false,
      });
    }
    console.log(parseParagraph);
    return data;
  };
  //useEffect(() => {
  paragraphs.map((paragraph) => test(paragraph));
  //});

  return (
    <>
      <p className="My_Background">
        {parseParagraph.map((item) => (
          <span
            key={item.id}
            style={{ fontWeight: item.isBold ? "bold" : "normal" }}
          >
            {item.data}
          </span>
        ))}
      </p>
    </>
  );
};

export default Pages;
