import { useEffect } from "react";
//import paragraphs from "./about.js";

const Pages = (paragraph) => {
  const parseParagraph = [];
  //get the text without the tags
  function getText(source, start, end) {
    var rslt = source.substring(start, end);
    return rslt;
  }
  //determine the start and end position of block tags
  function resetData(source, tag) {
    var reset = source.indexOf(tag);
    return reset;
  }

  const test = (paragraph) => {
    /*initial search position within the paragraph text to find bold tags, text dynamically 
    changes after each iteration*/
    var startPosition = 0;
    const openingTag = "<b>";
    const closingTag = "</b>";
    //key
    var index = 1;

    //entire paragraph, length, find start and end bold tags
    const data = paragraph;
    var paragraphLength = data.length;
    var boldStartPosition = resetData(data, openingTag);
    var boldEndPosition = resetData(data, closingTag);

    //retrieves the bold text
    var paragraphSegment = "";
    //dynamically change the text after bold tags are found
    var temp = data;

    //check if there are any bold tags
    if (boldStartPosition >= 0 && paragraphLength > 0) {
      //loop through until we've reached the end of finding bold tags
      while (boldStartPosition >= 0) {
        /*Initially I used binary logic to determin a pattern for searching for tags
        I, concluded there are two situations, bold text preceding normal text, or
        bold text following normal text*/
        if (boldStartPosition === 0) {
          //getting the text to render as bold preceding normal text
          paragraphSegment = getText(
            temp,
            boldStartPosition + 3,
            boldEndPosition
          );
          //push the bold object into the array
          parseParagraph.push({
            id: index,
            data: paragraphSegment,
            isBold: true,
          });
          //bold text following normal text
        } else if (boldStartPosition > startPosition) {
          //add the not bold text into the array
          paragraphSegment = getText(temp, 0, boldStartPosition);
          parseParagraph.push({
            id: index,
            data: paragraphSegment,
            isBold: false,
          });
          //add the bold text into the array
          index++;
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
        //update the key, our search start position, refresh the temp data to search, and find the new bold tags
        index++;
        startPosition = boldEndPosition + 4;
        temp = temp.substring(startPosition);
        boldStartPosition = resetData(temp, openingTag);
        boldEndPosition = resetData(temp, closingTag);
        startPosition = 0;
      }
    }
    //bold tags not found or normal text following bold text
    if (startPosition < paragraphLength && temp != "") {
      parseParagraph.push({
        id: index,
        data: temp,
        isBold: false,
      });
    }

    return data;
  };
  test(paragraph.paragraph);

  return (
    <>
      <p className="My_Background">
        {/*iterate through the paragraph array to determine whether words are bold or not*/}
        {parseParagraph.map((words) => (
          <span
            key={words.id}
            style={{ fontWeight: words.isBold ? "bold" : "normal" }}
          >
            {words.data}
          </span>
        ))}
      </p>
    </>
  );
};

export default Pages;
