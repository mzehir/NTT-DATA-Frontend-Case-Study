const MOCK_SUB_TITLE = {
  SUB_TITLE_1: { value: "subTitle1", label: "subtitle" },
  SUB_TITLE_2: { value: "subTitle2", label: "subtitle" },
  SUB_TITLE_3: { value: "subTitle3", label: "subtitle" },
  SUB_TITLE_4: { value: "subTitle4", label: "subtitle" },
  SUB_TITLE_5: { value: "subTitle5", label: "subtitle" },
};

export const TITLE = {
  TITLE_1: { value: "title1", label: "Title" },
  TITLE_2: { value: "title2", label: "Title" },
  TITLE_3: { value: "title3", label: "Title" },
  TITLE_4: { value: "title4", label: "Title" },
  TITLE_5: { value: "title5", label: "Title" },
};

export const getTitleEnumsAsArray = () => {
  let mockSubTitle = Object.values(MOCK_SUB_TITLE);

  let title = Object.values(TITLE);
  let result = [];

  for (let i = 0; i < title.length; i++) {
    let _title = title[i];
    _title.subTitle = mockSubTitle;
    result.push(_title);
  }
  return result;
};
